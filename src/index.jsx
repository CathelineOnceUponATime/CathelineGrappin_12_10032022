import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route path='/user/:id' element={<Accueil />} />
          <Route path='*' element={<Navigate to='/user/12' />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
