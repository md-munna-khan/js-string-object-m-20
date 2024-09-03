const sentence = " I am learning web dev ";

let reverse = " "
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse) // ved bew gninrael ma I
// second way
const reversed = sentence.split( '').reverse().join('');
console.log(reversed)