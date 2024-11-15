const camposFormulario = document.querySelectorAll('form input, form select');
const celdasTabla = document.querySelectorAll('td[data-field]');

function actualizarTabla(event) {
    const campo = event.target;
    const nombreCampo = campo.name;
    const celda = document.querySelector(`td[data-field="${nombreCampo}"]`);

    if (celda) {
        if (campo.type === 'checkbox') {
            const seleccionados = document.querySelectorAll(`input[name="${nombreCampo}"]:checked`);
            celda.textContent = Array.from(seleccionados).map((checkbox) => checkbox.value).join(', ');
        } else if (campo.type === 'radio') {
            const seleccionado = document.querySelector(`input[name="${nombreCampo}"]:checked`);
            celda.textContent = seleccionado ? seleccionado.value : '';
        } else {
            celda.textContent = campo.value;
        }
    }
}

camposFormulario.forEach((campo) => {
    const evento = campo.type === 'checkbox' || campo.type === 'radio' ? 'change' : 'input';
    campo.addEventListener(evento, actualizarTabla);
});
