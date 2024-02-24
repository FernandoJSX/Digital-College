function listarProdutos(){
    try {
        fetch("https://fakestoreapi.com/products")
        .then(resposta => resposta.json())
        .then(produtos => {
            let listaDeApoio = [];
            cartoes.innerHTML = '';
            produtos.map(produto => {
                cartoes.innerHTML += `
                    <li>
                        <div class="avaliacoes">
                            <box-icon name='heart' type='solid'></box-icon>
                            <span>${produto.rating.rate}</span>
                        </div>
                        <img src="${produto.image}" alt="${produto.title}">
                        <div class="content">
                            <h6>${produto.category}</h6>
                            <h4>${produto.title}</h4>
                            <h3>R$ ${produto.price}</h3>
                        </div>
                    </li>
                `; 
                listaDeApoio.push(produto.category);
            })
            let categorias = new Set(listaDeApoio);
            Array.from(categorias).map(c => {
                categoria.innerHTML += `
                    <option>${c}</option>
                `;
            })
        })
    } catch (errou) {
        alert(errou.message)
    }
}

listarProdutos();