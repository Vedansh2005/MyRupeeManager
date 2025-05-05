import React, { useState } from 'react'
import './Reports.css'

const Reports = () => {
  const [dateRange, setDateRange] = useState('month')
  const [reportType, setReportType] = useState('expenses')

  // Use realistic data for May 2025 and previous months
  const monthlyData = [
    { month: 'Mar', income: 107000, expenses: 76500 },
    { month: 'Apr', income: 111000, expenses: 77100 },
    { month: 'May', income: 124000, expenses: 80300 }
  ]

  const categoryData = [
    { category: 'Food & Groceries', amount: 9500 + 1800 + 1700 },
    { category: 'Transportation', amount: 4000 + 1200 + 900 },
    { category: 'Rent', amount: 26000 },
    { category: 'Utilities', amount: 6000 + 1500 },
    { category: 'Entertainment', amount: 3200 + 2000 },
    { category: 'Shopping', amount: 5000 + 3500 },
    { category: 'Healthcare', amount: 2500 },
    { category: 'Education', amount: 6000 },
    { category: 'Insurance', amount: 3500 }
  ]

  const totalIncome = 90000 + 18000 + 7000 + 9000
  const totalExpenses = 9500 + 1800 + 1700 + 4000 + 1200 + 900 + 26000 + 6000 + 1500 + 3200 + 2000 + 5000 + 3500 + 2500 + 6000 + 3500
  const netSavings = totalIncome - totalExpenses

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="reports">
      <div className="reports-header">
        <h2>Financial Reports</h2>
        <div className="reports-filters">
          <select 
            value={dateRange} 
            onChange={(e) => setDateRange(e.target.value)}
            className="filter-select"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <select 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)}
            className="filter-select"
          >
            <option value="expenses">Expenses</option>
            <option value="income">Income</option>
            <option value="balance">Balance</option>
          </select>
        </div>
      </div>

      <div className="reports-grid">
        <div className="report-card">
          <h3>Monthly Overview</h3>
          <div className="chart-container">
            <div className="chart-placeholder">
              Chart will be implemented here
            </div>
          </div>
        </div>

        <div className="report-card">
          <h3>Category Distribution</h3>
          <div className="chart-container">
            <div className="chart-placeholder">
              Chart will be implemented here
            </div>
          </div>
        </div>

        <div className="report-card">
          <h3>Income vs Expenses</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-label">Total Income</span>
              <span className="stat-value income">{formatAmount(totalIncome)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Expenses</span>
              <span className="stat-value expense">{formatAmount(totalExpenses)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Net Savings</span>
              <span className="stat-value savings">{formatAmount(netSavings)}</span>
            </div>
          </div>
        </div>

        <div className="report-card">
          <h3>Top Categories</h3>
          <div className="category-list">
            {categoryData.map((item, index) => (
              <div key={index} className="category-item">
                <div className="category-info">
                  <span className="category-name">{item.category}</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${(item.amount / Math.max(...categoryData.map(c => c.amount))) * 100}%`,
                        backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                      }}
                    ></div>
                  </div>
                </div>
                <span className="category-amount">{formatAmount(item.amount)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reports-actions">
        <button className="export-btn">
          <i className="fas fa-download"></i> Export Report
        </button>
        <button className="print-btn">
          <i className="fas fa-print"></i> Print Report
        </button>
      </div>
    </div>
  )
}

export default Reports 