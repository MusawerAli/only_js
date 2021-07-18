records = [{
        "empid": 1,
        "fname": "Doctor ABC",
        "lname": "Y"
    },
    {
        "empid": 2,
        "fname": "A",
        "lname": "Y"
    },
    {
        "empid": 3,
        "fname": "B",
        "lname": "Y"
    },
    {
        "empid": 4,
        "fname": "C",
        "lname": "Y"
    },
    {
        "empid": 5,
        "fname": "C",
        "lname": "Y"
    }
]

// [Done] exited with code=0 in 0.061 seconds
empid = [1, 4, 5];
object = {};
result = {};

records.forEach((a) => {
    object[a.fname] = a;
});

result = empid.map((a) => {

    return object[a];
});


console.log(records)



// Method 2

// var recordsSorted = []

// empid.forEach(function(e) {
//     recordsSorted.push(records.filter(function(o) {
//         return o.empid === e;
//     }));
// });

// console.log(recordsSorted)