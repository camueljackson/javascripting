// Try to understand this:



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