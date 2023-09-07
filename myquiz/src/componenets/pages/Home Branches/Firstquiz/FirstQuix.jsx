import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Homebar.module.css'
import logo from '../images/hhhhh.jpg'

const FirstQuix = () => {
  return (
    <div>
      <Link >
        <div className={styles.Bar}>

        
      <Card style={{ width: '32rem' ,}} className="text-center"  >
      <Card.Img variant="top" src={logo} />
      <Card.Body>
      <Card.Text>
          hi jamshed
          </Card.Text>
        <Button className={styles.butt}  >Let's Start</Button>
      </Card.Body>
    </Card>
    </div>
      </Link> 
    </div>
  )
}

export default FirstQuix
