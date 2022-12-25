import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdOutlineArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import profile from '../assets/profile.png';

const data = [
  { name: "Anom", age: 19 },
  { name: "Megha", age: 19 },
  { name: "Subham", age: 25 },
  { name: "Subham", age: 25 },
  { name: "Subham", age: 25 },
  { name: "Subham", age: 25 },
  { name: "Subham", age: 25 },
  // { name: "Subham", age: 25 },
  // { name: "Subham", age: 25 },
  // { name: "Subham", age: 25 },
  // { name: "Subham", age: 25 },
  // { name: "Subham", age: 25 },

]

const Profile = () => {
  return (
    <div id='profile'>
      <div>
        <div>
          <BiSearch />
          <input type="text" placeholder='Serch by Name/ Mobile Number' />
        </div>
        <button>VIEW PROFILE</button>
      </div>

      <main>
        <div>
          <table>
            <thead>
              <td>Full Name</td>
              <td>Contact</td>
            </thead>
          </table>
        </div>
        <div>
          <table>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                </tr>
              )
            })}
          </table>
        </div>
        <div>
          <table>
            <tfoot>
              <td>1 row selected</td>
              <td><span>1-5 of 20</span> <MdOutlineArrowBackIos /> <MdArrowForwardIos /> </td>
            </tfoot>
          </table>
        </div>
      </main>

      <section>
        <h2>Profile Details</h2>
        <div>
          <div>
            <div>
              <img src={profile} alt=""  />
            </div>
            <p>Vinayak Dhaybar</p>
          </div>
          <div>
            <p>Location : Viman nagar</p>
            <p>Contact : 7823042946</p>
            <p>Email ID : vinayakdhaybar0910@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile