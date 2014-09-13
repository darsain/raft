# raft

*Or "**R**equest **A**nimation **F**rame **T**hrottle".*

Throttle a function to be executed at most once per animation frame.

## Install

With [component(1)](https://github.com/component/component):

```bash
$ component install darsain/raft
```

## Usage

```js
var something = document.querySelector('.something');

window.addEventListener('mousemove', raft(updateSomething));

function updateSomething(event) {
	something.style.left = event.pageX;
	something.style.top = event.pageY;
}
```

## API

### raft(fn)

Wraps a function in a wrapper that will call it at most once per animation frame.

Function, when called, will receive last context (`this`) and arguments passed to the wrapper before animation frame kicked in.

- **fn** `Function` Function to wrap.

*Returns* `Function` Wrapped `fn`.

Example:

```js
var a = { a: 'a' };
var b = { b: 'b' };
var c = { c: 'c' };
var log = raft(function (arg) {
	console.log(this, arg);
});

log.call(a, 'foo');
log.call(b, 'bar');
log.call(c, 'baz');
```

When next animation frame kicks in the console will log:

```bash
> Object { c: "c" } "baz"
```

## License

MIT