var MyStr = "Paragon is the best!"
function myArrayFunction(str){
var countCharacters
var words = str.split(" ");

words = words.reverse();

countCharacters = words.map((s) => s.lenght);

words = words.map((r) => r.split ("").reverse().join(""));

myReverse = words.join(" ");

return { myReverse, countCharacters };
}
console.log(myArrayFunction(MyStr))
//
module.exports = myArrayFunction;