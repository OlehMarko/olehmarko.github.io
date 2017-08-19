var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/users', function(req, res) {
  fs.readFile('storage.data', 'utf8', (err, data) => {
    if (err) throw err;
    let user = req.body;
    if (!data) {
      user.id = 1;
      let users = [];
      users.push(user);
      let stringifiedUser = JSON.stringify(users);
      fs.writeFile('storage.data', stringifiedUser, 'utf8', function(err) {
        if (err) throw 'Error';
        res.status(200).send('User has been added');
      });
    } else {
      let users = JSON.parse(data);
      let findUser = users.find(newUser => {
        return newUser.username == user.username;
      });
      if (findUser) {
        res.status(409).send('Username already exist');
      } else {
        user.id = users.length + 1;
        users.push(user);
        console.log(users);
        let stringifiedUsers = JSON.stringify(users);
        fs.writeFile('storage.data', stringifiedUsers, 'utf8', function(err) {
          if (err) throw 'Error';
          res.status(200).send('User has been added');
        });
      }
    }
  });
});


app.get('/users', function(req, res) {
  fs.readFile('storage.data', 'utf8', (err, data) => {
    if (err) throw err;
    if (!data) {
      res.send([]);
    }
    let users = JSON.parse(data);
    let respondUsers = users.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email
    }));
    res.status(200).send(respondUsers);
  });
});

app.get('/users/:id', function(req, res) {
  let id = req.params.id;
  fs.readFile('storage.data', 'utf8', (err, data) => {
    if (err) throw err;
    if (!data) {
      res.send([]);
    }
    let users = JSON.parse(data);
    let user = users.find(user => {
      return user.id == id;
    });
    console.log(user);
    if (!user) {
      res.status(404).send('no user');
    } else {
      let respondUser = {
        id: user.id,
        username: user.username,
        email: user.email
      }
      res.status(200).send(respondUser);
    }
  })
});

app.put('/users/:id', function(req, res) {
  let id = req.params.id;
  fs.readFile('storage.data', 'utf8', (err, data) => {
    if (!data) {
      res.send([]);
    }
    let users = JSON.parse(data);
    let user = users.find(user => {
      return user.id == id;
    });
    if (!user) {
      res.status(404).send('no user');
    } else {
      let newUserData = req.body
      for (let i = 0; i < users.length; i++) {
        if (id == users[i].id) {
          users[i].id = newUserData.id;
          users[i].username = newUserData.username;
          users[i].email = newUserData.email;
          break;
        }
      }
      let stringifiedUsers = JSON.stringify(users);
      fs.writeFile('storage.data', stringifiedUsers, 'utf8');
      res.status(200).send(newUserData);
    }
  })
});

app.delete('/users/:id', function(req, res) {
  let id = req.params.id;
  fs.readFile('storage.data', 'utf8', (err, data) => {
    let users = JSON.parse(data);
    let user = users.find(user => {
      return user.id == id;
    });
    if (!user) {
      res.status(404).send('no user');
    } else {
      for (let i = 0; i < users.length; i++) {
        if (id == users[i].id) {
          users.splice(i, 1);
          break;
        }
      }
      let stringifiedUsers = JSON.stringify(users);
      let message = {
        "message": "User has been successfully removed."
      }
      fs.writeFile('storage.data', stringifiedUsers, 'utf8');
      res.status(200).send(message);
    }
  })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

const postUser = require('./postuser.js');
