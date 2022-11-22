import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const products = useSelector(state => state.cart);
  return (
    <>
      <div className="container">
        <h1 className='text-center mt-3 mb-3'>My Cart Products</h1>
        <div className="cartData row justify-content-center align-items-center gap-4">
          {
            products.map((product, index) => (
              <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPxJosi5Idm8Gq5226zWA9lYxpLne6YXEhMd-kDK1DZ-ykg492cUQHYO0uuEo7jRfcjM&usqp=CAU" />
                <Card.Body>
                  <Card.Title><h1>{product.title}</h1></Card.Title>
                  <Card.Text className='para'>hvfvb nigbihib lgdfjbv elgiufbvfd luigidfulb</Card.Text>
                  <Card.Text>Price : &#8377; <strong>200</strong></Card.Text>
                  <Button variant="danger" className='col-lg-12'>Buy Now</Button>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart

