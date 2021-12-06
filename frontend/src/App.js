import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadUser } from './actions/authActions'
import store from './store'


import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/home/Home'
import About from './components/home/About'
import Menu from './components/home/Menu'
import Contact from './components/home/Contact'
import Faq from './components/home/Faq'
import Login from './components/home/Login'
import MenuDetails from './components/home/MenuDetails'

import Dashboard from './components/admin/Dashboard'
import ProductForm from './components/admin/ProductForm'


function App() {
    const { loading } = useSelector(state => state.auth)
    // const { dashboard } = useSelector(state => state.dashboard)

    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <Router>
            <div className="App">
                <Header />
                {loading ? <h1>Loading...</h1> : (
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/menu/:id' element={<MenuDetails />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/faq' element={<Faq />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='/admin/new/product' element={<ProductForm />} />
                        <Route path='/admin/dashboard' element={<Dashboard />} />
                    </Routes>
                )}
                <Footer />
            </div>
        </Router>
    )
}

export default App
