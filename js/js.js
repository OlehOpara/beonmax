

let money, time;


function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');


    }
}
start();
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,


};






function chooseExpenses() {
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

}
chooseExpenses();



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



function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    alert('Ежидневный бюждет' + appData.moneyPerDay);
}
detectDayBudget();



function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log('средний уровень достатка');
    } else if (appData.moneyPerDay > 1000) {
        console.log('высокий уровень достатка');
    } else {
        console.log('произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed());

    }
}
checkSavings();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();   

