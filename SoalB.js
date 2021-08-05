var barang = [];
barang = ['hp', 'komputer', 'mouse', 'layar','printer']
var barang = prompt('masukan nama barang (hp/komputer/mouse/layar/printer');
switch(barang){
    case 'hp':
        document.write('nama barang : monitor' + '<br>' + 'harga : 1.000.000' + '<br>' + 'jumlah : 10' + '<br>' + 'Discount : 10% : 1000.000' + '<br>' + 'Total : RP 10.000.000' + '<br>'  )
        break
    case 'komputer':
        document.write('nama barang : komputer' + '<br>' + 'harga : 2.000.000' + '<br>' + 'jumlah : 20' + '<br>' + 'Discount : 20% : 2000.000' + '<br>' + 'Total : RP 20.000.000' + '<br>'  )
        break
    case 'mouse':
        document.write('nama barang : mouse' + '<br>' + 'harga : 3.000.000' + '<br>' + 'jumlah : 30' + '<br>' + 'Discount : 30% : 3000.000' + '<br>' + 'Total : RP 30.000.000' + '<br>'  )
        break
    case 'layar':
        document.write('nama barang : layar' + '<br>' + 'harga : 4.000.000' + '<br>' + 'jumlah : 40' + '<br>' + 'Discount : 40% : 4000.000' + '<br>' + 'Total : RP 40.000.000' + '<br>'  )
        break
    case 'printer':
        document.write('nama barang : printer' + '<br>' + 'harga : 5.000.000' + '<br>' + 'jumlah : 50' + '<br>' + 'Discount : 50 : 5000.000' + '<br>' + 'Total : RP 50.000.000' + '<br>'  )
        break
    default:
        document.write('MAAF BARANG YANG ANDA CARI TIDAK TERSEDIA')
    }



