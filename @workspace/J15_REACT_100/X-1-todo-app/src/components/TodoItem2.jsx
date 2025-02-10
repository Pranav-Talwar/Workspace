function TodoItem2() {
    let TodoName = "Do grocery";
    let TodoDate = "6/11/24";


    return(
  <div class="row kg-row">
    <div class="col-5">{TodoName}</div>
    <div class="col-4">{TodoDate}</div>
    <div class="col-1">
      <button type="button" class="btn btn-danger kg-button">
        delete
      </button>
    </div>
  </div>);
}
export default TodoItem2;
