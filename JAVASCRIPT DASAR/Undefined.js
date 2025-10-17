/* 

🤔 Pemahaman Dasar: Bayangkan kamu membuat sebuah kotak ajaib (variabel), tetapi 
kamu lupa mengisinya dengan apapun. Jika seseorang bertanya, "Apa isi kotak itu?", 
jawabannya adalah undefined. Artinya, "kotaknya ada, tapi isinya belum pernah 
ditentukan."

🧠 Pola Pikir Logika: undefined seringkali merupakan sinyal dari JavaScript itu sendiri 
bahwa ada sesuatu yang terlewat. Misalnya, kamu mencoba mengakses isi ransel (Array) di 
kantong nomor 5, padahal ranselmu hanya punya 3 kantong. JavaScript akan memberimu 
undefined, menandakan "kamu mencari sesuatu yang tidak ada di sana."

*/

let kotakAjaib;
let inventaris = ["Pedang Phoenix", "Busur X"];

console.log(kotakAjaib);
console.log(inventaris[2]);
