import './App.css'
import search from './assets/icons/search.svg'
import Card from './compoenents/Card/Card'
import Header from './compoenents/Header/Header'
import Drawer from './compoenents/Drawer/Drawer'
import { useState } from 'react'
function App() {
  const [cartOpened,setCartOpened]=useState(false);
  const [cartItems,setCartItems] = useState([]);

  const onAddToCart = (obj)=>{
    setCartItems((prev)=>[...prev,obj])
     }
     console.log(cartItems)
  return (
    <>
      <div className='wrapper clear'>
        {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null}
        <Header onClickCart={()=>setCartOpened(true)} />
        
          <div className="content">
            <div className='search'>
              <h1>Все кроссовки</h1>
              <div className='searchBlock'>
                <img src={search} alt="search" />
                <input placeholder='Search...' />
              </div>
            </div>
            
              <Card onPlus={(obj)=>onAddToCart(obj)}/>
          </div>
      </div>
      
    </>
  )
}

export default App
