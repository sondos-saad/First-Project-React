
import './nav.css'
export default function Nav() {
   
  return (
    <>
        <div className='navWrapper'>
        <div className="container">
            <div className="navHeader">
                <div className="logo">
                    <h1>DORSIN</h1>
                </div>
                <div className="navList">
                    <ul className= "nav-menu">
                        <li className="nav-item">
                            <a href="#" className="link-item" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item" >Services</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item">Teams</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item"> Features</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item">About</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="link-item">Contact</a>
                        </li>   
                    </ul>
                </div>
            </div>
               
        
        </div>
           
        </div>
      
    </>
  )
}
