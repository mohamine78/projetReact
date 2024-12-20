import { Route, Routes } from 'react-router';
import './index.css';
import AboutPage from './app/about/page.jsx';
import HomePage from './app/home/page.jsx';
import NavBar from './nav/nav.jsx';


function App(){
  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
    <footer className='w-full bg-blue-50'>footer</footer>
    </>
  )
}
export default App
