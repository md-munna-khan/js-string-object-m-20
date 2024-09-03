const person = {
    name:'munna',
    age: 22,
    profeshion: "developer",
    salary: 10,
 married: false,
 ' fav places  ' : ["dhaka", "badda", "gulshan"]
}
// change property
person.age = 30;
person['salary'] =20;
person ['fav places']= ['maldives', 'bali']
console.log(person)

const propname = "profeshion";
 person[propname] = "devops"
 console.log(person)