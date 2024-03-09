
import './App.css'
import icon from './assets/icons/icon.svg'
import cart from './assets/icons/cart.svg'
import favorite from './assets/icons/favorite.svg'
import profile from './assets/icons/prof.svg'
import plus from './assets/icons/plus.svg'
import sneaker from './assets/images/sneaker.jpg'
function App() {

  return (
    <>
      <div className='wrapper'>
          <header>
            <div className='headerLeft'>
             <div><img src={icon} alt="" /></div>
             <div>
                <h3>REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
             </div>
            </div>
            <div className='headerRight'>
              <ul>
                <li><img src={cart} alt="" /> <span>1205 руб.</span></li>
                <li><img src={favorite} alt="" /> <span>Закладки</span></li>
                <li><img src={profile} alt="" /> <span>Профиль</span></li>
              </ul>
            </div>
          </header>
          <div className="content">
            <h1>Все кроссовки</h1>
            <div className='cards'>
            <div className="card">
              <img width={133} height={112} src={sneaker} alt="" />
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className='cardContent'>
                <div className='price'>
                  <span>
                    Цена:
                  </span>
                  <b>12 999 rub.</b>
                </div>
                <button className='button'><img width={11} height={11} src={plus} alt="" /></button>
              </div>
            </div>
            
            </div>
          </div>
      </div>
      
    </>
  )
}

export default App
