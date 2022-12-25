import React from 'react'
import Sidebar from '../components/Sidebar'
import { BiArrowBack } from "react-icons/bi";
import Profile from '../components/Profile';
import Details from '../components/Details';
import { Link } from 'react-router-dom';

const BookAppoinment = () => {
  return (
    <div id='bookappointment'>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <div>
          <BiArrowBack size={30} />
          <h1>Book Appointment</h1>
        </div>
        <section>
          <Profile />
          <Details />
        </section>
        <footer>
          <p>Powered By RajYug IT Solution Pvt Ltd @2022</p>
        </footer>
      </main>
    </div>
  )
}

export default BookAppoinment