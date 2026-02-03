import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Section from './Components/Section.jsx'
import Article from './Components/Article.jsx'
import Aside from './Components/Aside.jsx'
import Footer from './Components/Footer.jsx'
import Maps from './Components/Maps.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
  <Section />
  <Article />
  <Aside />
  <Maps />
  <Footer />
  </StrictMode>,
)
