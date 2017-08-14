(function() {
  var students = [{
      name: 'Liudmyla',
      lastName: 'Bashta',
      img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
      coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
      email: 'liudmyla.bashta@gmail.com',
      skills: ['Javascript', 'HTML', 'CSS']
    },
    {
      name: 'Roman',
      lastName: 'Chapkailo',
      img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
      coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
      email: 'romafromukraine@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Khrystyna',
      lastName: 'Dalivska',
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
      coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
      email: 'khrystynadalivska@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Ivan',
      lastName: 'Gnatyshyn',
      img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
      coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
      email: 'gnatyshyn.ivan@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Andrii',
      lastName: "Hun'ka",
      img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
      coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
      email: 'andriyggg@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Maksym',
      lastName: 'Izmailov',
      img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
      coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
      email: 'maksym.izmailov.lv@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Taras',
      lastName: 'Kharkhalis',
      img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
      coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
      email: 'taraskharkhalis97@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Khrystia',
      lastName: 'Kondratovych',
      img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
      coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
      email: 'khrustyk@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Iuliia',
      lastName: 'Kurylo',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
      coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
      email: 'iulia.kurylo@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Roman',
      lastName: 'Mandziuk',
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
      email: 'rmandzyuk94@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Oleh',
      lastName: 'Marko',
      img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
      coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
      email: 'olehmarko@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Anatoliy',
      lastName: 'Mazur',
      img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
      coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
      email: 'mail4tolik@gmail.com',
      skills: ['JavaScript', 'CSS', 'HTML']
    },
    {
      name: 'Vitaliy',
      lastName: 'Palyushok',
      img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
      coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
      email: 'xskeletons@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Stepan',
      lastName: 'Prokopiak',
      img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
      coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
      email: 'sprokopyak96@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Stepan',
      lastName: 'Sendun',
      img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
      coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
      email: 'steve.neeson21@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Maksym',
      lastName: 'Izmailov',
      img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
      coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
      email: 'maksym.izmailov.lv@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Illya',
      lastName: 'Syniuk',
      img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
      coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
      email: 'illyasynuik@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Andrew',
      lastName: 'Tantsiura',
      img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
      coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
      email: 'andrii.tans@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Liliya',
      lastName: 'Tserkovna',
      img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
      coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
      email: 'lilichkaTserkovna@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Anton',
      lastName: 'Zhygalov',
      img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
      coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
      email: 'antonzhygalov@gmail.com',
      skills: ['JavaScript', 'HTML', 'CSS']
    }
  ];
  var newStudents = students.map(student => ({
    name: `${student.name} ${student.lastName} `,
    email: `${student.email} `,
    profilePicture: student.img,
    skills: `${student.skills.toString('')}`,
    controls: 'controls'
  }));

  var container = document.getElementById('container');
  var table = document.createElement('table');
  table.style.margin = '20px 0 0 0';
  var caption = ["Student", "Email", "Profile picture", "Skills", "Controls"];

  var form = document.createElement('form');
  for (let i = 0; i < caption.length - 1; i++) {
    var label = document.createElement('label');
    var input = document.createElement('input');
    if (caption[i] === 'email') {
      input.setAttribute('type', 'email');
    } else {
      input.setAttribute('type', 'text');
    }
    input.setAttribute('name', caption[i]);
    input.setAttribute('placeholder', caption[i]);
    label.appendChild(input);
    form.appendChild(label);
  }

  var submit = document.createElement('input');
  submit.setAttribute('type', 'button');
  submit.setAttribute('value', 'Submit');
  submit.classList.add('btn');
  var reset = document.createElement('input');
  reset.classList.add('btn');
  reset.setAttribute('type', 'reset');

  var headTr = document.createElement('thead');
  for (let i = 0; i < caption.length; i++) {
    var th = document.createElement('th');
    var span = document.createElement('span');
    var text = document.createTextNode(caption[i]);
    th.appendChild(text);
    th.appendChild(span);
    span.classList.add('glyphicon', 'glyphicon-sort')
    headTr.appendChild(th);
  }
  table.append(headTr);

  var tbody = document.createElement('tbody');
  for (let i = 0; i < newStudents.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var key in newStudents[i]) {
      var td = document.createElement('td');
      if (key === 'profilePicture') {
        var img = document.createElement('img');
        img.setAttribute('src', newStudents[i][key]);
        td.appendChild(img);
      } else if (key === 'controls') {
        var spanEdit = document.createElement('span');
        spanEdit.classList.add('glyphicon', 'glyphicon-edit');
        td.appendChild(spanEdit);
        var spanTrash = document.createElement('span');
        spanTrash.classList.add('glyphicon', 'glyphicon-trash');
        td.appendChild(spanTrash);
      } else {
        var text = document.createTextNode(newStudents[i][key]);
        td.appendChild(text);
      }
      tr.appendChild(td);
    }
  }
  table.appendChild(tbody);

  table.classList.add('table', 'table-hover');
  container.appendChild(form);
  form.appendChild(reset);
  form.appendChild(submit);
  container.appendChild(table);

  tbody.addEventListener("click", function(event) {
    var target = event.target;
    if (target.nodeName === 'TD') {
      var inner = target.parentNode.textContent;
      alert(inner);
    } else if (target.nodeName === 'IMG') {
      var inner = target.parentNode.parentNode.textContent;
      alert(inner);
    } else if (target.nodeName === 'SPAN' && target.nextSibling) {
      edit();
    } else if (target.nodeName === 'SPAN' && !target.nextSibling) {
      deleteRow();
    }
  }, true);

  submit.addEventListener("click", function() {
    var newStudent = {
      name: document.getElementsByName('Student')[0].value,
      email: document.getElementsByName('Email')[0].value,
      profilePicture: document.getElementsByName('Profile picture')[0].value,
      skills: document.getElementsByName('Skills')[0].value,
      controls: 'controls'
    };
    if (validate(newStudent)) {
      newStudents.push(newStudent);
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      for (var key in newStudents[newStudents.length - 1]) {
        var td = document.createElement('td');
        if (key === 'profilePicture') {
          var img = document.createElement('img');
          img.setAttribute('src', newStudents[newStudents.length - 1][key]);
          td.appendChild(img);
        } else if (key === 'controls') {
          var spanEdit = document.createElement('span');
          spanEdit.classList.add('glyphicon', 'glyphicon-edit');
          td.appendChild(spanEdit);
          var spanTrash = document.createElement('span');
          spanTrash.classList.add('glyphicon', 'glyphicon-trash');
          td.appendChild(spanTrash);
        } else {
          var text = document.createTextNode(newStudents[newStudents.length - 1][key]);
          td.appendChild(text);
        }
        tr.appendChild(td);
      }
    }
  });

  var headers = document.getElementsByTagName('th');
  var nameAlt = false;
  var emailAlt = false;
  var skillsAlt = false;

  headers[0].addEventListener('click', function() {
    changeIcon(nameAlt, 0);
    sortTable('name', 0, nameAlt);
    nameAlt = !nameAlt;
  });
  headers[1].addEventListener('click', function() {
    changeIcon(nameAlt, 1);
    sortTable('email', 1, emailAlt);
    emailAlt = !emailAlt;
  });
  headers[3].addEventListener('click', function() {
    changeIcon(nameAlt, 3);
    sortTable('skills', 3, skillsAlt);
    skillsAlt = !skillsAlt;
  });

  function changeIcon(alt, column) {
    for (let i = 0; i < headers.length; i++) {
      headers[i].childNodes[1].classList.remove('glyphicon-sort-by-alphabet-alt');
      headers[i].childNodes[1].classList.remove('glyphicon-sort-by-alphabet');
      headers[i].childNodes[1].classList.add('glyphicon-sort');
    }
    if (!alt) {
      headers[column].childNodes[1].classList.remove('glyphicon-sort');
      headers[column].childNodes[1].classList.remove('glyphicon-sort-by-alphabet-alt');
      headers[column].childNodes[1].classList.add('glyphicon-sort-by-alphabet');
    } else {
      headers[column].childNodes[1].classList.remove('glyphicon-sort-by-alphabet');
      headers[column].childNodes[1].classList.add('glyphicon-sort-by-alphabet-alt');
    }
  }

  function sortTable(propertyName, row, alt) {
    if (!alt) {
      var one = 1;
    } else {
      var one = -1;
    }
    if (propertyName == 'name') {
      newStudents.sort(function(a, b) {
        if (a.name > b.name) return one;
        if (a.name < b.name) return -one;
        return 0;
      });
    } else if (propertyName == 'email') {
      newStudents.sort(function(a, b) {
        if (a.email > b.email) return one;
        if (a.email < b.email) return -one;
        return 0;
      });
    } else if (propertyName == 'skills') {
      newStudents.sort(function(a, b) {
        if (a.skills > b.skills) return one;
        if (a.skills < b.skills) return -one;
        return 0;
      });
    }

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementsByTagName('table')[0];
    switching = true;
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[row];
        y = rows[i + 1].getElementsByTagName("TD")[row];
        if (!alt) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function edit() {
    var edits = document.getElementsByClassName('glyphicon-edit');
    for (let i = 0; i < edits.length; i++) {
      edits[i].onclick = function() {
        document.getElementsByName('Student')[0].value = newStudents[i].name;
        document.getElementsByName('Email')[0].value = newStudents[i].email;
        document.getElementsByName('Profile picture')[0].value = newStudents[i].profilePicture;
        document.getElementsByName('Skills')[0].value = newStudents[i].skills;
        newStudents.splice(this.rowIndex - 1, 1);
        tbody.removeChild(event.target.parentNode.parentNode);
      }
    }
  }

  function deleteRow() {
    var trashes = document.getElementsByClassName('glyphicon-trash');
    for (let i = 0; i < trashes.length; i++) {
      trashes[i].onclick = function() {
        newStudents.splice(i, 1);
        tbody.removeChild(event.target.parentNode.parentNode);
        console.log(newStudents);
      }
    }
  }

  function validate(student) {
    for (let key in student) {
      if (key == 'email') {
        let re = /\S+@\S+\.\S+/;
        if (!re.test(student[key])) {
          return false;
        };
      }
      if (key == 'Skils') {
        let reg = /[^,]*/;
        if (!reg.test(student[key])) {
          return false;
        };
      }
      if (student[key] == '') {
        return false;
      }
    }
    return true;
  }
})();
