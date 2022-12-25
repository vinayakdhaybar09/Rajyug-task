import React, { useState } from 'react'
import Switch from "@mui/material/Switch";
import axios from 'axios';


const Details = () => {

  const [checked, setChecked] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts"

  const [userData, setUserData] = useState({
    name: "Vinayak Dhaybar",
    userid: "PID-836241565",
    doctorName: "",
    channel: "",
    title: "",
    type: "",
    time: "",
    date: "",
    bp: "",
    temp: "",
    height: "",
    weight: "",
    spo2: "",
    pilserate: "",
    reason: "",
    note: "",
    walkin: ""
  })

  const handle = (e) => {
    const newUserData = { ...userData }
    newUserData[e.target.id] = e.target.value
    setUserData(newUserData)
    // console.log(newUserData);
  }

  const submitHandle = (e) => {
    e.preventDefault()
    axios.post(url, {
      name: userData.name,
      userid: userData.userid,
      doctorName: userData.doctorName,
      channel: userData.channel,
      title: userData.title,
      type: userData.type,
      time: userData.time,
      date: userData.date,
      bp: userData.bp,
      temp: userData.temp,
      height: userData.height,
      weight: userData.weight,
      spo2: userData.spo2,
      pilserate: userData.pilserate,
      reason: userData.reason,
      note: userData.note,
      walkin: userData.walkin
    }).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err.message);
    })


  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div id='details'>
      <div>
        <main>
          <h3>Details</h3>
          <select name="doctorname" id="doctorName" onChange={e => handle(e)} value={userData.doctorName}>
            <option value="">Select Doctor</option>
            <option value="dct1">Jay Jadhav</option>
            <option value="dct2">Rajiv Chowdhary</option>
            <option value="dct3">Sayali More</option>
            <option value="dct4">Vinay Dhaybar</option>
          </select>

          <select name="channel" id="channel" onChange={e => handle(e)} value={userData.channel}>
            <option value="">Select Appointment Channel</option>
            <option value="ch1">Walk In</option>
            <option value="ch2">By App</option>
            <option value="ch3">By Phone Call</option>
            <option value="ch4">By Email</option>
          </select>

          <input placeholder='Appointment Title' id='title' onChange={e => handle(e)} value={userData.title} />
        </main>
        <aside>
          <h3>Appointment Details</h3>
          <div>
            <p>Vinayak Dhaybar</p>
            <p>PID-836241565</p>
          </div>
          <div>
            <p>Walk-in Appointment</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />

          </div>
          <div>
            <input type={'time'} id='time' onChange={e => handle(e)} value={userData.time} />
            <input type={'date'} id='date' onChange={e => handle(e)} value={userData.date} />
          </div>

          <select name="channel" id="type" onChange={e => handle(e)} value={userData.type}>
            <option value="">Select Appointment Type</option>
            <option value="ch1">offline</option>
            <option value="ch2">online</option>
          </select>
        </aside>
      </div>

      <section>
        <div>
          <h3>Appointment Details</h3>
          <div>
            <input placeholder='BP' id='bp' type={'number'} onChange={e => handle(e)} value={userData.bp} />
            <input placeholder='Temp' id='temp' type={'number'} onChange={e => handle(e)} value={userData.temp} />
            <input placeholder='Height' id='height' type={'number'} onChange={e => handle(e)} value={userData.height} />
            <input placeholder='Weight' id='weight' type={'number'} onChange={e => handle(e)} value={userData.weight} />
            <input placeholder='SPO2' id='spo2' type={'number'} onChange={e => handle(e)} value={userData.spo2} />
            <input placeholder='Pilse Rate' id='pilserate' type={'number'} onChange={e => handle(e)} value={userData.pilserate} />
          </div>
          <div>
            <input placeholder='Reason' id='reason' type={'text'} onChange={e => handle(e)} value={userData.reason} />
            <select name="channel" id="note" onChange={e => handle(e)} value={userData.note}>
              <option value="">Note For Doctor</option>
              <option value="ch1">Face Problem</option>
              <option value="ch2">Joint Pain</option>
            </select>
          </div>
        </div>
      </section>

      <footer>
        <button>RESET</button>
        <button onClick={e => submitHandle(e)}>SUBMIT</button>
      </footer>
    </div>
  )
}

export default Details