var raf = require('raf');

module.exports = function raft(fn) {
	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function () {
		ctx = this;
		args = arguments;
		if (!id) id = raf(call);
	};
};