

// console.log('35' + -"22");
// console.log('35' * "22");
// console.log('558' > 22);


// let usersCounter = 0;

// let newUsers = usersCounter;
// console.log(++newUsers);



// console.log(!false || 11);
// console.log(!false && 11 || 18 && !'');
// console.log(18 && !'');


// let nam = 0;
// console.log(nam ?? "без имени");

// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь';
// console.log(message);


// if (92 > '11' && 58 < 100) {
//     console.log('istina');
// }
// else {
//     console.log('lozh');
// }

// if(0){
//     console.log('lozh');

// } else if(" "){
//     console.log('istina!');
// }


let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false


};




for (let i = 0; i < 2; i++) {

    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько это обойдется', '');
    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {

        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('Произошла ошибка');


    }

}
// let i = 0;
// do {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько это обойдется', '');
//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {

//         console.log('done');
//         appData.expenses[a] = b;
//     } else {

//     }
// }
// while (i < 2);
// appData.moneyPerDay = appData.budjet / 30;

// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько это обойдется', '');
//     if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {

//         console.log('done');
//         appData.expenses[a] = b;
//     } else {

//     }


// }
appData.moneyPerDay = appData.budjet / 30;


alert('Ежидневный бюждет' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log('средний уровень достатка');
} else if (appData.moneyPerDay > 10000) {
    console.log('высокий уровень достатка');
} else {
    console.log('произошла ошибка');
}




