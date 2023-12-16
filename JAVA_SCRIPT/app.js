// let a = 'hello'
// console.log(a)

// let namaDepan = "Yosef"
// let namaBelakang = "Fourentino"
// let namaLengkap = namaDepan + " " + namaBelakang;

// console.log(namaLengkap.toUpperCase())
// console.log(typeof(namaLengkap))
// console.log(namaLengkap.indexOf("Fourentino"))
// console.log(namaLengkap[8])
// console.log(namaLengkap.slice(2,10))
// console.log(namaLengkap.replace('Fourentino', 'Wicaksono'))

// let greetings = "Hello World!"
// let nama = "Yosef"
// let umur = "19"
// let status = "lagi cari pacar!!"
// console.log(`${greetings.replace('World', 'There')}! Nama saya ${nama} Umur saya ${umur} .Status saya ${status}`)
// console.log(greetings.replace('World', 'There'))

// > lebih dari
// < kurang dari
// >= lebih dari samadengan
// => kurang dari samadengan
// == samadengan
// != tidak samadengan
// === sama dan sejenis
// !== tidak sama dan sejenis
// alert("this is error message")
// prompt("input your number")

// let age = 20;

// if (age >= 18){
//     console.log("silahkan masuk")
// }

// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5){
//     console.log("angka lebih besar dari 0.5")
// }

// if(angka <= 0.5){
//     console.log("angka lebih kecil dari 0.5")
// }

// let age = 19;

// if( age >= 18 ){
//     console.log("kamu cukup umur boleh masuk")
// } else if( age < 18 ){
//     console.log("kamu belum cukup umur")
// }

// let hari = prompt("hari apa?").toLowerCase();

// if( hari === "sabtu"){
//     console.log("LIBUR NIH YE")
// } else if( hari === "minggu"){
//     console.log("YAH BESOK MASUK")
// } else{
//     console.log("MANGAT YAK!!")
// }

// let password = prompt('buat password');

// if( password.length >= 6 ){
//     if( password.indexOf(' ') === -1 ){
//         console.log('password valid')
//     } else{
//         console.log('password tidak boleh ada spasi')
//     }
// } else{ 
//     console.log('password minimal 6 karakter')
// }

// if( password.length >= 6 && password.indexOf(' ') === -1 ){
//     console.log('password valid')
// } else{
//     console.log('password tidak memenuhi syarat!!')
// }

// const role = prompt("masukan role anda");

// if( role === 'admin' || role === 'supervisor' ){
//     console.log('silahkan mengakses')
// } else{
//     console.log('kamu tidak mendapat akses!!')
// }

// if( role !== 'admin'){
//     console.log('kamu tidak mendapat akses!!')
// } else{
//     console.log('silahkan mengakses')
// }

// let hari = prompt("pilih hari ke berapa (1-7)");

// switch(hari){
//     case '1' :
//         console.log('Senin');
//         break;
//     case '2' :
//         console.log('Selasa');
//         break;
//     case '3' :
//         console.log('Rabu');
//         break;
//     case '4' :
//         console.log('Kamis');
//         break;
//     case '5' :
//         console.log('Jumat');
//         break;
//     case '6' :
//         console.log('Sabtu');
//         break;
//     case '7' :
//         console.log('Minggu');
//         break;
//     default :
//         console.log('invalid days');

//     }

// let playlist = ['celebrity', 'happiness', 'cool with you'];

// playlist.push('maarry you', 'OMG', 'unforgiven');
// playlist.pop();
// playlist.unshift('overdose', 'no surprises');
// playlist.shift();

// console.log(playlist);

// let newjeans = ['OMG', 'Ditto', 'Attension', 'Hype Boy', 'Eta'];
// let itzy = ['Loco', 'Wannabe', 'Icy'];
// let number = [3, 5, 2, 1, 4];

//  let collab = newjeans.concat(itzy);
//       console.log(collab);
//  newjeans.indexOf('Ditto');
//       console.log(newjeans);
//  itzy.includes('Loco');
//       console.log(itzy);
//  number.sort();
//       console.log(number);
//  itzy.splice(1, 0, 'Not Shy');
//       console.log(itzy);
//  console.log(newjeans.slice(2));
//  console.log(newjeans.slice(2, -1));
//  console.log(newjeans.reverse());
//  console.log(newjeans.join(' | '));

