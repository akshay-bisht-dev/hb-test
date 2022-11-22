import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {add} from '../Redux/CartReducer'
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const fetchData = async() => {
    const {data} = await axios.get("https://fakestoreapi.com/products/")
    setProduct(data);
  }
  useEffect(() => {
    fetchData();
  }, []);


  const AddToCart = (product) => {
    dispatch(add(product));
  }

  return (
    <>
      <div className="container">
        <h1 className='text-center mt-3 mb-3' style={{ textTransform: "uppercase" }}>H B Synergy India Products</h1>

        <div className="row d-flex justify-content-center align-items-center gap-4">
          {
            product.map((val, index) => (
                  <Card style={{ width: '18rem', height:'32rem' }} key={index}>
                    <Card.Img variant="top" src={val.image} height="250px" />
                    <Card.Body>
                      <Card.Title>{val.title.substr(1,20)}...</Card.Title>
                      <Card.Text className='para'>{val.description.substr(1,80)}...</Card.Text>
                      <Card.Text>Price : &#8377; <strong>{val.price}</strong></Card.Text>
                      <Button variant="danger" className='col-lg-12' onClick={() => AddToCart(product)}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home