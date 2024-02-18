// Task E

function teskariOqish(a) {
    return a.split('').reverse().join('');
}

console.log(teskariOqish("jushkin"));
console.log(teskariOqish("hello"));













// Task D

// Define
// function checkContent(birinchi, ikkinchi) {
   
//     const bir = birinchi.split('').sort();
//     const ikki = ikkinchi.split('').sort();
    
   
//     return bir.join('') === ikki.join('');
// }

// // Call
// console.log(checkContent("jushkin", "knuisjh")); 
// console.log(checkContent("olim", "aziz"));







// // Task C

// class MevaDokon {
//     constructor(banan, olma, gilos) {
//         this.banan = banan;
//         this.olma = olma;
//         this.gilos = gilos;
//     }

//     joriyaQoldi() {
//         const joriya = `${this.banan} banan, ${this.olma} olma, va ${this.gilos} gilos`;
//         console.log(`Hozir vaqtda ${joriya} mavjud!`);
//     }

//     sotish(mahsulot, miqdori) {
//         if (mahsulot === 'banan') {
//             if (this.banan >= miqdori) {
//                 this.banan -= miqdori;
//                 console.log(`${miqdori} ta banan sotildi!`);
//             } else {
//                 console.log(`Sotib olish uchun yetarli banan yo'q: ${miqdori}!`);
//             }
//         } else if (mahsulot === 'olma') {
//             if (this.olma >= miqdori) {
//                 this.olma -= miqdori;
//                 console.log(`${miqdori} ta olma sotildi!`);
//             } else {
//                 console.log(`Sotib olish uchun yetarli olma yo'q: ${miqdori}!`);
//             }
//         } else if (mahsulot === 'gilos') {
//             if (this.gilos >= miqdori) {
//                 this.gilos -= miqdori;
//                 console.log(`${miqdori} ta gilos sotildi!`);
//             } else {
//                 console.log(`Sotib olish uchun yetarli gilos yo'q: ${miqdori}!`);
//             }
//         } else {
//             console.log('Noto\'g\'ri mahsulot!');
//         }
//     }

//     qabulQilish(mahsulot, miqdori) {
//         if (mahsulot === 'banan') {
//             this.banan += miqdori;
//             console.log(`${miqdori} ta banan qabul qilindi!`);
//         } else if (mahsulot === 'olma') {
//             this.olma += miqdori;
//             console.log(`${miqdori} ta olma qabul qilindi!`);
//         } else if (mahsulot === 'gilos') {
//             this.gilos += miqdori;
//             console.log(`${miqdori} ta gilos qabul qilindi!`);
//         } else {
//             console.log('Noto\'g\'ri mahsulot!');
//         }
//     }
// }

// const mevaDokon = new MevaDokon(4, 5, 2);
// mevaDokon.joriyaQoldi();
// mevaDokon.sotish('banan', 3);
// mevaDokon.qabulQilish('olma', 4);
// mevaDokon.joriyaQoldi();



// // Task B

// function raqamHisobla(son) {
//     let count = 0;
//     let i = 0;

//     while (i < son.length) {
//         if (!isNaN(son[i])) {
//             count++;
//         }
//         i++;
//     }
    
//     return count;
// }

// console.log(raqamHisobla("7htl8f42xt5l0m"));






// // Task A

// function harfHisobla(a, b) {
//     const harf = b.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < harf.length; i++) {
//         if (harf[i] === a) {
//             count++;
//         }
//     }
//     return count;
// }

// const result = harfHisobla("a", "alibaba");
// console.log(result); 

/*callback function*/

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "o'zingiz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga sarmoya qiling", //50-60
//     "endi foydasi yo'q dam oling" //60 ~
// ]


// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(45, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log("Javob:", data);
//     }
// });
// console.log("passed here 1");


    /*async .then, .catch methods*/

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "o'zingiz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga sarmoya qiling", //50-60
//     "endi foydasi yo'q dam oling" //60 ~
// ]


// async function maslahatBering(a, callback) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return(list[0]);
//     else if (a > 20 && a <= 30) return(list[1]);
//     else if (a > 30 && a <= 40) return(list[2]);
//     else if (a > 40 && a <= 50) return(list[3]);
//     else if (a > 50 && a <= 60) return(list[4]);
//     else {
//             return(list[5]);
//     }
// }

// console.log("passed here 0");
// maslahatBering(41)
//     .then((data) => {
//         console.log("Javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     });
//     console.log("passed here 1");


/*async await  */


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "o'zingiz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga sarmoya qiling", //50-60
//     "endi foydasi yo'q dam oling" //60 ~
// ]


// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return(list[0]);
//     else if (a > 20 && a <= 30) return(list[1]);
//     else if (a > 30 && a <= 40) return(list[2]);
//     else if (a > 40 && a <= 50) return(list[3]);
//     else if (a > 50 && a <= 60) return(list[4]);
//     else {
//             return(list[5]);
//     }
// }

// console.log("passed here 0");
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
// console.log("passed here 1");

/* Promise*/

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "o'zingiz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga sarmoya qiling", //50-60
//     "endi foydasi yo'q dam oling" //60 ~
// ]


// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return(list[0]);
//     else if (a > 20 && a <= 30) return(list[1]);
//     else if (a > 30 && a <= 40) return(list[2]);
//     else if (a > 40 && a <= 50) return(list[3]);
//     else if (a > 50 && a <= 60) return(list[4]);
//     else {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(list[5]);
//                 }, 5000);
//             });
// }
// }

// console.log("passed here 0");
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// console.log("passed here 1");
// run();
