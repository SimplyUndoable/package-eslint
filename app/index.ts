const fizzBuzzTs = (limit: number): void => {
	const result: string[] = []
	for (let i = 1; i <= limit; i++) {
		if ( i % 3 == 0 && i % 5 == 0 ) {
			result.push('FizzBuzz')
		}
		else if ( i % 3 == 0 ) {
			result.push('Fizz')
		}
		else if ( i % 5 == 0 ) {
			result.push('Buzz')
		}
		else {
			result.push(i.toString())
		}
	}
	console.log(`TS: [${result.join(', ')}]`)
}

fizzBuzzTs(10)
