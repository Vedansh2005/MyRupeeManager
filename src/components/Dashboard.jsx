import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './Dashboard.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ff6b6b', '#4ecdc4', '#a8e6cf', '#dcedc1'];

const Dashboard = () => {
  const [transactions, setTransactions] = useState([
    // May 2025 Transactions
    { id: 1, type: 'income', category: 'Salary', amount: 90000, description: 'Monthly Salary', date: '2025-05-01T09:00:00' },
    { id: 2, type: 'income', category: 'Freelance', amount: 18000, description: 'Freelance Project', date: '2025-05-05T14:00:00' },
    { id: 3, type: 'income', category: 'Investment', amount: 7000, description: 'Stock Dividends', date: '2025-05-10T10:00:00' },
    { id: 4, type: 'expense', category: 'Rent', amount: -26000, description: 'Monthly Rent Payment', date: '2025-05-03T10:00:00' },
    { id: 5, type: 'expense', category: 'Food & Groceries', amount: -9500, description: 'Monthly Grocery Shopping', date: '2025-05-06T16:00:00' },
    { id: 6, type: 'expense', category: 'Utilities', amount: -6000, description: 'Electricity & Water Bill', date: '2025-05-07T15:30:00' },
    { id: 7, type: 'expense', category: 'Transportation', amount: -4000, description: 'Fuel & Metro Card', date: '2025-05-08T11:20:00' },
    { id: 8, type: 'expense', category: 'Healthcare', amount: -2500, description: 'Medical Checkup', date: '2025-05-09T10:00:00' },
    { id: 9, type: 'expense', category: 'Education', amount: -6000, description: 'Online Course', date: '2025-05-11T15:00:00' },
    { id: 10, type: 'expense', category: 'Insurance', amount: -3500, description: 'Health Insurance Premium', date: '2025-05-12T11:00:00' },
    { id: 11, type: 'expense', category: 'Entertainment', amount: -3200, description: 'Concert Tickets', date: '2025-05-13T19:00:00' },
    { id: 12, type: 'expense', category: 'Shopping', amount: -5000, description: 'New Clothes', date: '2025-05-14T13:15:00' },
    { id: 13, type: 'expense', category: 'Food & Groceries', amount: -1800, description: 'Weekly Groceries', date: '2025-05-15T16:00:00' },
    { id: 14, type: 'expense', category: 'Transportation', amount: -1200, description: 'Cab Fare', date: '2025-05-16T20:30:00' },
    { id: 15, type: 'expense', category: 'Entertainment', amount: -2000, description: 'Movie & Dinner', date: '2025-05-17T19:30:00' },
    { id: 16, type: 'income', category: 'Freelance', amount: 9000, description: 'App Bug Fix', date: '2025-05-18T14:00:00' },
    { id: 17, type: 'expense', category: 'Shopping', amount: -3500, description: 'Gadgets Purchase', date: '2025-05-19T11:00:00' },
    { id: 18, type: 'expense', category: 'Food & Groceries', amount: -1700, description: 'Restaurant Dinner', date: '2025-05-20T21:00:00' },
    { id: 19, type: 'expense', category: 'Utilities', amount: -1500, description: 'Internet Bill', date: '2025-05-21T10:00:00' },
    { id: 20, type: 'expense', category: 'Transportation', amount: -900, description: 'Metro Card Recharge', date: '2025-05-22T09:00:00' },

    // April 2025 Transactions
    { id: 21, type: 'income', category: 'Salary', amount: 90000, description: 'Monthly Salary', date: '2025-04-01T09:00:00' },
    { id: 22, type: 'income', category: 'Freelance', amount: 15000, description: 'Website Project', date: '2025-04-05T14:00:00' },
    { id: 23, type: 'income', category: 'Investment', amount: 6000, description: 'Stock Dividends', date: '2025-04-10T10:00:00' },
    { id: 24, type: 'expense', category: 'Rent', amount: -26000, description: 'Monthly Rent Payment', date: '2025-04-03T10:00:00' },
    { id: 25, type: 'expense', category: 'Food & Groceries', amount: -9000, description: 'Monthly Grocery Shopping', date: '2025-04-06T16:00:00' },
    { id: 26, type: 'expense', category: 'Utilities', amount: -5800, description: 'Electricity & Water Bill', date: '2025-04-07T15:30:00' },
    { id: 27, type: 'expense', category: 'Transportation', amount: -3700, description: 'Fuel & Metro Card', date: '2025-04-08T11:20:00' },
    { id: 28, type: 'expense', category: 'Healthcare', amount: -2200, description: 'Medical Checkup', date: '2025-04-09T10:00:00' },
    { id: 29, type: 'expense', category: 'Education', amount: -5500, description: 'Online Course', date: '2025-04-11T15:00:00' },
    { id: 30, type: 'expense', category: 'Insurance', amount: -3200, description: 'Health Insurance Premium', date: '2025-04-12T11:00:00' },
    { id: 31, type: 'expense', category: 'Entertainment', amount: -3000, description: 'Concert Tickets', date: '2025-04-13T19:00:00' },
    { id: 32, type: 'expense', category: 'Shopping', amount: -4200, description: 'New Shoes', date: '2025-04-14T13:15:00' },
    { id: 33, type: 'expense', category: 'Food & Groceries', amount: -1600, description: 'Weekly Groceries', date: '2025-04-15T16:00:00' },
    { id: 34, type: 'expense', category: 'Transportation', amount: -1000, description: 'Cab Fare', date: '2025-04-16T20:30:00' },
    { id: 35, type: 'expense', category: 'Entertainment', amount: -1700, description: 'Movie & Dinner', date: '2025-04-17T19:30:00' },
    { id: 36, type: 'income', category: 'Freelance', amount: 7000, description: 'Logo Design', date: '2025-04-18T14:00:00' },
    { id: 37, type: 'expense', category: 'Shopping', amount: -3000, description: 'Gadgets Purchase', date: '2025-04-19T11:00:00' },
    { id: 38, type: 'expense', category: 'Food & Groceries', amount: -1400, description: 'Restaurant Dinner', date: '2025-04-20T21:00:00' },
    { id: 39, type: 'expense', category: 'Utilities', amount: -1300, description: 'Internet Bill', date: '2025-04-21T10:00:00' },
    { id: 40, type: 'expense', category: 'Transportation', amount: -800, description: 'Metro Card Recharge', date: '2025-04-22T09:00:00' },

    // March 2025 Transactions
    { id: 41, type: 'income', category: 'Salary', amount: 90000, description: 'Monthly Salary', date: '2025-03-01T09:00:00' },
    { id: 42, type: 'income', category: 'Freelance', amount: 12000, description: 'App Project', date: '2025-03-05T14:00:00' },
    { id: 43, type: 'income', category: 'Investment', amount: 5000, description: 'Stock Dividends', date: '2025-03-10T10:00:00' },
    { id: 44, type: 'expense', category: 'Rent', amount: -26000, description: 'Monthly Rent Payment', date: '2025-03-03T10:00:00' },
    { id: 45, type: 'expense', category: 'Food & Groceries', amount: -8700, description: 'Monthly Grocery Shopping', date: '2025-03-06T16:00:00' },
    { id: 46, type: 'expense', category: 'Utilities', amount: -5700, description: 'Electricity & Water Bill', date: '2025-03-07T15:30:00' },
    { id: 47, type: 'expense', category: 'Transportation', amount: -3900, description: 'Fuel & Metro Card', date: '2025-03-08T11:20:00' },
    { id: 48, type: 'expense', category: 'Healthcare', amount: -2100, description: 'Medical Checkup', date: '2025-03-09T10:00:00' },
    { id: 49, type: 'expense', category: 'Education', amount: -5200, description: 'Online Course', date: '2025-03-11T15:00:00' },
    { id: 50, type: 'expense', category: 'Insurance', amount: -3100, description: 'Health Insurance Premium', date: '2025-03-12T11:00:00' },
    { id: 51, type: 'expense', category: 'Entertainment', amount: -2800, description: 'Concert Tickets', date: '2025-03-13T19:00:00' },
    { id: 52, type: 'expense', category: 'Shopping', amount: -4100, description: 'New Bag', date: '2025-03-14T13:15:00' },
    { id: 53, type: 'expense', category: 'Food & Groceries', amount: -1500, description: 'Weekly Groceries', date: '2025-03-15T16:00:00' },
    { id: 54, type: 'expense', category: 'Transportation', amount: -900, description: 'Cab Fare', date: '2025-03-16T20:30:00' },
    { id: 55, type: 'expense', category: 'Entertainment', amount: -1600, description: 'Movie & Dinner', date: '2025-03-17T19:30:00' },
    { id: 56, type: 'income', category: 'Freelance', amount: 6000, description: 'Logo Design', date: '2025-03-18T14:00:00' },
    { id: 57, type: 'expense', category: 'Shopping', amount: -2700, description: 'Gadgets Purchase', date: '2025-03-19T11:00:00' },
    { id: 58, type: 'expense', category: 'Food & Groceries', amount: -1300, description: 'Restaurant Dinner', date: '2025-03-20T21:00:00' },
    { id: 59, type: 'expense', category: 'Utilities', amount: -1200, description: 'Internet Bill', date: '2025-03-21T10:00:00' },
    { id: 60, type: 'expense', category: 'Transportation', amount: -700, description: 'Metro Card Recharge', date: '2025-03-22T09:00:00' },
  ]);

  const [dateFilter, setDateFilter] = useState('month');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    filterTransactions();
  }, [dateFilter, transactions]);

  const filterTransactions = () => {
    const now = new Date();
    const filtered = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      switch (dateFilter) {
        case 'today':
          return transactionDate.toDateString() === now.toDateString();
        case 'week':
          const weekAgo = new Date(now.setDate(now.getDate() - 7));
          return transactionDate >= weekAgo;
        case 'month':
          return transactionDate.getMonth() === now.getMonth() && 
                 transactionDate.getFullYear() === now.getFullYear();
        case 'year':
          return transactionDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
    setFilteredTransactions(filtered);
  };

  const calculateTotalBalance = () => {
    return filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const calculateTotalIncome = () => {
    return filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const calculateTotalExpenses = () => {
    return filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
  };

  const calculateSavingsRate = () => {
    const income = calculateTotalIncome();
    const expenses = calculateTotalExpenses();
    return income > 0 ? ((income - expenses) / income * 100).toFixed(1) : 0;
  };

  const calculateCategoryTotals = () => {
    const categoryTotals = {};
    filteredTransactions
      .filter(t => t.type === 'expense')
      .forEach(transaction => {
        const amount = Math.abs(transaction.amount);
        categoryTotals[transaction.category] = (categoryTotals[transaction.category] || 0) + amount;
      });
    return Object.entries(categoryTotals)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  };

  const calculateMonthlyData = () => {
    const monthlyData = {};
    filteredTransactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const monthYear = date.toLocaleString('default', { month: 'short', year: '2-digit' });
      monthlyData[monthYear] = monthlyData[monthYear] || { income: 0, expenses: 0 };
      if (transaction.type === 'income') {
        monthlyData[monthYear].income += transaction.amount;
      } else {
        monthlyData[monthYear].expenses += Math.abs(transaction.amount);
      }
    });
    return Object.entries(monthlyData)
      .map(([month, data]) => ({
        month,
        ...data
      }))
      .sort((a, b) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months.indexOf(a.month) - months.indexOf(b.month);
      });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateMonthlyComparison = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const currentMonthData = transactions.filter(t => {
      const date = new Date(t.date);
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    });
    
    const previousMonthData = transactions.filter(t => {
      const date = new Date(t.date);
      return date.getMonth() === currentMonth - 1 && date.getFullYear() === currentYear;
    });

    const currentMonthIncome = currentMonthData
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const previousMonthIncome = previousMonthData
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const currentMonthExpenses = currentMonthData
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    const previousMonthExpenses = previousMonthData
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return {
      incomeChange: previousMonthIncome ? ((currentMonthIncome - previousMonthIncome) / previousMonthIncome * 100).toFixed(1) : 0,
      expensesChange: previousMonthExpenses ? ((currentMonthExpenses - previousMonthExpenses) / previousMonthExpenses * 100).toFixed(1) : 0
    };
  };

  const totalBalance = calculateTotalBalance();
  const totalIncome = calculateTotalIncome();
  const totalExpenses = calculateTotalExpenses();
  const savingsRate = calculateSavingsRate();
  const categoryData = calculateCategoryTotals();
  const monthlyData = calculateMonthlyData();
  const monthlyComparison = calculateMonthlyComparison();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Financial Dashboard</h2>
        <div className="date-filter">
          <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      <div className="summary-cards">
        <div className="card">
          <div className="card-icon income">
            <i className="fas fa-arrow-down"></i>
          </div>
          <div className="card-content">
            <h3>Total Income</h3>
            <p className="amount">{formatAmount(totalIncome)}</p>
            <p className={`trend ${parseFloat(monthlyComparison.incomeChange) >= 0 ? 'positive' : 'negative'}`}>
              {parseFloat(monthlyComparison.incomeChange) >= 0 ? '+' : ''}{monthlyComparison.incomeChange}% from last month
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon expense">
            <i className="fas fa-arrow-up"></i>
          </div>
          <div className="card-content">
            <h3>Total Expenses</h3>
            <p className="amount">{formatAmount(totalExpenses)}</p>
            <p className={`trend ${parseFloat(monthlyComparison.expensesChange) <= 0 ? 'positive' : 'negative'}`}>
              {parseFloat(monthlyComparison.expensesChange) >= 0 ? '+' : ''}{monthlyComparison.expensesChange}% from last month
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon balance">
            <i className="fas fa-wallet"></i>
          </div>
          <div className="card-content">
            <h3>Net Balance</h3>
            <p className="amount">{formatAmount(totalBalance)}</p>
            <p className="trend positive">Current Balance</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon savings">
            <i className="fas fa-piggy-bank"></i>
          </div>
          <div className="card-content">
            <h3>Savings Rate</h3>
            <p className="amount">{savingsRate}%</p>
            <p className="trend positive">Monthly Savings</p>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Income vs Expenses</h3>
          <div className="chart-placeholder">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatAmount(value)} />
                <Bar dataKey="income" fill="#82ca9d" name="Income" />
                <Bar dataKey="expenses" fill="#ff8042" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container">
          <h3>Spending by Category</h3>
          <div className="chart-placeholder">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={(entry) => `${entry.name}: ${formatAmount(entry.value)}`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatAmount(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="recent-transactions">
        <h3><i className="fas fa-history"></i> Recent Transactions</h3>
        <div className="transactions-list">
          {filteredTransactions.slice(0, 8).map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                <i className={`fas ${transaction.type === 'income' ? 'fa-arrow-down' : 'fa-arrow-up'}`}></i>
              </div>
              <div className="transaction-details">
                <h4>{transaction.description}</h4>
                <p>{formatDate(transaction.date)}</p>
              </div>
              <div className={`transaction-amount ${transaction.type}`}>
                {transaction.type === 'income' ? '+' : '-'} {formatAmount(Math.abs(transaction.amount))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;