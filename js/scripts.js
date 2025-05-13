function mostrarBienvenida() {
    Swal.fire({
        title: '¡Bienvenido a Optimus Wash!',
        text: '¿Te gustaría ver nuestro catálogo de lavadoras inteligentes?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, muéstramelo',
        cancelButtonText: 'No, gracias',
        confirmButtonColor: '#794aff',
        cancelButtonColor: '#6c757d',
        background: '#f9f9f9',
        color: '#333'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'productos.html';
        }
    });
}