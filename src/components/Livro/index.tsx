/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {ContainerBotao, LivroImagem, NomeLivro, NomeAutor} from './styles';
import { ListaLivrosDTO } from '../../screens/ListaLivros';

interface LivroProps{
  data: ListaLivrosDTO
}

const Livro = (props: LivroProps) => {
  const navigation = useNavigation();
  return (
    <ContainerBotao
      onPress={() => {navigation.navigate('DetalheLivro', { livroId: props.data.id });}}>
      <LivroImagem
        resizeMode="contain"
        source={{ uri: props.data.imagem }}
      />
      <NomeLivro>
        {props.data.nome}
      </NomeLivro>
      <NomeAutor>
        {props.data.autor}
      </NomeAutor>
    </ContainerBotao>
  );
};
export default Livro;
