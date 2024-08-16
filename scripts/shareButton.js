function compartirImagen() {
    const fraseTexto = document.querySelector('.frase-texto').innerText;
    const imagenUrl = document.querySelector('.imagen-frase').src;
    const enlaceFrase = window.location.href;
    const textoParaCompartir = `${fraseTexto} \n\nMira esta frase completa en: ${enlaceFrase} \n\nSíguenos en TikTok: [tu_perfil_tiktok] \n\nSíguenos en YouTube: [tu_perfil_youtube]`;

    if (navigator.share) {
        navigator.share({
            title: 'Mira esta frase inspiradora',
            text: textoParaCompartir,
            url: enlaceFrase,
            files: [new File([imagenUrl], "frase.jpg", { type: "image/jpeg" })],
        }).then(() => console.log('Contenido compartido con éxito'))
          .catch((error) => console.error('Error al compartir:', error));
    } else {
        alert('Tu navegador no soporta compartir nativo');
    }
}
