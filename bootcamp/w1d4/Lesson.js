// example of array turned into an object (but still an array so we fetch the info we . notation and square brackets)

var tweeps = [
// opening object:

{who: '@ Mozilla', whatL 'all your data is ours'},
// opening other object:
{who: '@wired', what: "the AI will scan you" }


{
  who: '@Fabioi',
  what: 'I love cats'

  }

];

// push will add something new to the array.

// we can add whatever we want, but we want to add another objet to keep in line with other examples so far

tweeps.push{who: '@rando', what: 'CC0'};


//now to test what we did:
console.log(tweeps);


// if we want to retrieve -  we are using square brackets because the "tweeps" is still an array, then [2] to get the "3rd" item
// in the array, then ".what" because we want what fabio said.
console.log(tweeps.who[2].what)


// old wy of entering info, but not as efficient:  'mozilla: all your data is ours', - the way it is setup before made it
// difficult to get the info from the key : value pair


// we can keep pushing new items into the array, OR WE CAN CHANGE THE EXISTING ITEMS
tweeps.[2].fav = true // output is: fav = true;
tweeps[1].likes = 99; // output is: likes = 99

// if we are given a tweet and want to like it, write a function for it:
// need a for loop to loop through the tweeps until we find the tweep we want to like
function liketweep(tweep) {
  for (var i = 0; i < tweeps.length; i++) {
    console.log(tweeps[i]); // output is all tweeps are logged
    if (tweeps[i].who == tweep) { //tweep being the parameter that is passed when calling the liketweep function, so "when you find that tweep.who as called in the function"
      tweeps[i].like = true // this adds the fact that you are liking the tweep when the if falls on it
    } else {

    }
  }
}

liketweep("@fabio")

// NEED A DOUBLE EQUAL TO COMPARE VALUE!!!!!
// why is tweeps[i].like = true???   BECAUSE WE ARE ASSIGNING A VALUE OF TRUE TO LIKE.


function flagtweep(tweep) {
  for (var i = 0; i < tweeps.length; i++) {
    console.log(tweeps[i]); // output is all tweeps are logged
    if (tweeps[i].who == tweep) { //tweep being the parameter that is passed when calling the liketweep function, so "when you find that tweep.who as called in the function"
      if (tweeps[i].flag = true){

      } // this adds the fact that you are liking the tweep when the if falls on it
    } else {

    }
  }
}
flagtweep("@fabio")



Using functions to make things happen in a given scenario:
---------------------------------------------------------

function likeTweeps(tweep) {
  for (var i = 0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      // tweeps[i].like = true;
      if (tweeps[i].like) {
        tweeps[i].like += 1
      } else {
        tweeps[i].like = 1
      }
    }
    console.log(tweeps[i])
  }
}

likeTweep('@fzero');


function flagTweeps(tweep) {
  for (var i = 0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      if (tweeps[i].flag) {
        tweeps[i].flag += 1
      } else {
        tweeps[i].flag = 1
      }
    }
    console.log(tweeps[i])
  }
}

flagTweep('@fzero');

// if you have 2 functions that do te same thing, how can you improve and refactor those 2 functions.
// SOLUTION:  take your parameters and put them into one function:
function changeTweep(tweep, action) {
  for (var i = 0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      if (tweeps[i][action]) { // action contains key, so dot notation would not work - use bracket notation
        tweeps[i][action] += 1 // [action] is in square bracket because it is a variable
      } else {
        tweeps[i][action] = 1
      }
    }
  }
}

changeTweep('@fzero', 'like');
changeTweep('@fzero', 'like');
changeTweep('@fzero', 'like');
changeTweep('@fzero', 'like');
changeTweep('@fzero', 'flag');


// if we want to uppercase everything, we will just create a new function to bonify the other one.

function ALLCAPSTweep(tweep) {
  for (var i = 0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      tweeps[i].what = tweeps[i].what.toUpperCase();
    }
  }
}

console.log(Tweep)

// combining functions again

function toAllCaps(oneTweep) {
  oneTweep.what. = oneTweep.what.toUpperCase();
}

function likeIt(oneTweep) {
  for (var i = 0; i < tweeps.length; i++) {
    if (oneTweep.like) {
      oneTweep.like += 1;
    } else {
      oneTweep.like +1
    }
  }


  function flagIt(oneTweep) {
  for (var i = 0; i < tweeps.length; i++) {
    if (oneTweep.flag) {
      oneTweep.flag += 1;
    } else {
      oneTweep.flag +1
    }
  }


function findAnd(tweep, doSomething) {
    for (var i = 0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      doSomething(tweeps[i])
    }
  }
}


findAnd("@fabio", likeIt) // why is likeIt not a string?  It's a function!! so when Fabio is found, the function "likeIt" is being run
console.log(tweep);

// a bunch of very concrete functions combined

// we dont need extra parathases findAnd('@fzero', likeIt ** () **  );?  because it would eb passing in arguments, which isnt what we are doing

//


