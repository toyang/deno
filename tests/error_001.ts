function foo() {
  throw Error("bad");
}

function bar() {
  foo();
}

bar();
