// alert('test');
// var Baju1 = 'merahmerah123'

// document.write(Baju1) + '<br>'

// document.write(typeof(Baju1))

// var Nama_pengunjung = prompt('Silahkan masukan nama kamu',"dojobers");

// document.write('hai ') + Nama_pengunjung + 'selamat datang di dojobox.id');

// var konfirmasi = confirm("mau tetap disini ?")
// var hasil = (konifmrasi==true)? "iya dong" : "Gakdeh"


// var angka = parseInt(prompt("masukan angka anda : "));
// if(angka>10){
//     document.write("bilangan yang dimasukan lebih dari 10");
// }


// var nama = prompt('mentor')
// if (nama =='mentor'){
//     document.write('andika')
// }else{
//     document.write('bukan andika')
// }else if (nama =='murid'){
//     document.write('murid')
// }


// var nilaikepuasan = prompt('masukan nilai');
// switch(nilaikepuasan){
//     case '0':
//         document.write('saya sangat kecewa')
//         break
//     case '1':
//         document.write('saya kecewa')
//         break
//     case '2':
//         document.write('saya tidak puas')
//         break
//     case '3':
//         document.write('saya puas')
//         break
//     case '4':
//         document.write('saya lebih puas')
//         break
//     case '5':
//         document.write('Saya Sangat puas')
//     default:
//         document.write('Harap masukan angka yang sesuai')
//     }


    var nilaikepuasan = parseInt(prompt('masukan nilai'));
    
    switch(true){
        case (nilaikepuasan>=90):
            document.write('nilai A')
            break
        case (nilaikepuasan>=80):
            document.write('nilai B')
            break
        case (nilaikepuasan>=70):
            document.write('nilai C')
            break
        case (nilaikepuasan>=60):
            document.write('nilai D')
            break
        case (nilaikepuasan>=50):
            document.write('nilai E')
            break
        default:
            document.write('Harap masukan angka yang sesuai')
        }