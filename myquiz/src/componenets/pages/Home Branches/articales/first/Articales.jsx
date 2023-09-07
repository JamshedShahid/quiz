import React from 'react'

import styles from './Articales.module.css'
import { Button, Card } from 'react-bootstrap'

const Articales = () => {
  return (
    <div className={styles.bar}>   
       <div className="">
      <div className="container text-center ">
        <div className="row">
          <div className="col-sm">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/202/300" height="200px"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
    <div className="">
      <div className="container text-center ">
        <div className="row">
          <div className="col-sm">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/203/300" height="200px"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Articales
