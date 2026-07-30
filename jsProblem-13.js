let human = {
    name: "Junayed Hasan",
    nationality: "Bangladeshi",
    color: "Whity-Black",
    age: 24,
    hasNID: true,
    phoneNum: "017****555",
    address: "Dhankhet",
    bloodGroup: "A+ve",
    eduInfo:{
        dept: "CSE",
        id: 46,
        intake: 48,
        section: 2,
        institution: "BUBT"
    }
};

for (let key in human) {
    if (typeof human[key] === "object") {
        console.log(key + ":");
        for (let subKey in human[key]) {
            console.log("   ", subKey, ":", human[key][subKey]);
        }
    }
    else {
        console.log(key, ":", human[key]);
    }

}
