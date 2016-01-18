import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  year: DS.attr("string"),
  synopsis: DS.attr("string"),
  poster: DS.attr("string"),
  actors: DS.attr({
    name: DS.attr("string")
  })
});
