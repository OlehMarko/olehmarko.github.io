function forEach(el, fn) {
  for (var i = 0; i < el.length; i++) {
    fn(el[i]);
  }
};



forEach([3, 5, 2], function(el){ console.log(el) } );
