
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {phonesData} from "./Product.data"
import { Card, Button } from 'react-bootstrap';







const Product = () => {
    const [item, setItem] = useState(phonesData);
  return (
    <div>
        <h1 className="bg-info text-white ">PRODUCTS</h1>
        {item.map((item)=>(
          <div className='d-inline-flex'>
          <Card className='shadow p-2 m-2 bg-body rounded' style={{ width: '12.5rem' }}>
          <Card.Img style={{ height: '15rem' }} className='p-2' variant="top" src={require(`./phones/${item.image}.jpg`)} />
          <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>
              {item.desc}
            </Card.Text>
            <h5>Price: ₹ {item.price}</h5>
            <div>
                <p>
                    Qty<Button className='m-1'>-</Button>{item.qty}
                    <Button className='m-1'>+</Button>
                </p>
            </div>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        </div>

        ))}
        
    




    </div>
  )
}

export default Product