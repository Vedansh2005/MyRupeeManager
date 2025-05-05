import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'
import Budget from './components/Budget'
import Reports from './components/Reports'
import Settings from './components/Settings'

function App() {
  console.log('App component rendering')
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    console.log('Rendering page:', activePage)
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'transactions':
        return <Transactions />
      case 'budget':
        return <Budget />
      case 'reports':
        return <Reports />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="main-container" style={{ flex: 1, display: 'flex' }}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="content" style={{ flex: 1, padding: '2rem' }}>
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
