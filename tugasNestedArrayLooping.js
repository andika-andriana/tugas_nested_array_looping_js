function panggilNestedArray(value) {
  var arr = [];
  var fb = [];
  var ts = [];
  var ms = [];
  var ap = [];

  for (i = 0; i < value.length; i++) {
    for (j = 0; j < value[i].length; j++) {
      arr.push(value[i][j]);
    }
  }

  fb.push(arr[0], arr[4], arr[8]);
  ts.push(arr[1], arr[5], arr[9]);
  ms.push(arr[2], arr[6], arr[10]);
  ap.push(arr[3], arr[7], arr[11]);

  console.log([fb, ts, ms, ap]);
}

var nestedArray = [
  [1, 2, 3, 4],
  ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];
panggilNestedArray(nestedArray);