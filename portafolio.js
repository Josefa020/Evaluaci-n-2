console.log("hola");

const trabajos = [
    {
        nombre: "De pétalo a flor",
        imagen: "img/imagen 1.jpg",
        calificacion: "Estrategico"
    },
    {
        nombre: "Noctu",
        imagen: "img/imagen 2.jpg",
        calificacion: "Industrial"
    },
    {
        nombre: "Boomerang",
        imagen: "img/imagen 3.jpg",
        calificacion: "Biomateriales"
    },
    {
        nombre: "Chile en 7 pilares",
        imagen: "img/imagen 4.jpg",
        calificacion: "Estrategico"
    },
    {
        nombre: "Microondas",
        imagen: "img/imagen 5.jpg",
        calificacion: "Industrial"
    },
    {
        nombre: "Alicate universal",
        imagen: "img/imagen 6.jpg",
        calificacion: "Industrial"
    },
     {
        nombre: "Akutun",
        imagen: "img/imagen 7.jpg",
        calificacion: "Souvenir"

    },
     {
        nombre: "Curcuma",
        imagen: "img/imagen 8.jpg",
        calificacion: "Investigación"

      }

];

const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach(trabajo => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.nombre}">
        <div class="gallery-overlay">
            <h3>${trabajo.nombre}</h3>
            <p>${trabajo.calificacion}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});
