// Array de objetos que contienen las imágenes, precios y áreas de los departamentos
let imagenes = [
    {src: 'img/imagen1.jpg', precio: '$78,850', area: '57.40 m²'},
    {src: 'img/imagen2.jpg', precio: '$85,000', area: '60.00 m²'},
    {src: 'img/imagen3.jpg', precio: '$90,750', area: '65.50 m²'},
    {src: 'img/imagen4.jpg', precio: '$95,500', area: '70.00 m²'},
    {src: 'img/imagen5.jpg', precio: '$100,250', area: '75.50 m²'},
    {src: 'img/imagen6.webp', precio: '$105,000', area: '80.00 m²'},
    {src: 'img/imagen7.webp', precio: '$110,750', area: '85.50 m²'},
    {src: 'img/imagen8.jpg', precio: '$115,500', area: '90.00 m²'},
    {src: 'img/imagen9.jpg', precio: '$120,250', area: '95.50 m²'},
    {src: 'img/imagen10.png', precio: '$125,000', area: '100.00 m²'}
];

// Índice actual de la imagen mostrada
let indice = 0;

// Selección de elementos del DOM
const imgElement = document.getElementById('imagen');
const precioElement = document.getElementById('precio');
const mensajeElement = document.getElementById('mensaje');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Función para actualizar la imagen mostrada y los detalles
function actualizarImagen() {
    imgElement.src = imagenes[indice].src;
    precioElement.textContent = imagenes[indice].precio;
    document.getElementById('info').querySelector('p:nth-child(3)').textContent = imagenes[indice].area;
    mensajeElement.textContent = '';
}

// Evento para botón "Atrás"
prevBtn.addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        actualizarImagen();
    } else {
        mensajeElement.textContent = 'Has llegado al inicio de las imágenes.';
    }
});

// Evento para botón "Siguiente"
nextBtn.addEventListener('click', () => {
    if (indice < imagenes.length - 1) {
        indice++;
        actualizarImagen();
    } else {
        mensajeElement.textContent = 'Has llegado al final de las imágenes.';
    }
});

// Inicializar la primera imagen
actualizarImagen();

