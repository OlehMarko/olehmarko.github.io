var President = Backbone.Model.extend({
  defaults: {
    name: '',
    surname: '',
    rate: 0
  },
  validate: function( attributes ){
    if( attributes.name === '' ){
      return 'Enter name';
    }
    if( attributes.surname === '' ){
      return 'Enter surname';
    }
  }

});

var PresidentsCollection = Backbone.Collection.extend({
  // with 'model' property set, raw data converted as a model of a proper type
  model: President
});
var presidentsCollection = new PresidentsCollection([
  { name: 'Bill', surname: 'Clinton', rate: 666 },
  { name: 'Jill', surname: 'Flinton', rate: 656 },
  { name: 'Vill', surname: 'Ilinton', rate: 246 },
  { name: 'Gill', surname: 'Elinton', rate: 11 },
  { name: 'Lill', surname: 'Olinton', rate: 112 }
]);

presidentsCollection.push(new President({ name: 'Petro', surname: 'Poroshenko', rate: 9000}));

presidentsCollection.comparator = 'name';
presidentsCollection.sort();


var PresidentsView = Backbone.View.extend({
  tagName: 'tbody',
  className: 'presidents',
  render: function(){
    this.model.each(function(person) {
      var presidentView = new PresidentView({model: person});
      this.$el.append(presidentView.render().$el);
  }, this)
  return this;
  },
  events: {
    'click': 'onClick'
  },
  onClick: function() {
    console.log(this.model);
    console.log('Click on ' + this.model.get('name') );
  }
});

var PresidentView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template('<td><%= name %></td><td><%= surname %></td><td><%= rate %></td>'),
  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  }
});

$('#app').html( new PresidentsView({ model: presidentsCollection }).render().$el );
