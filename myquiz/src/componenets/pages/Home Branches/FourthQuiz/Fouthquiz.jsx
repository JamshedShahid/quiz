import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './fourth.module.css'
import logo from '../images/jjj.jpg'

const Fouthquiz = () => {
  return (
    <div>
      <div>
        <div>
      <Link >
        <div className={styles.Bar}>

        
      <Card style={{ width: '32rem' ,}} className="text-center"  >
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        
        <Button className={styles.butt} variant="primary" >Let's Start</Button>
      </Card.Body>
    </Card>
    </div>
      </Link> 
    </div>
    </div>
    </div>
  )
}

export default Fouthquiz
