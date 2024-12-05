import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    updateUserDatabyId();
  }, []);

  const navigate = useNavigate();

  const result = useParams();
  // console.log(result.id)

  async function updateUserDatabyId() {
    const response = await axios.get(
      "https://67448156b4e2e04abea27aac.mockapi.io/user/" + result.id
    );
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setCity(response.data.city);
  }

  async function updateUser() {
    await axios.put(
      "https://67448156b4e2e04abea27aac.mockapi.io/user/" + result.id,
      {
        username: username,
        email: email,
        phone: phone,
        city: city,
      }
    );

    navigate("/read");
  }

  return (
    <div>
      <h1>Update</h1>
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="user"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <button type="button" onClick={() => updateUser()}>
          Update Data
        </button>
      </form>
    </div>
  );
}

export default Update;
