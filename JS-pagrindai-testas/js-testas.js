/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let euruSk = (Math.random() * 1001).toFixed(2)
console.log(euruSk, '€');//patikrinimui
let dolerioKursas = 1.07; //googlo pirmas rez

function doleriuKonvertavimas(eurai,kursas){
    return (eurai*kursas).toFixed(2)
}
console.log('sukonevrtavus gauta',doleriuKonvertavimas(euruSk,dolerioKursas), '$');

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let doleriuSk = (Math.random() * 1001).toFixed(2)
let euroKursas = 0.93 //googlo pirmas rez
console.log(doleriuSk, '$');//patikrinimui

function euruKonvertavimas(doleriai,kursas){
    return (doleriai*kursas).toFixed(2)
}
console.log('sukonevrtavus gauta',euruKonvertavimas(doleriuSk,euroKursas),'€');



/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5*/

let svoris = 80;
let ugis = 1.8
let BMI = (svoris/ugis**2).toFixed(2)
if(BMI >25){
    console.log(`su ${BMI} pas žmogų Viršsvoris`);
}else if (18.5 <= BMI && BMI < 25){
    console.log(`su ${BMI} pas žmogų normalus BMI`);
}else if (BMI < 18.5) {
    console.log(`su ${BMI} pas žmogų per mažas svoris`);
}


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let amzius = 20; //testavimui 


let metaiValandomis = amzius * (365 * 24) //manant kad yra 365 dienos ir 24 valandos dienoje
let metaiMinutemis =  amzius * (365 * 24 * 60) //valandoje 60 min
let metaiSekundemis =  amzius * (365 * 24 * 60 * 60) //minuteje 60 sekundziu 

console.log(`${amzius} m. yra Sekundemis: ${metaiSekundemis}, minutemis: ${metaiMinutemis},valandomis: ${metaiValandomis}`);




/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
let tempCelcius = 20 //Celsijaus temperatura
let tempFarenh = 70 //Faren temperatura
let tempType1 = 'C' //Celsijaus iskvietimui
let tempType2 = 'F' //Farenheito iskvietimui
let symbol;

function convertTemp(temp,tempType){
    let result
 
    if(tempType == 'C'){
    result = (temp - 32)/1.8
    symbol = '°C'
    }
    else if (tempType == 'F'){
    result = ((temp * 1.8) + 32)
    symbol = '°F'
    }
    return result.toFixed(2)
}

console.log('Gauta temparatura', convertTemp(tempFarenh,tempType1), symbol); //Konvertavimo i Celsiju pvz
console.log('Gauta temparatura', convertTemp(tempCelcius,tempType2), symbol); //Konvertavimo i Farenheita pvz

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let eile = ''

for(let i = 1 ; i <= 10; i++) {
    if (i == 1){
        eile +=`${i}`
    }else{
    eile += `-${i}`
    }
}
console.log(eile);


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let trikampioDyd = 4
let trikampis = '';
let simbolisTrik = '*'

  for (let i=0; i<=trikampioDyd; i++){
   trikampis += '*'
   console.log(trikampis);
}





/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
let dabar = new Date()

let christmas =  new Date('12/25/2024')

let laikas = christmas.getTime() - dabar.getTime();

let skirtumasDienu = Math.round(laikas/(1000*3600*24))

console.log(`Viso liko: ${skirtumasDienu} dienos iki kaledu`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let masyvas = ['Tomas','Dainius','Paulius','Jonas']
let apjungtas1 = masyvas.join('+')
let apjungtas2 = masyvas.join(',') //nesupratau ar tik su pliusu tai pridejau abu
console.log(apjungtas1);
console.log(apjungtas2);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

let sBigL = ['A','B','C','D']
let sSmL = ['a','b','c','d']
let sNum = [1,2,3,4]
let sSymb = ['$','#','@','*']

let indexGen1 = Math.round(Math.random()*3)
let indexGen2 = Math.round(Math.random()*3)
let indexGen3 = Math.round(Math.random()*3)
let indexGen4 = Math.round(Math.random()*3)

let PW = [];
for (let i=0; i<=3; i++){
PW.push(sBigL[indexGen1])
PW.push(sSmL[indexGen2])
PW.push(sNum[indexGen3])
PW.push(sSymb[indexGen4])
}
let PW_Randomized = PW.sort(() => Math.random() - 0.5).toString('')
let PW_Finished = PW_Randomized.replace(/,/g, "")


console.log(PW_Finished); //toliau pagalvot








