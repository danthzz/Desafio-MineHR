import './navbar.css';


const Navbar = () => {
  return (
    <div className="nav">
      <div className='bar'></div>
      <div className='nav-container'>
        <div>
          <h1 className='title'>Dashboard</h1>
          <p className='subtitle'>Desafio Tecnico Frontend</p>
        </div>
        <div className='icon'>
          <i className="filter fa-solid fa-filter"></i> Filtrar
        </div>
      </div>
    </div>

  );
}

export default Navbar;