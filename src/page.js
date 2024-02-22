import { useParams } from "react-router-dom"
import './App.css';
export default ()=>{
    var data = useParams()
    return (
        <div className = "App"> 
         <header className="App-header">
         <a>{data.txt}</a>
         </header>
        </div>
    )
}