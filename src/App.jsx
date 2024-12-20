import { Route, Routes } from 'react-router';
import './index.css';
import AboutPage from './app/about/page';
import HomePage from './app/home/page';
import { NavLink } from 'react-router';



function App(){
  return (
    <>
    <nav className='w-full bg-purple-500'>Bar de nav</nav>
    <Routes>
    <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
    <footer className='w-full bg-blue-50'>footer</footer>
    </>
  )
}
export default App
