function test(str){
  return str
  .toLowerCase()
  .split('')
  .map((e) => str.indexOf(e) === str.lastIndexOf(e) ? '(' : ')')
  .join('')
}

console.log(test("aaqwertsyuml"))
