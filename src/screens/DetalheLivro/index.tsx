/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, ScrollView, StatusBar, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Container,
  Cabecalho,
  ImageLivro,
  TituloLivro,
  NomeAutor,
  Corpo,
  Descricao,
  Conteudo,
  BotaoAdicionar,
  TextoBotao,
  Loading,
} from './styles';
import { BuscarLivro } from '../../services/Livro';

interface DetalheLivroDTO{
  id: number,
  nome: string,
  autor: string,
  imagem: string,
  descricao: string,
}

const DetalheLivro = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [detalheLivro, setDetalheLivro] = useState<DetalheLivroDTO | null>(null);

  useEffect(() => {
    const CarregaLivro = async () => {
      const livroId = route.params.livroId;
      const resposta = await BuscarLivro(livroId);
      const json = await resposta.json();
      setDetalheLivro(json);
    };
    CarregaLivro();
  }, []);

  if (detalheLivro === null){
    return <Loading>
      <ActivityIndicator size={200} color="#023E8A" />
    </Loading>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#e7f5f8" />
      <Container>
        <ScrollView>
          <Cabecalho>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={14} color="#000" />
              </TouchableOpacity>
            </View>
            <ImageLivro
              resizeMode="contain"
              source={{ uri: detalheLivro?.imagem }}
            />
            <TituloLivro>{detalheLivro?.nome}</TituloLivro>
            <NomeAutor>{detalheLivro?.autor}</NomeAutor>
          </Cabecalho>
          <Corpo>
            <Descricao>Descricao</Descricao>
            <Conteudo>
              {detalheLivro?.descricao}
            </Conteudo>
          </Corpo>
        </ScrollView>
        <BotaoAdicionar>
          <TextoBotao>Adicionar aos favoritos</TextoBotao>
        </BotaoAdicionar>
      </Container>
    </>
  );
};
export default DetalheLivro;
