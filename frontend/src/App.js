import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/' element={<Header/>} />
                </Routes>
                <Footer/>

            </div>
        </Router>
    )
}

export default App
