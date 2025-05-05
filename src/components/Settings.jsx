import React, { useState } from 'react'
import './Settings.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currency: 'USD',
    language: 'en',
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      weeklyReport: true,
      budgetAlerts: true
    }
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Settings</h2>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <button
            className={`sidebar-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fas fa-user"></i>
            Profile
          </button>
          <button
            className={`sidebar-item ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <i className="fas fa-cog"></i>
            Preferences
          </button>
          <button
            className={`sidebar-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <i className="fas fa-bell"></i>
            Notifications
          </button>
          <button
            className={`sidebar-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-shield-alt"></i>
            Security
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <form onSubmit={handleSubmit} className="settings-form">
              <h3>Profile Settings</h3>
              
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Profile Picture</label>
                <div className="profile-picture">
                  <img src="/default-avatar.png" alt="Profile" />
                  <button type="button" className="change-picture-btn">
                    Change Picture
                  </button>
                </div>
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          )}

          {activeTab === 'preferences' && (
            <form onSubmit={handleSubmit} className="settings-form">
              <h3>Preferences</h3>
              
              <div className="form-group">
                <label>Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <div className="form-group">
                <label>Theme</label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          )}

          {activeTab === 'notifications' && (
            <form onSubmit={handleSubmit} className="settings-form">
              <h3>Notification Settings</h3>
              
              <div className="notification-options">
                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Email Notifications</h4>
                    <p>Receive notifications via email</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="email"
                      checked={formData.notifications.email}
                      onChange={handleInputChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Push Notifications</h4>
                    <p>Receive push notifications</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="push"
                      checked={formData.notifications.push}
                      onChange={handleInputChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Weekly Reports</h4>
                    <p>Receive weekly financial reports</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="weeklyReport"
                      checked={formData.notifications.weeklyReport}
                      onChange={handleInputChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4>Budget Alerts</h4>
                    <p>Get notified when approaching budget limits</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="budgetAlerts"
                      checked={formData.notifications.budgetAlerts}
                      onChange={handleInputChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          )}

          {activeTab === 'security' && (
            <form onSubmit={handleSubmit} className="settings-form">
              <h3>Security Settings</h3>
              
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Enter current password"
                  required
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <div className="security-options">
                <div className="security-item">
                  <div className="security-info">
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button type="button" className="enable-btn">
                    Enable
                  </button>
                </div>
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings 