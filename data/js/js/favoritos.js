function obtenerFavoritos() {

    return JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

}

function guardarFavoritos(favoritos) {

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

}

const lista = document.getElementById(
    "lista-favoritos"
);

if (lista) {

    const favoritos = obtenerFavoritos();

    if (favoritos.length === 0) {

        lista.innerHTML =
            "<p>No tienes noticias favoritas.</p>";

    }

}
