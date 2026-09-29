const formulario =
    document.getElementById(
        "formulario-contacto"
    );

const confirmacion =
    document.getElementById(
        "confirmacion"
    );

if (formulario) {

    formulario.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();

            if (!formulario.checkValidity()) {

                formulario.reportValidity();
                return;

            }

            confirmacion.textContent =
                "¡Gracias por contactarnos! " +
                "Tu mensaje fue enviado correctamente.";

            formulario.reset();

        }
    );

}
