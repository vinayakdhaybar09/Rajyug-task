import React from 'react'

const Slots = ({ data, timeSlot }) => {
    return (
        <div id='slots'>
            <h3>Morning Slots</h3>
            <div>
                {
                    data.map((items, index) => {
                        return (
                            <main key={index}>
                                <p>{items.pationts}</p>
                                <button>{items.time}</button>
                            </main>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Slots