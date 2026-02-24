class Livro{
    // atributos ou características
    titulo = 'O Poder do Hábito';
    autor = 'Charles Duhigg';
    editora = 'Objetiva';
    anoPublicacao = 2012;
    genero = 'Desenvolvimento Pessoal';
    numeroPaginas = 408;
    idioma = 'Português';
    isbn = '9788539004119';
    preco = 59.90;
    disponivel = true;

    // métodos ou ações
    abrir(){
        console.log('O livro foi aberto');
    }
    fechar(){
        console.log('O livro foi fechado');
    }
    emprestar(){
        this.disponivel = false;
        console.log('O livro foi emprestado');
    }
    devolver(){
        this.disponivel = true;
        console.log('O livro foi devolvido');
    }
}

// instanciar ou criar objeto
const meuLivro = new Livro();
meuLivro.abrir();
meuLivro.emprestar();
meuLivro.devolver();