function TodoItem(){
   let todoname="buy Milk";
        let date="4/10/2023";
  return(
     
       <div class="container">
  <div className="row kg-row">
    <div class="col-4">{todoname}</div>
    <div class="col-4">{date}</div>
    <div class="col-sm-2"><button type="button" class="btn btn-danger kg-Button">Delete</button></div>
  </div>
  </div>
  );}
export default TodoItem; 

 