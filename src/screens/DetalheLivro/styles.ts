/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Cabecalho = styled.View`
  background-color: #E7F5F8;
  padding: 16px;
`;

export const ImageLivro = styled.Image`
  height: 256px;
  width: 100%;
  margin-top: 24px;
`;

export const TituloLivro = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-top: 16px;
  font-weight: bold;
`;

export const NomeAutor = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #aaa;
`;

export const Corpo = styled.View`
  padding: 16px;
  margin-top: 8px;
`;

export const Descricao = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 10px 0;
`;

export const Conteudo = styled.Text`
  color: #aaa;
  font-size: 16px;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
    background-color: #023E8A;
    height: 56px;
    margin: 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const TextoBotao = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const Loading = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1
`;
