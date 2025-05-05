import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Personal Finance Manager</h1>
        <div className="header-actions">
          <button className="notification-btn">
            <i className="fas fa-bell"></i>
          </button>
          <div className="user-profile">
            <img src="/default-avatar.png" alt="User" className="avatar" />
            <span>User Name</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 