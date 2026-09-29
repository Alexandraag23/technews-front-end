const contenedor =
    document.getElementById("contenedor-noticias");

if (contenedor) {

    fetch("data/noticias.json")
        .then(respuesta => {

            if (!respuesta.ok) {
                throw new Error("No se pudieron cargar las noticias");
            }

            return respuesta.json();
        })

        .then(noticias => {

            contenedor.innerHTML = "";

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

                    detalle.html?id=${noticia.id}
                        Ver más
                    </a>
                `;

                contenedor.appendChild(tarjeta);
            });

        })

        .catch(error => {

            contenedor.innerHTML =
                "<p>No fue posible cargar las noticias.</p>";

            console.error(error);

        });
}
