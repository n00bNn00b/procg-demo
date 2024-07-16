import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  user_id?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  job_title?: string;
}
const Home = () => {
  const [users, setUsers] = useState<Users[] | []>([]);

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
