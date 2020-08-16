import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    const incomeSign = income < 0 ? '-' : '+';
    const expenseSign = expense < 0 ? '-' : '+';
    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">{incomeSign}${numberWithCommas(Math.abs(income))}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">{expenseSign}${numberWithCommas(Math.abs(expense))}</p>
            </div>
      </div>
    )   
}
