import React , {useState}from 'react'
import './style.css'

const NavBar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Navbar for larger screens */}
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );

  /*
  return (
    <div className='Nav'>
        <div className="nav-name">
        Tamilika Mdongo
        </div>
       
        <div className="nav-links">
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
        </ul>
        </div>
        
    </div>
  )
    */
}

export default NavBar