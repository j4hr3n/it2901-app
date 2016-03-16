angular
  .module('it2901')
  .filter('percent', percent);

function percent () {
  return function(integer, digits) {
    if(integer === undefined || integer === null || isNaN(integer)) return '?';
    var num = integer;
    return num.toFixed(digits) + '%';
  };
}
