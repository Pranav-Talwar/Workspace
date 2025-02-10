function TodoItem1() {
    let TodoName = "buy milk";
    let TodoDate = "4/12/24";


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
export default TodoItem1;
