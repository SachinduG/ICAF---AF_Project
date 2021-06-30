import React from 'react';
import './App.css';
import bgimage from './assets/images/bg.jpg';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/navBar/navBar';
import Header from './components/Header/Header';
import VisitPage from './components/VisitPage/VisitPage';
import Footer from './components/Footer/Footer';
import Conference from './components/Conference/Conference';




function App() {

    return (
        <div className="App" style={{
            minHeight: '100vh',
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {/*<NavBar/>*/}
            <CssBaseline />
            <Header />
            <Conference />
            <VisitPage />
            <Footer />

        </div>

    );

}
export default App;