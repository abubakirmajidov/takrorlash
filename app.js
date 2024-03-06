// Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)//

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ].map((item) => {
//   if (item.percent >= 85) {
//     return { ...item, grade: 5 };
//   } else if (item.percent <= 84 && item.percent >= 70) {
//     return { ...item, grade: 4 };
//   } else if (item.percent < 70 && item.percent >= 60) {
//     return { ...item, grade: 3 };
//   } else {
//     return { ...item, grade: 2 };
//   }
// });

// console.log(students);

// function getNamesByGrade(students, grade) {
//   const filterByGrade = students.filter((item) => {
//     if (grade == 5) {
//       return item;
//     }
//   });
// }

// const rezalt = getNamesByGrade(students, 4);

// console.log(rezalt);

///////////////////////////////////////////////////////////////

// const text = "George Raymond Richard Martin"
//   .split(" ")
//   .map((world) => {
//     return world.charAt();
//   })
//   .join("");
// console.log(text);

/////////////////////////////////////////////////////////////////

// const royhat = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ].sort((a, b) => a - b);

// console.log(royhat.at(-1).age - royhat.at().age);
// console.log(royhat);

////////////////////////////////////////////////////////////////

// const nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNambers = nambers.filter((num) => {
//   return num % 2 == 0;
// });

// const evenNambers = nambers.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(oddNambers, evenNambers);

////////////////////////////////////////////////////////////////////

let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

// const productsByRating = products.sort((a, b) => {
//   return a.rating - b.rating;
// });

// console.log(productsByRating);

//////////////////////////////////////////////////////////

// products.map((prod) => prod.name);

// products.find((prod) => prod.id == 5).name;
// console.log(products);
