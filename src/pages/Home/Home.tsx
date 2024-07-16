import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/def-persons");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
    console.log("users", users);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <ul></ul>
    </div>
  );
};

export default Home;
