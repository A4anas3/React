function TodoItem({ todoname, todoDate, DeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger kg-Button"
            onClick={() => DeleteClick(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
