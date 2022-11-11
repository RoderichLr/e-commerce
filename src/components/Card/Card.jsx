/* eslint-disable camelcase */

import { Link } from 'react-router-dom'
// eslint-disable-next-line camelcase
const Card = ({ product_name = '', category = '', price = '', image = '', _id = '' }) => {
  return (
    <Link className='text-decoration-none text-body' to={_id}>
      <div className=' card box-shadow-hover  box-shadow-n  card  '>
        <img src={image} className='card-img-top ' alt={product_name} />
        <div className='card-body'>
          <h5 className='card-title'>{product_name}</h5>
          <p className='p-1'>{price}$</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
