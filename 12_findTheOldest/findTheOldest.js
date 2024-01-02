const findTheOldest = function(people) {
    let sorted = people.sort((a,b)=>{
        let current = new Date().getFullYear();
        let first = (a.yearOfDeath || current) - a.yearOfBirth;
        let second = (b.yearOfDeath ||current) - b.yearOfBirth;
        return first > second ? -1 : 1;
    });
    return sorted[0];
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
