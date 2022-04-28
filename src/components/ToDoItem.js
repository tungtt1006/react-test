export default function ToDoItem(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-11">
                <button type="button" className="list-group-item list-group-item-action" aria-current="true">
                    {props.item.content}
                </button>
            </div>
            <div className="col-1 p-0">
                <button type="button" className="btn btn-danger" aria-current="true" onClick={() => props.onDeleteItem(props.item.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}
