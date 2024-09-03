const mobile = {
    brand:'samsung',
    price:20000,
    color:"balck",
    camera:'12mp'
}

// for of : array er modhe use hoi
//for in : object er moddhe use hoi
for(
    const prop in mobile
)  {
    // console.log(prop)
    // console.log(mobile[prop])
}
const keys = Object.keys(mobile);
console.log(keys);
for (const key of keys){
    console.log(key ,  ':', mobile[key]);
}