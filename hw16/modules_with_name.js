export const PI = 3.141592;
  const _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
  };
  export const sqrt = function(s){
    return _sqrt(s, s/2.0, 0.0);
  };
  export const square = function(x){
    return x * x;
  };
  
import {PI} from './module';
import {sqrt} from './module';
import {square} from './module';

var arg1 = process.argv[2];
var arg2 = process.argv[3];
