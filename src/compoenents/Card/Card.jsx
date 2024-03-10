import './Card.scss'
import plus from '../../assets/icons/plus.svg'
import fav from '../../assets/icons/Fav.svg'
import sneaker from '../../assets/images/sneaker.jpg'
const Card = () =>{
    return (
        <div className='cards'>
                 <div className="card">
                  <div className="favorite">
                  <img src={fav} alt="fav" /></div>
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
              
    )
}
export default Card;