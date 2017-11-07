var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames); //Then we have all names in new table

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {
    allNames = allNames.push(newName); // At this momen tabel "allNames" has new long equal 9
    console.log(allNames);    
}
