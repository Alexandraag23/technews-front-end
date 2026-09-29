const lista =
    document.getElementById("lista-favoritos");


function obtenerFavoritos() {

    return JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

}


function mostrarFavoritos() {

    const favoritos = obtenerFavoritos();

    lista.innerHTML = "";

    if (favoritos.length === 0) {

        lista.innerHTML = `
            <p>
                Todavía no tienes noticias favoritas.
            </p>
        `;

        return;
    }

    favoritos.forEach(noticia => {

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `

            ${noticia.imagen}

            <h3>${noticia.titulo}</h3>

            <p>
                ${noticia.descripcion}
            </p>

            detalle.html?id=${noticia.id}
                Ver noticia
            </a>

            <button
                onclick="eliminarFavorito(${noticia.id})">
                Eliminar
            </button>
        `;

        lista.appendChild(tarjeta);

    });
}


function eliminarFavorito(id) {

    let favoritos = obtenerFavoritos();

    favoritos =
        favoritos.filter(
            noticia => noticia.id !== id
        );

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    mostrarFavoritos();
}


mostrarFavoritos();
