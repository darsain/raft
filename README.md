# raft

*Or "Request Animation Frame Throttle".*

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

Returns a wrapper that will call `fn` at most once per animation frame.

Function will be executed once in next animation frame, and will receive last context (`this`) and arguments passed to the wrapper.

- **fn** `Function` Function to wrap.

*Returns* `Function`

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