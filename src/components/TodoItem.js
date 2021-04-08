
function TodoItem( {item, onCheck}  ) {
  const Event = () => {
    onCheck(item);
  }
  return (
    <label className="panel-block">
            <input type="checkbox" checked = {item.done} onChange={Event}/>
            <span className = {item.done ? 'has-text-grey-light' : ""}>
                  {item.text}
            </span>
    </label>
  );
}

export default TodoItem;