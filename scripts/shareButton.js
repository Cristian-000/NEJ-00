const shareData = {
    title: 'Título de la Imagen',
    text: 'Descripción de la Imagen',
    url: 'https://cristian-000.github.io/NEJ-00/pages/frases/amor_no_correspondido/amor_no_correspondido_1.html/imagen.jpg'
};

document.getElementById('share-button').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error al compartir:', err);
    }
});
