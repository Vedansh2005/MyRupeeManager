import React, { useState } from 'react'
import './Budget.css'

const Budget = () => {
  const [showForm, setShowForm] = useState(false)
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food & Groceries', limit: 12000, spent: 9500 + 1800 + 1700, icon: 'fas fa-utensils' },
    { id: 2, category: 'Transportation', limit: 6000, spent: 4000 + 1200 + 900, icon: 'fas fa-car' },
    { id: 3, category: 'Rent', limit: 26000, spent: 26000, icon: 'fas fa-home' },
    { id: 4, category: 'Utilities', limit: 7000, spent: 6000 + 1500, icon: 'fas fa-bolt' },
    { id: 5, category: 'Entertainment', limit: 6000, spent: 3200 + 2000, icon: 'fas fa-film' },
    { id: 6, category: 'Shopping', limit: 9000, spent: 5000 + 3500, icon: 'fas fa-shopping-bag' },
    { id: 7, category: 'Healthcare', limit: 3000, spent: 2500, icon: 'fas fa-briefcase-medical' },
    { id: 8, category: 'Education', limit: 7000, spent: 6000, icon: 'fas fa-book' },
    { id: 9, category: 'Insurance', limit: 4000, spent: 3500, icon: 'fas fa-shield-alt' }
  ])

  const [formData, setFormData] = useState({
    category: '',
    limit: '',
    icon: 'fas fa-tag'
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
    const newBudget = {
      id: Date.now(),
      ...formData,
      limit: parseFloat(formData.limit),
      spent: 0
    }
    setBudgets(prev => [...prev, newBudget])
    setFormData({
      category: '',
      limit: '',
      icon: 'fas fa-tag'
    })
    setShowForm(false)
  }

  const calculateProgress = (spent, limit) => {
    return (spent / limit) * 100
  }

  const getProgressColor = (progress) => {
    if (progress >= 90) return '#d32f2f'
    if (progress >= 75) return '#f57c00'
    return '#2e7d32'
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
    <div className="budget">
      <div className="budget-header">
        <h2>Budget Management</h2>
        <button className="add-budget-btn" onClick={() => setShowForm(true)}>
          <i className="fas fa-plus"></i> Add Budget
        </button>
      </div>

      {showForm && (
        <div className="budget-form-container">
          <form className="budget-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Add New Budget</h3>
              <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Enter category name"
                required
              />
            </div>

            <div className="form-group">
              <label>Monthly Limit</label>
              <input
                type="number"
                name="limit"
                value={formData.limit}
                onChange={handleInputChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Icon</label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                placeholder="e.g. fas fa-tag"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Add Budget
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="budget-cards">
        {budgets.map(budget => {
          const progress = calculateProgress(budget.spent, budget.limit)
          return (
            <div key={budget.id} className="budget-card">
              <div className="budget-header">
                <div className="budget-icon" style={{ backgroundColor: getProgressColor(progress) + '22', color: getProgressColor(progress) }}>
                  <i className={budget.icon}></i>
                </div>
                <div className="budget-info">
                  <h3>{budget.category}</h3>
                  <p>Limit: {formatAmount(budget.limit)}</p>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: getProgressColor(progress) }}></div>
              </div>
              <div className="budget-footer">
                <span className="percentage">{progress.toFixed(1)}%</span>
                <span className="remaining">Spent: {formatAmount(budget.spent)}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Budget 