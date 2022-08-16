function reverseLetter(str) {
return str
.toLowerCase()
.split('')
.reverse()
.filter(l => Array.from('abcdefghijklmnopqrstuvwxyz').includes(l))
.join('')
}

console.log(reverseLetter("ultr53o?n")) //nortlu