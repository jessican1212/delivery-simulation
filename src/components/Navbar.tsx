import React from 'react'
import {Link} from 'react-router-dom';

const Navbar= () =>{

  const liStyles = {
    textDecoration: 'none',
    color: '#272343',
    fontSize: '20px',
    fontWeight: '600',
    margin: '30px'
  }

  return (
  <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
    <h2 style={{margin: '10px'}}>Delivery App Simulation</h2>
    <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'flex-end'}}>
      <li>
        <Link style={liStyles} to="/">Dashboard</Link>
      </li>
      <li>
        <Link style={liStyles} to="/Task">Task</Link>
      </li>
      <li>
        <Link style={liStyles} to="/History">History</Link>
      </li>
    </ul>
  </div>
  );
}

export default Navbar