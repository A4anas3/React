import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import DisplayCounter from "./component/DisplayCounter";
import Container from "./component/Container";
import Control from "./component/Controls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Control />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
