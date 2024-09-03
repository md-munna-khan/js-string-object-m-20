const college ={
    name:"vnc",
    class:[12,11],
    events:['science fair, bijoy dibosh'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}

// change policy
college.unique.result.merit ="top top top"
console.log(college.unique.result.merit)
delete college.class;
college.events[0]= '16 december'
console.log(college.events[0])
console.log(college)