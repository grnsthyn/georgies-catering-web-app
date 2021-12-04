import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/home/Home'
import About from './components/home/About'
import Menu from './components/home/Menu'
import Contact from './components/home/Contact'
import Faq from './components/home/Faq'
import Login from './components/home/Login'
import MenuDetails from './components/home/MenuDetails'
import ProductForm from './components/admin/ProductForm'


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/menu' element={<Menu/>} />
                        <Route path='/menu/:id' element={<MenuDetails/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/faq' element={<Faq/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/admin' element={<ProductForm/>} />
                    </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
