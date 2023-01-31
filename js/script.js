let startBtn = document.querySelectorAll('#start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValeue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),


    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesItemBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');















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
    chooseExpenses: function () {
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

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
        alert('Ежидневный бюждет' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log('средний уровень достатка');
        } else if (appData.moneyPerDay > 1000) {
            console.log('высокий уровень достатка');
        } else {
            console.log('произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed());

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(',');
        appData.inocme.push(prompt('Может что то еще?'));
        appData.income.sort();

    }

};


