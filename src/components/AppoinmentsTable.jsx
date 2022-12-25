import axios from 'axios'
import React, { useEffect } from 'react'


const AppoinmentsTable = ({data}) => {

    return (
        <div id='appoinmentsTable'>
            <main>
                <p>From</p>
                <input type="date" />
                <p>To</p>
                <input type="date" />
                <button>VIEW</button>
            </main>
            <section>
                <div>
                    <table>
                        <thead>
                            <td>Full Name</td>
                            <td>Contact No</td>
                            <td>Appointment Reason</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Type</td>
                            <td>Channel</td>
                            <td>Action</td>
                        </thead>
                    </table>
                </div>


                <div>
                    <table>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>7823042946</td>
                                    <td>{val.reason}</td>
                                    <td>{val.date}</td>
                                    <td>{val.time}</td>
                                    <td>{val.type}</td>
                                    <td>{val.channel}</td>
                                    <td>EDIT</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </section>
        </div>
    )
}

export default AppoinmentsTable