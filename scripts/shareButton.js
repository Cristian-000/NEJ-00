const shareData = {
    title: 'Título de la Imagen',
    text: 'Descripción de la Imagen',
    url: 'https://cristian-000.github.io/NEJ-00/Screenshot_20240816_174137_YouTube.jpg'
};

document.getElementById('share-button').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error al compartir:', err);
    }
});
