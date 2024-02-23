import { useLocation } from 'react-router-dom';
import './App.css';
export default ()=>{
    const location = useLocation()
    return (
        <>
            <head>
            <meta property="og:title" content={location.pathname.substring(1)} />
            </head>
            <div className = "App"> 
            <header className="App-header">
            <a>{location.pathname.substring(1)}</a>
            </header>
            </div>
        </>
    )
}