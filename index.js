const word = process.argv[2]

console.clear()

const encode = word => {
	let prevChar = word.charAt(0)
	let prevCharNum = 1
	let result = ''

	for(let i = 1 ; i <= word.length - 1 ; i++) {
		const currentChar = word.charAt(i)
		if (prevChar === currentChar) {
			prevCharNum = prevCharNum + 1
		} else {
			result = `${result}${prevChar}${prevCharNum}`
			prevCharNum = 1
			prevChar = currentChar

			if (i === word.length - 1) {
				result = `${result}${prevChar}${prevCharNum}`
			}
		}
	}

	return result
}

const encodedChar = encode(word)
console.log(encodedChar)