import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/jj.jpg'
import styles from './third.module.css'

const Thirdquiz = () => {
  return (
    <div>
       <div>
        <div>
      <Link >
        <div className={styles.Bar}>

        
      <Card style={{ width: '32rem' ,}} className="text-center"  >
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        
        <Button  variant="primary" >Let's Start</Button>
      </Card.Body>
    </Card>
    </div>
      </Link> 
    </div>
    </div>
    </div>
  )
}

export default Thirdquiz
