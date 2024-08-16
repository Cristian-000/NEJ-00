const imgElement = document.querySelector('.imagen-frase');
const imgUrl = imgElement.src;

const shareData = {
    title: 'Frase',
    text: 'Mira esta frase:',
    files: [imgUrl], // Esto es opcional y depende de la compatibilidad del dispositivo
    url: window.location.href
};

document.querySelector('.share-button').addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error al compartir:', err);
    }
});
