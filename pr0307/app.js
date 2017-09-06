var model = {
    currentPerson: {},
    allPersons: [
      {
        name: 'Lily Butler',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Waller Perry',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Tammi Donovan',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
      },
      {
        name: 'Doreen Flowers',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
      },
      {
        name: 'Price Pace',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
      },
      {
        name: 'Larson Maldonado',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
      },
      {
        name: 'Berg Bolton',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Mack Lott',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
      },
      {
        name: 'Rosanna Mcleod',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
      },
      {
        name: 'Rosalie Rice',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
      },
      {
        name: 'Virginia Buchanan',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
      },
      {
        name: 'Lorna Stein',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
      },
      {
        name: 'Rosalie Steele',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
      },
      {
        name: 'Wilcox Boyd',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
      },
      {
        name: 'Ollie Rice',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
      }
    ]
};

var control = {
    init: function(){
      listView.init();
      scoresView.init();
      profileView.init();
    },
    getAllNames: function(){
      let allNames = model.allPersons.map((person) => {
        return person.name;
      })
      return allNames;
    },
    getAllScores: function(){
      let allScores = model.allPersons.map((person) => {
        return person.score;
      })
      return allScores;
    },
    setCurrentPerson: function(index){
      model.currentPerson =  model.allPersons[index];
      console.log(model.currentPerson);
    },
    getCurrentPerson: function(){
      return model.currentPerson;
    },
    viewCurrentProfile: function(){
      
    },
    setCurrentPersonScore: function(value){

    }
};

var listView = {
    init: function(){
      this.render(control.getAllNames());
    },
    render: function(names){
      for (let i = 0; i < names.length; i++) {
        $('.names').append('<li>' + names[i] + '</li>');
      }
    },
    handleClicks: function(){
      $('.names li').click();
    }
};


var scoresView = {
    init: function(){
      this.render(control.getAllScores());
    },
    render: function(scores){
      for (let i = 0; i < scores.length; i++) {
        $('.scores').append('<li>' + scores[i] + '</li>');
      }
    },
    handleClicks: function(){
      $('.scores li').click();
    }
};


var profileView = {
    init: function(){
      $('document').ready(control.setCurrentPerson(0));
      this.render(control.getCurrentPerson());
    },
    render: function(currentPerson){
      $('.profile').append('<img src =' + currentPerson.photoUrl + ' />');
      $('.profile').append('<h3>'+ currentPerson.name +'</h3>');
      $('.profile').append(currentPerson.score);
    }
};

control.init();
