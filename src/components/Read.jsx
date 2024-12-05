import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Read() {
  const [user, setUser] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const response = await axios.get(
      "https://67448156b4e2e04abea27aac.mockapi.io/user"
    );
    setUser(response.data);
  }

  async function deleteUser(id) {
    const response = await axios.delete(
      "https://67448156b4e2e04abea27aac.mockapi.io/user/" + id
    );
    getUserData();
  }

  function gotoUpdatePage(userid) {
    navigate('/update/'+userid)   // /update/20
  }

  

  // function welcome(username) {
  //   console.log("Hello " + username)
  // }

  // welcome("Raja")
  // welcome("Vikram")

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.city}</td>
                <td>
                  <button onClick={() => deleteUser(value.id)}>Delete</button>
                  <button onClick={ () => gotoUpdatePage(value.id) } >Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
