import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: "api",
  host: 'https://awesome-movies-api.herokuapp.com',
  headers: {
    'X-Api-Key': 'BdLLjmwxgUordMICMHoUcwtt',
  }
});
