import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Header from './components/Header'
import Services from './Services'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Hero></Hero>
        <Routes>
          <Route path='/' Component={Services}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
