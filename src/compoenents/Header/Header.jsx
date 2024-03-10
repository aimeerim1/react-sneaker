import './Header.scss'
import icon from '../../assets/icons/icon.svg'
import cart from '../../assets/icons/cart.svg'
import favorite from '../../assets/icons/favorite.svg'
import profile from '../../assets/icons/prof.svg'
const Header =()=>{
    return(
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
    )
}
export default Header