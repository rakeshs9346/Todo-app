function TodoItem2(){

    let itemName="Go To College";
    let todoDate="4/11/2024";
    return (
        <div>
        <div class="container">
        <div class="row">
          <div class="col-6">{itemName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
        </div>
        </div>
    )
}

export default TodoItem2;