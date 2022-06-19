function test(str){
    return new Set(str.toLowerCase()).size == str.length
}

console.log(test("Dermatoglyphics"))
console.log(test("moOse"))