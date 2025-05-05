import React from 'react'
import './Sidebar.css'

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line' },
    { id: 'transactions', label: 'Transactions', icon: 'fas fa-exchange-alt' },
    { id: 'budget', label: 'Budget', icon: 'fas fa-wallet' },
    { id: 'reports', label: 'Reports', icon: 'fas fa-file-alt' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar 