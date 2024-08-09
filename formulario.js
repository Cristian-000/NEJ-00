function cargarFormulario() {
    const container = document.getElementById('container_formulario');
    container.innerHTML = `
<h2 id="toggleFormulario" class="text-center cursor-pointer mb-4" style="font-size: 1.5rem; color: #004085;">¡Envía tu frase y comparte tu injusticia!</h2>

<!-- Contenedor del formulario -->
<div id="formContainer" style="display: none;">
    <form id="fraseForm" class="p-4 border rounded shadow-sm bg-light">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>
        </div>
        <div class="mb-3">
            <label for="categoria" class="form-label">Categoría</label>
            <select class="form-select" id="categoria" name="categoria" required>
                <option selected disabled>Selecciona una categoría</option>
            
            </select>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="reconocimiento" name="reconocimiento">
            <label class="form-check-label" for="reconocimiento">¿Quieres reconocimiento?</label>
        </div>
        <div class="mb-3">
            <label for="frase" class="form-label">Tu Frase</label>
            <textarea class="form-control" id="frase" name="frase" rows="4" placeholder="Escribe tu frase aquí" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Enviar Frase</button>
    </form>
</div>
    `;

    // Evento para mostrar/ocultar el formulario
    document.getElementById('toggleFormulario').addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');
        if (formContainer.style.display === 'none') {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });

    document.getElementById('fraseForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const categoria = document.getElementById('categoria').value;
        const reconocimiento = document.getElementById('reconocimiento').checked ? 'Sí' : 'No';
        const frase = document.getElementById('frase').value;

        // Crear el enlace mailto
        const mailtoLink = `mailto:noesjustocanal@gmail.com?subject=Nueva%20Frase%20de%20${nombre}&body=Nombre: ${nombre}%0ACorreo: ${email}%0ACategoría: ${categoria}%0AReconocimiento: ${reconocimiento}%0AFrase:%0A${encodeURIComponent(frase)}`;

        // Redirigir a mailto
        window.location.href = mailtoLink;
    });

    cargarCategorias(); // Llama a la función para cargar las categorías desde el JSON
}

function cargarCategorias() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const selectCategoria = document.getElementById('categoria');
            data.categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.nombre;
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar las categorías:', error));
}

document.addEventListener('DOMContentLoaded', cargarFormulario);
