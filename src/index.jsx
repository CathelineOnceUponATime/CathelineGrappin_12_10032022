import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './Sass/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Footer />
        <Accueil />
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
