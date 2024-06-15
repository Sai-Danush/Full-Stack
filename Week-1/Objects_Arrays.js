const personArray = ["Danush", "Ramesh", "Jayasri", "Vaibavi"];
const genderArray = ["Male", "Male","Female", "Female"];

const user1 = [{                                               // Objects are  a similar way to dictionarys or structs in Python and C respectively
    firstName: "Danush",
    gender: "Male",
    metadata : {
        age : 21,
        address: "Dublin"
    } 
}, {
    firstName : "Sanchit",
    gender: "Male",
    metadata : {
        age : 21,
        address: "New York"
    }
}, {
    firstName : "Priyanka",
    gender:"Female",
    metadata : {
        age : 31,
        address: "San Francisco"
    }
}]

for(let i=0;i<personArray.length;i++){
    if(genderArray[i] == "Male"){
        console.log(personArray[i]);
    }
}

for(let i=0;i<user1.length;i++){                              //Objects can be infinitely nested
    if(user1[i]["gender"] == "Female"){
        console.log(user1[i]["metadata"])
    }
}

