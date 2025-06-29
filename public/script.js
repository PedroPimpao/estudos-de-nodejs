const URL=`http://localhost:3000`

const createButton = document.querySelector('#btn-cadastrar')
const findNameButton = document.querySelector('#btn-buscar-nome')
const findIDButton = document.querySelector('#btn-buscar-id')
const updateButton = document.querySelector('#btn-atualizar')
const removeButton = document.querySelector('#btn-remover')

const createProduct=(evt)=>{
    evt.preventDefault()

    const createName = document.querySelector('#nome-produto').value
    const createPrice = parseFloat(document.querySelector('#preco-produto').value)
    const createDescription = document.querySelector('#descricao-produto').value

    const data={
        nome: createName,
        preco: createPrice,
        descricao: createDescription
    }

    fetch(`${URL}/cadastro`, {
        method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    })
    .then(data => data.text())
    .then(result => console.log(result))
    .catch((erro)=>{
        console.log(`Não foi possível cadastrar o produto: ${erro}`)
    })
}

createButton.addEventListener('click', createProduct)



