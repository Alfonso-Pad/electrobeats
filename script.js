// VIDEO DE FONDO EN INDEX

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Control del video local
    const heroVideo = document.getElementById('hero-video');
    const toggleSoundBtn = document.getElementById('toggle-sound');

    // Asegurar que el video se reproduzca
    if (heroVideo) {
        // Forzar reproducción cuando el video esté listo
        heroVideo.addEventListener('loadeddata', function() {
            heroVideo.play().then(() => {
                console.log('Video iniciado correctamente');
            }).catch(err => {
                console.log('Error al iniciar video:', err);
            });
        });
        
        // Intentar reproducir inmediatamente
        heroVideo.play().catch(err => {
            console.log('Esperando carga del video...');
        });
    }

    // Función para activar/desactivar sonido
    if (heroVideo && toggleSoundBtn) {
        toggleSoundBtn.addEventListener('click', function() {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                toggleSoundBtn.textContent = '🔊';
                toggleSoundBtn.title = 'Desactivar sonido';
            } else {
                heroVideo.muted = true;
                toggleSoundBtn.textContent = '🔇';
                toggleSoundBtn.title = 'Activar sonido';
            }
        });
    }
});

// VALIDACIÓN DEL FORMULARIO DE CONTACTO

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();                                                // Evita que se envíe el formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar que no estén vacíos

        if (nombre === '') {
            alert('⚠️ Por favor, ingresa tu nombre');
            return;
        }

        if (email === '') {
            alert('⚠️ Por favor, ingresa tu email');
            return;
        }

        // Validar formato de email simple

        if (!email.includes('@')) {
            alert('⚠️ El email no es válido. Debe incluir @');
            return;
        }

        if (asunto === '') {
            alert('⚠️ Por favor, ingresa un asunto');
            return;
        }

        if (mensaje === '') {
            alert('⚠️ Por favor, escribe tu mensaje');
            return;
        }

        // Si todo es válido, mostrar mensaje de éxito

        alert('¡Gracias ' + nombre + '! Tu mensaje ha sido enviado. Te responderemos pronto.');

        // Limpiar el formulario

        form.reset();
    });
}
//CONTADOR DE CARACTERES DEL FORMULARIO DE CONTACTO

const textarea = document.getElementById('mensaje');
 
if (textarea) {
    const LIMITE = 500;
 
    // Crear el elemento contador y colocarlo debajo del textarea

    const contador = document.createElement('p');
    contador.id = 'contador-chars';
    contador.textContent = '0 / ' + LIMITE + ' caracteres';
    textarea.parentNode.insertBefore(contador, textarea.nextSibling);
 
    // Actualizar el contador cada vez que el usuario escribe

    textarea.addEventListener('input', function() {
        const cantidad = textarea.value.length;
        contador.textContent = cantidad + ' / ' + LIMITE + ' caracteres';
 
        // Cambiar color según el número de caracteres

        if (cantidad >= LIMITE) {
            contador.style.color = '#ff4444';                               // Rojo: límite alcanzado
            textarea.value = textarea.value.substring(0, LIMITE);             // Cortar el exceso
        } else if (cantidad >= LIMITE * 0.8) {
            contador.style.color = '#ffaa00';                               // Naranja: cerca del límite
        } else {
            contador.style.color = '#8a2be2';                               // Morado: normal
        }
    });
}

//BOTÓN PARA VOLVER AL PRINCIPIO DE LA PÁGINA 

// Crear el botón dinámicamente y añadirlo al body

const botonArriba = document.createElement('button');
botonArriba.textContent = '▲';
botonArriba.id = 'boton-arriba';
botonArriba.title = 'Volver arriba';
document.body.appendChild(botonArriba);
 
// Mostrar u ocultar el botón según la posición del scroll

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        botonArriba.style.opacity = '1';
        botonArriba.style.pointerEvents = 'auto';
    } else {
        botonArriba.style.opacity = '0';
        botonArriba.style.pointerEvents = 'none';
    }
});
 
// Al hacer clic, desplazar suavemente hasta arriba

botonArriba.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
