import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import DisplayCounter from "./component/DisplayCounter";
import Container from "./component/Container";
import Control from "./component/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./component/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Control />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
