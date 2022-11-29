var input = require("readline-sync");
var bilangan = input.question("Masukkan Angka = ");
if(isNaN(bilangan)){
    console.log("Maaf yang anda masukkan bukan angka!");
}else{
var sisabagi = (bilangan %2);
if(sisabagi == 0){
    console.log(bilangan, "adalah Bilangan Genap");
}else{
    console.log(bilangan, "adalah Bilangan Ganjil")
}
}