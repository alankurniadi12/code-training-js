// Menghitung jumlah harga barang kecuali quantitynya nol

// Create an object Array
const items = [
    {name: 'Monitor', price: 500000, quantity: 1},
    {name: 'Laptop', price: 1000000, quantity: 2},
    {name: 'Playstation', price: 2000000, quantity:0}
];
// Arraw Function for count price all the items
const sum = items.reduce( function (total, value) {
    // nilai awal total 0, 
    // Kalikan price dengan quantity hasilnya akan disimpan pada total, 
    // yg awal total nol sekarang sudah berubah nilai baru
    // iterasinya akan mengulangi lagi smpai sebanyak item object nya (3)
    return total + (value.price * value.quantity)
}, 0);
console.log("Jumlah harga barang Rp.",sum)

//Count item bigger than 70000
const sumUpSeven = items.reduce((total, value) => {
    return total + (value.price > 700000 ? value.price * value.quantity : 0)
}, 0)
console.log("Jumlah harga barang diatas 700000 Rp.",sumUpSeven)