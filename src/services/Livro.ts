/* eslint-disable prettier/prettier */
export const BuscarLivros = async () => {
  //const resposta = fetch('https://scot13.tst.marttech.com.br/api/Livros');
  const resposta = fetch('https://localhost:5001/api/Livro/ListarLivros');
  return resposta;
};

export const BuscarLivro = async (livroId: number) => {
    //const resposta = fetch(`https://scot13.tst.marttech.com.br/api/Livros/${livroId}`);
    const resposta = fetch(`https://localhost:5001/api/Livro/ListarDetalheLivro/${livroId}`);
    return resposta;
  };
