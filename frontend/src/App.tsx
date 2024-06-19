import Router from "./components/router/router";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

  useEffect(() => {
    getApi();
  }, []);


  return (
    <>
      <Router />
    </>
  );
}

export default App;
