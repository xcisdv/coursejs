

let time = prompt("Введите дату в формате YYYY-MM-DD", ''),
    test = 2,
    money = prompt("Ваш бюджет на месяц?", '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q3 = prompt("Во сколько обойдется?", ''),
    q4 = prompt("Во сколько обойдется?", '');

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;
alert(appData.budget/30);






