function test() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
test(); // 6 6 6 6 6

function test() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
test(); // 1 2 3 4 5

function test() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, 1000);
    }
    close(i);
  }
}

test(); // 1 2 3 4 5
