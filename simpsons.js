// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names){
    if (0 === names.length) return '';
    let nameArray = names.map( ({name}) => name);
    if (1 === nameArray.length) return nameArray.toString() 
    let lastCharacter = ` & ${nameArray.pop()}`;
    return nameArray.length > 1 ? nameArray.join(', ') + lastCharacter : nameArray.toString() + lastCharacter;
  }