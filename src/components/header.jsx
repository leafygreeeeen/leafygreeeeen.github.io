import 's/components/css/dropdown.css'
import 's/components/css/header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <div>
                <div className="dropdown-group inline-block">
                    <div className="dropdown-button">!!!</div>
                    <div className="dropdown-content">
                        <Link to="/art">Art</Link>
                        <Link to="/">temp1</Link>
                        <Link to="/">temp2</Link>
                    </div>
                </div>
                
                <div className="inline-block">
                    <Link to='/'>Home</Link>
                    <div className="inline-block">|</div>
                    <Link to='/about'>About</Link>
                    <div className="inline-block">|</div>
                    <Link to='/contact'>Contact</Link>
                </div>                                                                                                   
                
            </div>
            
        </nav>
    )
}