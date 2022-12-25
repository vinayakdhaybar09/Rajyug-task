import React, { useEffect, useState } from 'react'
import Slots from '../components/Slots'
import { BiArrowBack } from "react-icons/bi";
import AppoinmentsTable from '../components/AppoinmentsTable';
import { Link } from 'react-router-dom';
import data1 from "../assets/slotsData1.json";
import data2 from "../assets/slotsData2.json";
import axios from 'axios';
import appointmentData from "../assets/apointments.json";

const url = 'https://jsonplaceholder.typicode.com/posts'

const Appoinments = () => {

  const [appoinmentData, setAppoinmentData] = useState('')

  useEffect(() => {
    const appoinment = () => {
      axios.get(url)
        .then(res => {
          setAppoinmentData(res.data)
          // console.log(res.data);
        })
        .catch(err => { console.log(err.message); })
    }
    appoinment()

  }, [])


  return (
    <div id='appointments'>
      <div>
        <Link to={'/'}><BiArrowBack size={20} color={'#2C7FB2'} /></Link>
        <h1>APPOINTMENT</h1>
      </div>
      <main>
        <Slots data={data1} timeSlot={appointmentData} />
        <Slots data={data2} timeSlot={appointmentData}  />
        <section>
          <AppoinmentsTable data={appointmentData} />
        </section>
      </main>
    </div>
  )
}

export default Appoinments