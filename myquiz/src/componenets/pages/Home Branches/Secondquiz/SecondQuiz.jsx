import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SEcond.module.css'
import { Button, Card } from 'react-bootstrap'
import logo from '../images/j.jpg'

const SecondQuiz = () => {
  return (
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
  )
}

export default SecondQuiz
