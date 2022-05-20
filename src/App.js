import Home from './pages/Home';
import ErrorPage from './pages/404';
import {Route, Routes, NavLink} from 'react-router-dom';
import SearchPage from './pages/Search';
import FilteredPage from './pages/Filtered';
function App() {
  return (
    <>
      <header>
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark' >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/"> Home </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/search"> Search </NavLink>
            </li>
          
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path='/search' element={<SearchPage />}/>
          <Route path="/*" element={ <ErrorPage/> } />    
          <Route path='/filtered' element={<FilteredPage />}/>
        </Routes>
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
