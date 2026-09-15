const usuarios = [
    {
        id: 0,
        nome: 'Carlos Silva',
        idade: 28,
        email: 'carlos@email.com'
    },
    {
        id: 1,
        nome: 'Mariana Souza',
        idade: 24,
        email: 'mariana@email.com'
    },
    {
        id: 2,
        nome: 'João Oliveira',
        idade: 31,
        email: 'joao@email.com'
    },
]

const produtos = [
    {
        id: 0,
        nome: 'Notebook Lenovo IdeaPad',
        preco: 3499.90,
        categoria: 'Computadores'
    },
    {
        id: 1,
        nome: 'Samsung Galaxy S24',
        preco: 3999.90,
        categoria: 'Celulares'
    },
    {
        id: 2,
        nome: 'Teclado Mecânico HyperX',
        preco: 399.90,
        categoria: 'Periféricos'
    }
]

const noticias = [
    {
        titulo: 'Nova tecnologia de inteligência artificial é anunciada',
        categoria: 'Tecnologia',
        autor: 'Marcos Oliveira'
    },
    {
        titulo: 'Novo processador promete mais desempenho em computadores',
        categoria: 'Hardware',
        autor: 'Ana Costa'
    },
    {
        titulo: 'Empresa lança novo smartphone com recursos de IA',
        categoria: 'Tecnologia',
        autor: 'Lucas Mendes'
    }
]

const resultados = document.getElementById('resultadoOperacao')
const resultadoUsuario = document.getElementById('resultadoUsuario')
const resultadoNoticias = document.getElementById('resultadoNoticias')
const resultadoProdutos = document.getElementById('resultadoProdutos')

function desabilitarTodos() {
    document.getElementById('buscarUsuario').disabled = true
    document.getElementById('buscarProdutos').disabled = true
    document.getElementById('buscarNoticias').disabled = true
    document.getElementById('pesquisarProdutos').disabled = true
}

function habilitarTodos() {
    document.getElementById('buscarUsuario').disabled = false
    document.getElementById('buscarProdutos').disabled = false
    document.getElementById('buscarNoticias').disabled = false
    document.getElementById('pesquisarProdutos').disabled = false
}

//       ------------------ USUARIO ------------------
document.getElementById('buscarUsuario').addEventListener('click', (event) => {
    event.target.disabled = true
      
    resultados.textContent = ''
    resultadoUsuario.textContent = 'Buscando . . .'
    resultadoUsuario.style.color = '#b5b517'
    resultados.style.color = '#b5b517'

    desabilitarTodos()
    const resultadoUserFinal = new Promise((resolve) => {
        setTimeout(() => {

            resultadoUsuario.style.color = '#9da0a8'
            resultados.style.color = '#ffffff'
            resultadoUsuario.textContent = 'Aguardando novo pedido...'
            
            usuarios.forEach((usuario) => {

                resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Usuario ${usuario.id + 1}:</strong><strong> ${usuario.nome},  Idade: ${usuario.idade},  Email:  ${usuario.email}</strong> \n`
            }) 
            resolve('Dados encontrados')
        }, 3500)
    })
    
    resultadoUserFinal.then((resultadoFinal) => {
        alert(resultadoFinal)
        habilitarTodos()
    })
})

//       ------------------ PRODUTOS ------------------
document.getElementById('buscarProdutos').addEventListener('click', (event) => {
    event.target.disabled = true

    resultados.textContent = ''
    resultadoProdutos.textContent = 'Buscando . . .'
    resultadoProdutos.style.color = '#b5b517'
    resultados.style.color = '#b5b517'

    desabilitarTodos()  
    const resultadoProdutosFinal = new Promise((resolve) => {
        setTimeout(() => {

            resultadoProdutos.style.color = '#9da0a8'
            resultados.style.color = '#ffffff'
            resultadoProdutos.textContent = 'Aguardando novo pedido...'

            produtos.forEach((produto) => {

                resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Produto ${produto.id + 1}:</strong><strong> ${produto.nome},  Preço: ${produto.preco}, Categoria: ${produto.categoria}</strong> \n`
            }) 
            resolve('Dados encontrados')
        }, 3500)
    })

    resultadoProdutosFinal.then((resultadoFinal) => {
        alert(resultadoFinal)
        habilitarTodos()
    })
})

