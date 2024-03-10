import './Drawer.scss'
import remove from '../../assets/icons/remove.svg'
import send from '../../assets/icons/send.svg'
import sneaker from '../../assets/images/sneaker.jpg'
const Drawer =()=>{
    return(
        <div className="overlay">
          <div className="drawer">
            <h2>Корзина  <img src={remove} alt="" /></h2>
            <div className="cartItem">
              <img className='sneaker' width={70} height={70} src={sneaker} alt="sneaker" />
              <div className='cartItemTitle'>
                <p >Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove' src={remove} alt="" />
            </div>
            <div className="cartItem">
              <img className='sneaker' width={70} height={70} src={sneaker} alt="sneaker" />
              <div className='cartItemTitle'>
                <p >Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove' src={remove} alt="" />
            </div>
            <div className="cartItem">
              <img className='sneaker' width={70} height={70} src={sneaker} alt="sneaker" />
              <div className='cartItemTitle'>
                <p >Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove' src={remove} alt="" />
            </div>
            

            <div className="items"></div>
            <div className='cartTotalBlock'>
            <ul >
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            </div>
            <button className='greenButton'>Оформить заказ <img src={send} alt="/arrow" />
            </button>
            </div>
          
        </div>
    )
}
export default Drawer