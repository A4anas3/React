function TodoItem({todoname,todoDate}){
  
  return(
     
       <div className="container">
  <div className="row kg-row">
    <div className="col-4">{todoname}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-sm-2"><button type="button" class="btn btn-danger kg-Button">Delete</button></div>
  </div>
  </div>
  );}
export default TodoItem; 

 