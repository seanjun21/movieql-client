import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://movieql-server.herokuapp.com/'
});

export default client;
