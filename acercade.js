function toggleCV() {
    const masTexto = document.getElementById("masTexto");
    const leerMasBtn = document.getElementById("leerMasBtn");

   
    if (masTexto.style.display === "none") {
        masTexto.style.display = "inline";
        leerMasBtn.textContent = "Leer menos"; 
    } else {
        masTexto.style.display = "none";
        leerMasBtn.textContent = "Leer más"; 
    }
}
