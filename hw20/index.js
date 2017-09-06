$(document).ready(function() {
  var moves = 0;
  var zIndex = 1;
  var empty = 16;
  $.fn.extend({
    fifteenGame: function(win) {
      var ceilSize = 125;
      var container = '#' + $(this).attr('id');
      var sqSize = ceilSize + 'px';
      var boardSize = (ceilSize * 4) + 'px';

      $(container).html('<div id="board"></div>');
      $('#board').css({
        position: 'absolute',
        width: boardSize,
        height: boardSize
      });

      function shuffle(array) {
        var i = array.length,
          j = 0,
          temp;
        while (i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      if (!win) {
        var nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      }
      nums[15] = '';
      for (var i = 0; i < 16; i++) {
        $('#board').append("<div style='left: " + ((i % 4) * ceilSize) + "px; top: " + Math.floor(i / 4) * ceilSize + "px; width: " + ceilSize + "px; height: " + ceilSize + "px'>" + nums[i] + "</div>");
      }
      $('#board').children("div:nth-child(" + empty + ")").css({
        background: "#ffffff",
        opacity: 1
      });
      $('#board').children('div').click(function() {
        Move(this, ceilSize);
      });
    }
  });
  var p1 = document.getElementById('timer'),
    p2 = document.getElementById('step-counter'),
    seconds = 0,
    minutes = 0,
    t;

  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
      }
    }
    p1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
  }

  function timer() {
    t = setTimeout(add, 1000);
  }

  function Move(clickedSquare, ceilSize) {
    var canMove = false;
    var oldx = $('#board').children("div:nth-child(" + empty + ")").css('left');
    var oldy = $('#board').children("div:nth-child(" + empty + ")").css('top');
    var newx = $(clickedSquare).css('left');
    var newy = $(clickedSquare).css('top');
    if (oldx == newx && newy == (parseInt(oldy) - ceilSize) + 'px') {
      canMove = true;
    }
    if (oldx == newx && newy == (parseInt(oldy) + ceilSize) + 'px') {
      canMove = true;
    }
    if ((parseInt(oldx) - ceilSize) + 'px' == newx && newy == oldy) {
      canMove = true;
    }
    if ((parseInt(oldx) + ceilSize) + 'px' == newx && newy == oldy) {
      canMove = true;
    }
    if (canMove) {
      $(clickedSquare).css('z-index', zIndex++);
      $(clickedSquare).animate({
        left: oldx,
        top: oldy
      }, 300, function() {
        $('#board').children("div:nth-child(" + empty + ")").css('left', newx);
        $('#board').children("div:nth-child(" + empty + ")").css('top', newy);
      });
      moves++;
      p2.textContent = moves;
    }
  }
  $('#game_object').fifteenGame(win);
  $('#game').click(function() {
    $('#game_object').fifteenGame();
    moves = 0;
    p2.textContent = moves;
    timer();
  });
  $('#win').click(function() {
    $('#game_object').fifteenGame(win);
    moves = 0;
    p2.textContent = moves;
    clearTimeout(t);
    p1.textContent = "00:00";
    seconds = 0;
    minutes = 0;
  });
});
