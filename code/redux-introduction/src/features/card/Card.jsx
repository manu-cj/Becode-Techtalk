import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './CardSlice'
import { useState } from 'react';


function Card() {
    const card = useSelector((state) => state.card.items);
    const dispatch = useDispatch()
    const [articleData, setArticleData] = useState('');
    const [price, setPrice] = useState('');
    const panier = []

    const addInCard = () => {
        panier.push({article: articleData, price: parseInt(price)});
        dispatch(addItem(panier));
    }
    return (
      <>
      <form>
        <input type='text' value={articleData} onChange={(e) => setArticleData(e.target.value)}></input>
        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}></input>
        <button onClick={addInCard}>Add article</button>
      </form>
        <ul>
          {card.map((item, index) => (
            <li key={index}>
            {item.article}  - {item.price}€
            </li>
          ))}
        </ul>
      </>
    );
}

export default Card;