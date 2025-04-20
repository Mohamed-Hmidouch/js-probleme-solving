let students = [
  { name: "Alice", grades: [12, 14, 10, 16] },
  { name: "Bob", grades: [8, 9, 7] },
  { name: "Charlie", grades: [13, 13, 12] },
  { name: "Diana", grades: [6, 8, 9, 7] },
];

function StudentPased(){
     students.forEach(student => {
    student.avg = 0;
    let count = 0;
        for (let i = 0; i < student.grades.length; i++) {
          count++;
          student.avg += student.grades[i];
        }
        student.avg = student.avg / count;

        if(student.avg >= 10){
          student.passed = true;
        }else{
          student.passed = false;
        }
   });
   return students;
}

StudentPased();
console.log(students);

// [
//   { name: "Alice", average: 13, passed: true },
//   { name: "Bob", average: 8, passed: false },
//   { name: "Charlie", average: 12.67, passed: true },
//   { name: "Diana", average: 7.5, passed: false }
// ]
// console.log(students[0].grades)

// const eleves = [
//   { nom: "Alice", note: 92 },
//   { nom: "Bob", note: 78 },
//   { nom: "Chloé", note: 64 },
//   { nom: "David", note: 85 },
// ];

// eleves.forEach((eleve) => {
//   if (eleve.note >= 85) {
//       eleve.mention = "tres bien";
    
//   }
//   else if(eleve.note >= 70 && eleve.note <= 85) {
//       eleve.mention = "bien";
    
//   } else {
//       eleve.mention = "passable";
    
//   }
// });

// → Résultat attendu après forEach :
// [
//   { nom: "Alice", note: 92, mention: "Très bien" },
//   { nom: "Bob",   note: 78, mention: "Bien" },
//   { nom: "Chloé", note: 64, mention: "Passable" },
//   { nom: "David", note: 85, mention: "Très bien" },
// ]
// console.log(eleves);

// const produits = [
//   { nom: "Casque audio", prixHT: 80 },
//   { nom: "Clavier mécanique", prixHT: 120 },
//   { nom: "Souris sans fil", prixHT: 40 },
// ];

// → Résultat attendu :
// [
//   { nom: "Casque audio",      prixHT: 80,  prixTTC: 96,   prixPromo: 96    },
//   { nom: "Clavier mécanique", prixHT: 120, prixTTC: 144,  prixPromo: 129.6  },
//   { nom: "Souris sans fil",   prixHT: 40,  prixTTC: 48,   prixPromo: 48    },
// ]

// produits.forEach(produit => {
//   produit.prixTTC = produit.prixHT * 1.2;
//   if(produit.prixTTC>100){
//     produit.prixPromo = produit.prixTTC * 0.9;
//   }else{
//     produit.prixPromo = produit.prixTTC;
//   }
// });

// console.log(produits);