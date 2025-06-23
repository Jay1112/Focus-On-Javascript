function pipe(funcs) {
	return function(args){
		let result = args;
		funcs.forEach((fn) => {
			result = fn(result, args);
		});
		return result;
	}
}

const times = (y) =>  (x) => x * y

const res = pipe([
  times(2),
  times(3)
]) ;
console.log(res(5))