
import './App.css'

import addCart from './assets/icons/addCart.svg'
import search from './assets/icons/search.svg'
import addFav from './assets/icons/addFav.svg'
import Card from './compoenents/Card/Card'
import Header from './compoenents/Header/Header'
import Drawer from './compoenents/Drawer/Drawer'
function App() {

  return (
    <>
      <div className='wrapper clear'>
    <Drawer/>
        
        <Header/>
          <div className="content">
            <div className='search'>
              <h1>Все кроссовки</h1>
              <div className='searchBlock'>
                <img src={search} alt="search" />
                <input placeholder='Search...' />
              </div>
            </div>
            
              <Card/>
          </div>
      </div>
      
    </>
  )
}

export default App
