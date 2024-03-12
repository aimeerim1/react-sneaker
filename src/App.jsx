import './App.css'
import search from './assets/icons/search.svg'
import Card from './compoenents/Card/Card'
import Header from './compoenents/Header/Header'
import Drawer from './compoenents/Drawer/Drawer'
import remove from './assets/icons/remove.svg'
import { useState } from 'react'
function App() {
  const [cartOpened,setCartOpened]=useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [searchValue,setSearchValue]=useState('')

  const onAddToCart = (obj)=>{
    setCartItems((prev)=>[...prev,obj])
     }
     console.log(cartItems)

    const onChangeSearchInput = (event) =>{
      // console.log()
      setSearchValue(event.target.value)
    }

  return (
    <>
      <div className='wrapper clear'>
        {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null}
        <Header onClickCart={()=>setCartOpened(true)} />
        
          <div className="content">
            <div className='search'>
              <h1>{searchValue ? `поиск по запросу : ${searchValue}`:'Все кроссовки' }</h1>
              <div className='searchBlock'>
                <img src={search} alt="search" />
                {searchValue && (
                    <img
                      onClick={() => setSearchValue('')}
                      className="close"
                      src={remove}
                      alt="Clear"
                    />
                  )}
                <input value={searchValue} placeholder='Search...' onChange={onChangeSearchInput} />
              </div>
            </div>
            
              <Card  onPlus={(obj)=>onAddToCart(obj)}  searchValue={searchValue}/>
          </div>
      </div>
      
    </>
  )
}

export default App
