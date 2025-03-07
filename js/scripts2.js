const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`

const selectMarcas = document.querySelector("#selectMarcas")

const selectModelos = document.querySelector("#selectModelos")

const selectAnos = document.querySelector("#selectAnos")

let selectedValue = "";
let selectedValue2 = "";
let selectedValue3 = "";


const valorEspecifico = document.createElement("p")

async function getAllMarcas() {
    const response = await fetch(url, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const marcas = await response.json();
    for (let key in marcas) {
        const marca = marcas[key]

        const option = document.createElement("option");

        option.innerText = marca.nome
        option.value = marca.codigo

        selectMarcas.appendChild(option)
    }

    const selectedMarcaValue = document.getElementById("selectMarcas");

    selectedMarcaValue.addEventListener("change", function () {
        selectedValue = selectedMarcaValue.value;
        if ((selectedValue2 && selectedValue2 != '') || (selectedValue3 && selectedValue3 != '')) {
            selectModelos.innerHTML = '<option value="">Selecione um modelo</option>';
            selectAnos.innerHTML = '<option value="">Selecione um ano</option>';
        }
        valorEspecifico.innerHTML = '';
        if (selectedValue && selectedValue != "") {
            const url2 = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedValue}/modelos`
            getAllModelos(url2)
        }
    })
}
async function getAllModelos(url2) {
    const response = await fetch(url2, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const modelos = await response.json();

    for (let key in modelos.modelos) {
        const modelo = modelos.modelos[key]

        const option = document.createElement("option")

        option.innerText = modelo.nome
        option.value = modelo.codigo

        selectModelos.appendChild(option)
    }

    const selectModelosValue = document.getElementById("selectModelos");
    selectModelosValue.addEventListener("change", function () {
        selectedValue2 = selectModelosValue.value;
        if (selectedValue3 && selectedValue3 != '') {
            selectAnos.innerHTML = '<option value="">Selecione um Ano</option>';
        }
        if ((selectedValue) && (selectedValue2 || selectedValue2 != "")) {
            console.log(selectedValue)
            console.log(selectedValue2)

            const url3 = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedValue}/modelos/${selectedValue2}/anos`
            valorEspecifico.innerHTML = 'Selecione um veículo';
            getAllAnos(url3)
        }
        else {
            valorEspecifico.innerHTML = 'Selecione um veículo';
            selectAnos.innerHTML = '<option value="">Selecione um Ano</option>'
        }
    })
}

async function getAllAnos(url3) {
    const response = await fetch(url3, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });

    const anos = await response.json();

    for (let key in anos) {
        const ano = anos[key]

        const option = document.createElement("option")

        option.innerText = ano.nome
        option.value = ano.codigo

        selectAnos.appendChild(option)
    }

    const selectAnosValue = document.getElementById("selectAnos");
    selectAnosValue.addEventListener("change", async function () {
        selectedValue3 = selectAnosValue.value;
        console.log("Valor selecionado: ", selectedValue3)
        if ((selectedValue3) && selectedValue3 != "") {
            const urlFinal = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedValue}/modelos/${selectedValue2}/anos/${selectedValue3}`
            const preco = document.querySelector("#preco")
            const response = await fetch(urlFinal, { headers: { "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMGIxOWQ5ZC0yMjRmLTQyM2YtOWExMy1mMjg4YmIxNjhlY2EiLCJlbWFpbCI6ImpvYW9hY3RvcGFAZ21haWwuY29tIiwiaWF0IjoxNzQxMjAwMjM4fQ._lj9svjw09AphTRGqRkMJR4zud_9Ua0wZuNtbkB6TmM" } });
            const dataValor = await response.json();
            valorEspecifico.innerText = `Valor: ${dataValor.Valor}`
            preco.appendChild(valorEspecifico);
        }
        else {
            valorEspecifico.innerHTML = ""
        }
    })
}

getAllMarcas()