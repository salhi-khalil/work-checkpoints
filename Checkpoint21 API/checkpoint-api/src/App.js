import "./App.css";
import UserList from "./Components/UserList";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
//With axios
  const [data, setData] = useState([]);// where to store the returned data
  const [error, setError] = useState(null);// where to store the coming errors
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          console.log("response",response)
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setError(error);
        })
  }, []);
  {/*
  //First try with fetch 
  useEffect(() => {
    function fetchData() {// the function to fetch data from the api
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => setError(err));
    }
 
    fetchData();
  }, []);
   */}

  return (
    <div className="App">
      <h1>Checkpoint API</h1>
      <hr/>
      {console.log("data",data)}
      {<UserList user={data}/>}
      
    </div>
  );
}

export default App;
