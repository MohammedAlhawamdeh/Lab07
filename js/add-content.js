'use strict'
var createGreet = function(){
  var hourNow;
  hourNow = prompt('Are you ready to learn English');
  var name;
  name = prompt('What`s your name?')
  var greeting;

  if (hourNow == "yes" ) {
    greeting = 'Good Job!';
  } else if (hourNow == "No" ) {
    greeting = 'Good No Problem';
  }

  return '<h3>' + greeting + ' ' + name + '</h3>';

}
createGreet();