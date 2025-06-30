const URL=`http://localhost:3000`

const createButton = document.querySelector('#btn-cadastrar')
const findNameButton = document.querySelector('#btn-buscar-nome')
const findIDButton = document.querySelector('#btn-buscar-id')
const updateButton = document.querySelector('#btn-atualizar')
const removeButton = document.querySelector('#btn-remover')
const refreshButton = document.querySelector('#btn-recarregar')

const productsList = document.querySelector('.products')
const newProductElement = (product) =>{

    const productData={
        nome: product.nome,
        preco: product.preco,
        descricao: product.descricao
    }

    const productDiv = document.createElement('div')
    productDiv.classList.add('product')

    const nomeDiv = document.createElement('p')
    nomeDiv.classList.add('nomeProduto')
    nomeDiv.textContent = `Nome: ${productData.nome}`

    const precoDiv = document.createElement('p')
    precoDiv.classList.add('precoProduto')
    precoDiv.textContent = `Preço: ${productData.preco}`

    const descricaoDiv = document.createElement('p')
    descricaoDiv.classList.add('descProduto')
    descricaoDiv.textContent = `Descrição: ${productData.descricao}`

    productDiv.appendChild(nomeDiv);
    productDiv.appendChild(precoDiv);
    productDiv.appendChild(descricaoDiv);

    return productDiv
}

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
    .then(resp => resp.text())
    .then(result => console.log(result))
    .catch((erro)=>{
        console.log(`Não foi possível cadastrar o produto: ${erro}`)
    })
}

const findAllProducts=()=>{
    fetch(URL)
        .then(resp => resp.json())
        .then((products)=>{
            products.forEach((product)=>{
                productsList.append(newProductElement(product))
            })
        })
}




















createButton.addEventListener('click', createProduct)
refreshButton.addEventListener('click', findAllProducts)



