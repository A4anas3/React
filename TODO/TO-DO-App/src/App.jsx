import AppName from "./component/AppName"
import AddToDO from "./component/AddToDO"
function App() {
  return (
     <center className="TODO-Container">
     <AppName />
     <AddToDO />
      <AddToDO />
       <div class="container text-center">
       <div class ="row">
     <div class="col-4">Buy Milk</div>
     <div class="col-4">4/10/2023</div>
  </div>
  <div className="row">
    <div class="col-4">Buy Bread</div>
    <div class="col-4">4/10/2055</div>
    <div class="col-sm-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
   <div className="row">
    <div class="col-4">Go To college</div>
    <div class="col-4">4/10/2055</div>
    <div class="col-sm-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
    
  
  
</div>
     </center>
);
}

export default App