// const board = [[null, null, 'O'], ['X','O', null], ['O', null, 'X']];
// console.log(board);
// console.log(board[1][0]);

// let user = {
//     name: 'ocep',
//     age: 19,
//     status: 'single',
//     height: 183,
//     skills: ['HTML', 'CSS', 'Javascript'],
//     address: {
//         jakarta: 'Rawamangun, jl. Sinar Jaya no 15b',
//         Tangerang: 'Allogio, Timur 3 no 60'
//     }
// }

// console.log(user.address.Tangerang);

// const kpop = [
//     {
//         name: "New Jeans",
//         member: 5,
//         myBias: 'Hanni',
//         favSong: 'ETA'
//     },
//     {
//         name: "Baby Monster",
//         member: 6,
//         myBias: 'Pharita',
//         favSong: 'Batter Up'
//     },
//     {
//         name: "Itzy",
//         member: 5,
//         myBias: 'Yeji',
//         favSong: 'Loco'
//     }   
// ]

// console.log(kpop[2].favSong);

// for (let i = 1 ; i <= 10 ; i++){
//     console.log('aku ada di loop' + ' ' + i );
// }

// for (let j = 0 ; j <= 20 ; j += 2){
//     console.log('aku ada di loop' + ' ' + j );
// }

// for (let k = 20 ; k >= 1 ; k-- ){
//     console.log('aku ada di loop' + ' ' + k );
// }

// for (let k = 1 ; k <= 100000 ; k *= 10 ){
    
//     console.log('aku ada di loop' + ' ' + k );
// }

// let newjeans = ['OMG', 'Ditto', 'Attension', 'Hype Boy', 'Eta'];

// for (let i = 0; i <= newjeans.length ; i++){
        
//     console.log(newjeans[i]);
// }

// let jawaban = 'abc';
// for(let i = 0; i <= 5; i++){
//     console.log(`${i}. Soal nomor ${i}:`);
//     for(let j = 0; j <= jawaban.length; j++){
//         console.log(`   ${jawaban[j]}. jawaban pilihan ganda`);
//     }
// }

// #####
// ## ##
// ## ##
// #####

// const tinggi = 4;
// const lebar = 5;

// for (let i = 0; i < tinggi; i++) {
//     for (let j = 0; j < lebar; j++) {
//     if (i === 0 || i === tinggi - 1 || j === 0 || j === lebar - 1 || (j > 1 && j < lebar - 2)) {
//         process.stdout.write("#");
//     } else {
//         process.stdout.write(" ");
//     }
//     }
//     console.log();
// }

// const newjeans = [['OMG', 'Ditto', 'Attension', 'Hype Boy', 'Eta'], ['Loco', 'Wannabe', 'Icy'], ['Batter Up', 'Better Things', 'Typa Girl'], ];

// for(let i = 0; i < newjeans.length; i++){
//     let row = newjeans[i];
//     console.log(` Start Row. ${i + 1}`);
//     for(let j = 0; j < row.length; j++){
//         console.log(`  ${row[j]}`);
//     }
// } 

// const password = 'Pass123';

// let guess = prompt('enter the password: ');
// while(guess !== password){
//     guess = prompt('enter the password: ');
// } 
// alert('CORRECT PASSWORD');

// let input = prompt('say something!!');

// while(true){
//     input = prompt(input);
//     if(input.toLowerCase === 'stop')
//     break;
// }
// alert('ok');

// const angka = '7';
// let input = prompt('tebak angka dari 1-10');

// while(true){
//     input = prompt('coba lagi!!');
//     if(input === angka) 
//     break;
// }
// alert('selamat anda benar!!');

let maximum = parseInt(prompt("Masukan Nilai maksimal: "));

while(!maximum){
    maximum = parseInt(prompt("Masukan Nilai maksimal: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Masukan tebakan pertama anda!!"));

while(parseInt(guess) !== targetNum){
    if(guess > targetNum){
        guess = parseInt(prompt("Angka terlalu tinggi!!"));
    } else{
        guess = parseInt(prompt("Angka terlalu rendah!!"));
    }
}

alert('selamat tebakan anda benar!!');
