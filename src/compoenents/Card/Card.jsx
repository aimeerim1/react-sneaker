import './Card.scss'
import plus from '../../assets/icons/plus.svg'
import fav from '../../assets/icons/Fav.svg'
import DB from './card.json'
import addCart from '../../assets/icons/addCart.svg'
import addFav from '../../assets/icons/addFav.svg'
import { useState } from 'react'
// import { useEffect } from 'react'

const Card = ({onPlus}) =>{

    const  [isAdded,setIsAdded] =useState({});
    const onClickPlus = (id) =>{
      const itemToAdd = DB.find(item => item.id === id);
        if (itemToAdd) {
        onPlus(itemToAdd);

      setIsAdded(prevState => ({
        ...prevState,
        [id]: !prevState[id]
    }));
    }}
    // console.log(isAdded)

    function onClickPFavorite() {
    console.log('add Favorite')
  }

    return (
        <div className='cards'>
          {DB.map((item,index)=>(
            <div key={index} className="card">
                  <div className="favorite">
                  <img onClick={onClickPFavorite} src={fav} alt="fav" /></div>
                  <img width={133} height={112} src={item.img} alt="" />
                  <h5>{item.title}</h5>
                  <div className='cardContent'>
                    <div className='price'>
                      <span>
                        Цена:
                      </span>
                      <b>{item.price}rub.</b>
                    </div>
                   <img onClick={() => onClickPlus(item.id)} className='button' width={11} height={11} src={isAdded[item.id] ? addCart : plus} alt="" />
                  </div>
                </div> 
                
          ))}
                 
                
              </div> 
              
    )
}
export default Card;