//       ------------------ NOTICIAS ------------------
document.getElementById('buscarNoticias').addEventListener('click', (event) => {

    event.target.disabled = true

    resultados.textContent = ''
    resultadoNoticias.textContent = 'Buscando . . .'
    resultadoNoticias.style.color = '#b5b517'
    resultados.style.color = '#b5b517'

    desabilitarTodos()  
    const resultadoNoticiaFinal = new Promise((resolve) => {
        setTimeout(() => {

            resultadoNoticias.style.color = '#9da0a8'
            resultados.style.color = '#ffffff'
            resultadoNoticias.textContent = 'Aguardando novo pedido...'

            noticias.forEach((noticia) => {
                    
                resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Noticias:</strong><strong> Titulo, ${noticia.titulo}, Categoria: ${noticia.categoria},  Autor:  ${noticia.autor}</strong> \n`
            }) 
            resolve('Dados encontrados')
        }, 3500)
    })

    resultadoNoticiaFinal.then((resultadoFinal) => {
        alert(resultadoFinal)
        habilitarTodos()
    })
})

//       ------------------ PESQUISA DOS PRODUTOS ------------------
document.getElementById('pesquisarProdutos').addEventListener('click', (event) => {
    event.target.disabled = true

    let respostaPesquisa = prompt('Qual produto deseja pesquisar sobre? NOME, PREÇO, CATEGORIA, Escolha uma dessas opções.')
    if (respostaPesquisa === null) {
        habilitarTodos()
        return
    }
    respostaPesquisa = respostaPesquisa.toUpperCase()
    
    desabilitarTodos()
//       ------------------ PESQUISA DO NOME DO PRODUTO ------------------
    if (respostaPesquisa == 'NOME') {

        let produtoPesquisaNome = prompt('Qual é o nome produto que você esta em mente?')
        if (produtoPesquisaNome === null) {
            habilitarTodos()
            return
        }
        produtoPesquisaNome = produtoPesquisaNome.toLowerCase()

        if (produtoPesquisaNome.length < 3) {
            alert('Não é possivel encontrar um produto com esta quantidade de digitos.')
            habilitarTodos()
            return
        } 
        
        const respostaPesquisaNome = new Promise((resolve, reject) => {
            resultados.textContent = ''
            resultadoProdutos.textContent = 'Pesquisando . . .'
            resultadoProdutos.style.color = '#b5b517'
            resultados.style.color = '#b5b517'

            setTimeout(() => {

                resultadoProdutos.style.color = '#9da0a8'
                resultados.style.color = '#ffffff'
                resultadoProdutos.textContent = 'Aguardando novo pedido...'
                
                const novoProdutoPesquisaNome = produtoPesquisaNome
                .split(' ')
                .map(palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
                .join(' ')
                
                const novosProdutosPesquisaNome = produtos.filter(produto => produto.nome.includes(novoProdutoPesquisaNome))

                if (novosProdutosPesquisaNome.length > 0) {
                    
                    resolve('Encontramos Produtos em relaçao a sua pesquisa!')
                    resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Produto ${novosProdutosPesquisaNome[0].id + 1}:</strong><strong> ${novosProdutosPesquisaNome[0].nome},  Preço: ${novosProdutosPesquisaNome[0].preco}, Categoria: ${novosProdutosPesquisaNome[0].categoria}</strong> \n`
                }
                else {
                    reject('Este produto não foi encontrado')
                }
            }, 3500)
                
        })
        respostaPesquisaNome
            .then((resultadoPesquisaFinal) => {

                alert(resultadoPesquisaFinal)
                habilitarTodos()
            })
            .catch((resultadoErrFinal) => {

                alert(resultadoErrFinal)
                habilitarTodos()
            })
    }

//       ------------------ PESQUISA DO PREÇO DO PRODUTO ------------------
    if (respostaPesquisa == 'PREÇO') {
        let produtoPesquisaPrecoTexto = prompt('Qual é o preço do produto que você esta em mente?')

        if (produtoPesquisaPrecoTexto === null) {
            habilitarTodos()
            return
        }

        let produtoPesquisaPreco = Number(produtoPesquisaPrecoTexto)
        if (isNaN(produtoPesquisaPreco)) {
            alert('Valor errado')
            habilitarTodos()
            return
        }

        const respostaPesquisaPreco = new Promise((resolve, reject) => {
            resultados.textContent = ''
            resultadoProdutos.textContent = 'Pesquisando . . .'
            resultadoProdutos.style.color = '#b5b517'
            resultados.style.color = '#b5b517'

                setTimeout(() => {

                resultadoProdutos.style.color = '#9da0a8'
                resultados.style.color = '#ffffff'
                resultadoProdutos.textContent = 'Aguardando novo pedido...'
                const novosProdutosPesquisaPreco = produtos.filter(
                    produto => Math.abs(produto.preco - produtoPesquisaPreco) <= 100
                )

                if (novosProdutosPesquisaPreco.length > 0) {
                    resolve('Encontramos Produtos em relaçao a sua pesquisa!')
                    resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Produto ${novosProdutosPesquisaPreco[0].id + 1}:</strong><strong> ${novosProdutosPesquisaPreco[0].nome},  Preço: ${novosProdutosPesquisaPreco[0].preco}, Categoria: ${novosProdutosPesquisaPreco[0].categoria}</strong> \n`
                } else {
                    reject('Este produto não foi encontrado')
                }
                
                },3500)
        })
        respostaPesquisaPreco
            .then((resultadoPesquisaFinal) => {

                alert(resultadoPesquisaFinal)
                habilitarTodos()
            })
            .catch((resultadoErrFinal) => {

                alert(resultadoErrFinal)
                habilitarTodos()
            })
    }

//       ------------------ PESQUISA DO CATEDGORIA DO PRODUTO ------------------
    if (respostaPesquisa == 'CATEGORIA') {

        let produtoPesquisaCategoria = prompt('Qual é a categoria do produto que você esta em mente?')

        if (produtoPesquisaCategoria === null) {
            habilitarTodos()
            return
        }
        produtoPesquisaCategoria = produtoPesquisaCategoria.toLowerCase()

        if (produtoPesquisaCategoria.length < 3) {
            alert('Não é possivel encontrar um produto com esta quantidade de digitos.')
            habilitarTodos()
            return
        } 
        
        const respostaPesquisaCategoria = new Promise((resolve, reject) => {
            resultados.textContent = ''
            resultadoProdutos.textContent = 'Pesquisando . . .'
            resultadoProdutos.style.color = '#b5b517'
            resultados.style.color = '#b5b517'

            setTimeout(() => {

                resultadoProdutos.style.color = '#9da0a8'
                resultados.style.color = '#ffffff'
                resultadoProdutos.textContent = 'Aguardando novo pedido...'
                
                const novoProdutoPesquisaCategoria = produtoPesquisaCategoria
                .split(' ')
                .map(palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
                .join(' ')
                
                const novosProdutosPesquisaCategoria = produtos.filter(produto => produto.categoria.includes(novoProdutoPesquisaCategoria))

                if (novosProdutosPesquisaCategoria.length > 0) {
                    
                    resolve('Encontramos Produtos em relaçao a sua pesquisa!')
                    resultados.innerHTML += `<strong style="color:rgb(177, 69, 69);">Produto ${novosProdutosPesquisaCategoria[0].id + 1}:</strong><strong> ${novosProdutosPesquisaCategoria[0].nome},  Preço: ${novosProdutosPesquisaCategoria[0].preco}, Categoria: ${novosProdutosPesquisaCategoria[0].categoria}</strong> \n`
                }
                else {
                    reject('Este produto não foi encontrado')
                }
            }, 3500)
                
        })
        respostaPesquisaCategoria
            .then((resultadoPesquisaFinal) => {

                alert(resultadoPesquisaFinal)
                habilitarTodos()
            })
            .catch((resultadoErrFinal) => {

                alert(resultadoErrFinal)
                habilitarTodos()
            })
                
    }

//       ------------------ POSSIVEL ERRO NA PESQUISA ------------------
            if (respostaPesquisa != 'NOME' && respostaPesquisa != 'PREÇO' && respostaPesquisa != 'CATEGORIA') {

                alert('Ocorreu um erro, verifique se digitou corretamente')
                habilitarTodos()
            }
})
