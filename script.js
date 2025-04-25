// const students = [
//     {
//         id: 1,
//         name: "John Doe",
//         age: 20,
//         score: 70,
//         location: "united kingdom"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         age: 22,
//         score: 75,
//         location: "Canada"
//     },
//     {
//         id: 3,
//         name: "Sam Brown",
//         age: 19,
//         score: 80,
//         location: "Los Angeles"
//     },
//     {
//         id: 4,
//         name: "Emily Davis",
//         age: 21,
//         score: 85,
//         location: "New York"
//     }  
// ]
//ForEach
//Callback 

// students.forEach( function( each ){

//     console.log(each.score + 5);
// })

// students.forEach( (each)=>{
    
//         console.log(each.score + 10);
// })

//const mappedStudents = students.map(function(student){
    // return {name:student.name,
    //     score: student.score
    // }
    //return `Name: ${student.name}, Score: ${student.score}`
//})



// const mappedStudents2 = students.map((student)=>{
//     return student.name
// })

// console.log(mappedStudents);
// console.log(mappedStudents2);


//Filter

// const filteredStudents = students.filter(function(student){
//     return student.score >= 70 && student.location == "New York"
// })
// console.log(filteredStudents);

// const studentsByLocation = students.filter( (student)=>{
//     return student.location == "New York"
// }).map((student)=>{
//     return student.name
// })
// console.log(studentsByLocation);




const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ];

   //Answers

   const antibioticDrugs = drugs.filter((drug)=>{
    return drug.category == "Antibiotic"
   });
    console.log(antibioticDrugs);

    const drugsName = drugs.map((drug)=>{
        return drug.name.toLocaleLowerCase()
    })
    console.log(drugsName);
    
    const analgesic = drugs.filter(function(drug){
        return drug.category == "Analgesic"
    })
    console.log(analgesic);

    const drugsByNameManufacturer = drugs.map((drug)=>{
        return {
            name: drug.name,
            manufacturer: drug.manufacturer
        }
    })
    console.log(drugsByNameManufacturer);

    const drugsByPrescription = drugs.filter(function(drug){
        return drug.isPrescriptionOnly == true
    })
    console.log(drugsByPrescription);

    const drugsByNameAndDosage = drugs.map(function(drug){
        return {
            name: drug.name,
            dosage: drug.dosageMg
        }
    })
    console.log(drugsByNameAndDosage);

    const drugsByStock = drugs.filter((drug)=>{
        return drug.stock < 50
    })

    console.log(drugsByStock);

    const drugsNotPrescibed = drugs.filter((drug)=>{
        return drug.isPrescriptionOnly == false
    })
    console.log(drugsNotPrescibed);

    const manufacturerName = drugs.filter((drug)=>{
        return drug.manufacturer == "Pfizer"
    })
    console.log(manufacturerName);

    const drugsByCategory = drugs.filter((drug)=>{
        return drug.category == "Analgesic"
    }).forEach((drug)=>{
        console.log(drug.category);
        
    })