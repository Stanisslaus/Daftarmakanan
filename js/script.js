const mm = ["Es Kopi Susu", "Roti Bakar", "Tahu Telor", "Nasi Goreng"];
const mprice = [10000, 25000, 15000, 12000];

document.getElementById("m1").innerHTML = mm[0] + ": Rp " + mprice[0];
document.getElementById("m2").innerHTML = mm[1] + ": Rp " + mprice[1];
document.getElementById("m3").innerHTML = mm[2] + ": Rp " + mprice[2];
document.getElementById("m4").innerHTML = mm[3] + ": Rp " + mprice[3];
mm[0] = 10000;
mm[1] = 25000;
mm[2] = 15000;
mm[3] = 12000;

let fpayment = mm[0] + mm[1] + mm[2] + mm[3];
let disc = 0.1 * fpayment;
let payment = fpayment - disc;

document.getElementById("medo1").innerHTML = "Rp " + fpayment;
document.getElementById("medo2").innerHTML = "Rp " + disc;
document.getElementById("medo3").innerHTML = "Rp " + payment;

// Variabel
const menu_makan_malam = [10000, 25000, 15000];
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let totalmenu = makanan1 + makanan2 + makanan3;
let diskonmenu = 0.1 * totalmenu;
let totalbayar = totalmenu - diskonmenu;
document.getElementById("demo1").innerHTML = "Total Bayar = Rp " + totalmenu;
document.getElementById("demo2").innerHTML = "Total Diskon 10% = Rp " + diskonmenu;
document.getElementById("demo3").innerHTML = "Total Pembayaran = Rp " + totalbayar;

// Objects
const bukber = {
  mb1: { nm: "Es Kopi Susu ", hm: 10000 },
  mb2: { nm: "Roti Bakar ", hm: 25000 },
  mb3: { nm: "Tahu Telor ", hm: 15000 },
  mb4: { nm: "Nasi Goreng ", hm: 12000 },
};

document.getElementById("mb1").innerHTML = bukber.mb1.nm + ": Rp " + bukber.mb1.hm;
document.getElementById("mb2").innerHTML = bukber.mb2.nm + ": Rp " + bukber.mb2.hm;
document.getElementById("mb3").innerHTML = bukber.mb3.nm + ": Rp " + bukber.mb3.hm;
document.getElementById("mb4").innerHTML = bukber.mb4.nm + ": Rp " + bukber.mb4.hm;

let total = 0;
for (let menu in bukber) {
  total += bukber[menu].hm;
}

let diskon = 0.1 * total;
let pembayaran = total - diskon;

document.getElementById("do1").innerHTML = `Total: Rp. ${total}`;
document.getElementById("do2").innerHTML = `Diskon: Rp. ${diskon}`;
document.getElementById("do3").innerHTML = `Pembayaran: Rp. ${pembayaran}`;
