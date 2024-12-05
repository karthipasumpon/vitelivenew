
import React,  {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  async function sendData() {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://67448156b4e2e04abea27aac.mockapi.io/user",
        {
          username,
          email,
          phone,
          city
        }
      );
       
      
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Create User</h1>
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="user"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div>
          <label>City</label>
          <input
            type="text"
            name="phone"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
 

        <button type="button" onClick={() => sendData()}>
          Send Data
        </button>

        {loading && <p>Data sending Please wait...</p>}
      </form>
      
    </>
  );
}

export default Create;
