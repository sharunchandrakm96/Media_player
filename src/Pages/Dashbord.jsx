import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'



function Dashboard() {
  const [addStatus,setAddStatus]=useState({})
  return (
    <>
      <div>
        <h3>Dashboard</h3>
        <Link to={'/his'}>Watch History</Link>
        <Row className='p-5'>
          <Col sm='1' md='2'>
            <Addvideos setAddStatus={setAddStatus} />
          </Col>
          <Col sm='4' md='6'>
            <Videos addStatus={addStatus}/>
          </Col>
          <Col sm='2' md='4'>
            <Categories />
          </Col>
        </Row>
        <ToastContainer/>
      </div>
    </>
  )
}

export default Dashboard