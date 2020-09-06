import axios from 'axios';

//Define a URL base da origem para consumo do servico --- SEM A BARRA NO FINAL DO ENDERECO
export default axios.create({
  baseURL: 'https://grades-api-sr.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
    'Access-Control-Allow-Credentials': true,
  },
});
