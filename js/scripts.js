const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas/22/modelos/798/anos/2012-1"
const url2 = "https://parallelum.com.br/fipe/api/v1/carros/marcas/41/modelos/5733/anos/2014-1"
const url3 = "https://parallelum.com.br/fipe/api/v1/carros/marcas/26/modelos/5640/anos/2013-1"

const loadingElement = document.querySelector("#loading")
const carros = document.querySelector("#carros")

async function getAllCarros() {
    let lista = {}

    const response = await fetch(url, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const data = await response.json();

    const response2 = await fetch(url2, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const data2 = await response2.json();

    const response3 = await fetch(url3, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const data3 = await response3.json();

    loadingElement.classList.add("hide");
    lista = { carro1: data, carro2: data2, carro3: data3 };

    Mostrar(lista)
}

function Mostrar(lista) {

    for (let key in lista) {
        const carro = lista[key];

        const div = document.createElement("div");
        div.classList.add("carro");

        const Modelo = document.createElement("p");
        const Marca = document.createElement("p");
        const AnoModelo = document.createElement("p");
        const Valor = document.createElement("p");
        const CodigoFipe = document.createElement("p");

        Modelo.innerText = `Modelo: ${carro.Modelo}`;
        Marca.innerText = `Marca: ${carro.Marca}`;
        AnoModelo.innerText = `AnoModelo: ${carro.AnoModelo}`;
        Valor.innerText = `Valor: ${carro.Valor}`;
        CodigoFipe.innerText = `CodigoFipe: ${carro.CodigoFipe}`;


        div.appendChild(Modelo);
        div.appendChild(Marca);
        div.appendChild(AnoModelo);
        div.appendChild(Valor);
        div.appendChild(CodigoFipe);
        carros.appendChild(div);

    }
}

getAllCarros();