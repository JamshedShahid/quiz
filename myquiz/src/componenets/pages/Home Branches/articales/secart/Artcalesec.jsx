import React from 'react'

import styles from './Artsec.module.css'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Articalesec= () => {
  return (
    <div className={styles.bar}>   
       <div className="">
      <div className="container text-center pt-2 ">
        <div className="row">
          <div className="col-sm">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/200/300" height="200px"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               <Link><Button variant="primary">Go somewhere</Button></Link> 
              </Card.Body>
            </Card>
          </div>
          
          
          
          
        </div>
      </div>
    </div>

    <div className={styles.fas}>
      <div className="container text-center pt-2 ">
        <div className="row">
          <div className="col-sm">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/201/300" height="200px"/>
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

export default Articalesec
