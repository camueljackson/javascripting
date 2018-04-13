 /* Put in actual words of what it is you want to do, step by step.
  Ex:  While not on other side of the road:
    - put one leg infront
    - shift balance
    - put other leg infront
  */


Function walk (distance) {

  var distanceWalked = 0;
  While (distanceWalked < distance) {
    // - Put one leg in front
    console.log('Moving leg nuber 1');
    // - Shift balance
    console.log('Shifting balance');
    // - Put other leg in front
    console.log('Moving leg nuber 2');
    // - Shift balance
    console.log('Shifting balance');
    distanceWalked += 1;
    console.log("we've wakled " + distanceWalked + " meters.");

  }
}

walk(5);

/* ORIGINALLY, the While said: While (distanceWalked <= distance)  (with an
equal sign after the <) but was removed, why? */