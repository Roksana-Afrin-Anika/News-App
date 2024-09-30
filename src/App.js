import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <CustomNavbar setCategory={setCategory} />
      <NewsBoard categor={category} />
    </>
  );
};

export default App;
