import React, { useState } from 'react'
import './Transactions.css'

const Transactions = () => {
  const [showForm, setShowForm] = useState(false)
  const [transactions, setTransactions] = useState([
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
  ])

  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: formData.type === 'expense' ? -Math.abs(parseFloat(formData.amount)) : Math.abs(parseFloat(formData.amount))
    }
    setTransactions(prev => [newTransaction, ...prev])
    setFormData({
      type: 'expense',
      category: '',
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
    })
    setShowForm(false)
  }

  const categories = {
    expense: ['Food & Groceries', 'Transportation', 'Rent', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Insurance', 'Other'],
    income: ['Salary', 'Freelance', 'Investment', 'Gifts', 'Other']
  }

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <button className="add-transaction-btn" onClick={() => setShowForm(true)}>
          <i className="fas fa-plus"></i> Add Transaction
        </button>
      </div>

      {showForm && (
        <div className="transaction-form-container">
          <form className="transaction-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Add New Transaction</h3>
              <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories[formData.type].map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
                required
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="transactions-list">
        {transactions.map(transaction => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <i className={`fas fa-${transaction.type === 'income' ? 'arrow-down' : 'arrow-up'}`}></i>
            </div>
            <div className="transaction-details">
              <h4>{transaction.description}</h4>
              <p>{transaction.category} • {new Date(transaction.date).toLocaleDateString('en-IN')}</p>
            </div>
            <div className={`transaction-amount ${transaction.type}`}>
              {transaction.type === 'income' ? '+' : '-'} {formatAmount(Math.abs(transaction.amount))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transactions 