import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState({
    name: "",
    email: "",
  });
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);
  if (Loading) {
    return "loading...";
  }
  return (
  <>
  {Data.name} <br></br>
  {Data.email}

  </>)
}

export default App;
