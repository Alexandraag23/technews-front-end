const contenedorDetalle =
    document.getElementById("detalle-noticia");

const parametros =
    new URLSearchParams(window.location.search);

const id =
    Number(parametros.get("id"));

fetch("data/noticias.json")

    .then(respuesta => respuesta.json())

    .then(noticias => {

        const noticia =
            noticias.find(item => item.id === id);

        if (!noticia) {

            contenedorDetalle.innerHTML =
                "<p>La noticia no fue encontrada.</p>";

            return;
        }

        contenedorDetalle.innerHTML = `

            <article class="detalle">

                ${noticia.imagen}

                <h2>${noticia.titulo}</h2>

                <p>
                    <strong>Categoría:</strong>
                    ${noticia.categoria}
                </p>

                <p>
                    ${noticia.contenido}
                </p>

                <button
                    id="agregar-favorito">
                    Agregar a favoritos
                </button>

                <br><br>

                noticias.html
                    Volver a noticias
                </a>

            </article>
        `;

        const boton =
            document.getElementById(
                "agregar-favorito"
            );

        boton.addEventListener(
            "click",
            () => agregarFavorito(noticia)
        );

    });

function agregarFavorito(noticia) {

    const favoritos =
        JSON.parse(
            localStorage.getItem("favoritos")
        ) || [];

    const existe =
        favoritos.some(
            favorito => favorito.id === noticia.id
        );

    if (existe) {

        alert(
            "Esta noticia ya está en favoritos."
        );

        return;
    }

    favoritos.push(noticia);

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    alert(
        "Noticia agregada a favoritos."
