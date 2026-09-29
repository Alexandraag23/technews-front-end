const contenedor = document.getElementById("contenedor-noticias");

if (contenedor) {

    fetch("data/noticias.json")

        .then(respuesta => respuesta.json())

        .then(noticias => {

            noticias.forEach(noticia => {

                const tarjeta =
                    document.createElement("article");

                tarjeta.classList.add("tarjeta");

                tarjeta.innerHTML = `
                    ${noticia.imagen}

                    <h3>${noticia.titulo}</h3>

                    <p>
                        ${noticia.descripcion}
                    </p>

                    <p>
                        <strong>Categoría:</strong>
                        ${noticia.categoria}
                    </p>

                    <button
                        onclick="agregarFavorito(${noticia.id})">
                        Agregar a favoritos
                    </button>
                `;

                contenedor.appendChild(tarjeta);

            });

        });

}
