let titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Chega mais na Nossa Loja Online!';
document.body.appendChild(titulo);

let produto = document.createElement('div');
produto.className = 'produto';

let nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Capacete';

let descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Detalhaes do produto.';

let precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 950,99';

// Opcional: Adicionando uma imagem ao produto
let imagemProduto = document.createElement('img');
imagemProduto.src = 'imgs/capacete.png';
imagemProduto.alt = 'Imagem do Capacete';

produto.appendChild(imagemProduto);
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

document.body.appendChild(produto);