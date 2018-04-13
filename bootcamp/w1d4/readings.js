function findWaldo(arr, found) {
  arr.forEach(findWaldo())
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}


function actionWhenFound(found) {

  console.log("Found Waldo at " + found);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




