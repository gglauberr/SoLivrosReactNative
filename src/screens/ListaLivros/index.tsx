/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import { BaseResponse } from '../../Model/BaseResponse';
import { BuscarLivros } from '../../services/Livro';
import {
  Container,
  ContainerRow,
  NomeUsuario,
  BotaoCabecalho,
  ListagemLivro,
} from './styles';

export interface ListaLivrosDTO{
  id:number,
  autor:string,
  imagem:string,
  nome:string,
}

const ListaLivros = () => {
  const [listaDosLivros, setListaDosLivros] = useState<BaseResponse<ListaLivrosDTO[]>>();

  useEffect(() => {
    const CarregaLivros = async () => {
      const resposta = await BuscarLivros();
      const json = await resposta.json();
      setListaDosLivros(json);
    };
    CarregaLivros();
  }, []);

  return (
    <Container>
      <ContainerRow>
        <NomeUsuario> Olá Glauber</NomeUsuario>
        <ContainerRow>
          <BotaoCabecalho>
            <Icon name="heart" size={24} color="#000" />
          </BotaoCabecalho>
          <BotaoCabecalho>
            <Icon name="search" size={24} color="#000" />
          </BotaoCabecalho>
        </ContainerRow>
      </ContainerRow>
      <ListagemLivro
         numColumns={2}
         data={listaDosLivros?.Data}
         renderItem={
          ({ item } : { item: ListaLivrosDTO }) => <Livro data={ item } />
        }
        keyExtractor={(item, index) => {
          return 'item' + index;
        }}
       />
    </Container>
  );
};

export default ListaLivros;
