class TodoList extends React.Component {
  constructor(){
    super();
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.state = {
      taskName: ''
    };
    this.state.items = [];
  }
  updateInputValue(evt) {
    this.setState({
      taskName: evt.target.value
    });
  }
  addTask()  {
    this.state.items.push(this.state.taskName);
    this.setState({
      taskName: ''
    });
  }
  removeTask = (e) => {
    var currentList = this.state.items;
    var index = currentList.indexOf(e.target.innerHTML);
    if (index > -1) {
      currentList.splice(index, 1);
    }
    this.setState({
      items : currentList
    });
  }
  render() {
    return (
      <div id='container'>
        <h3>{this.props.message}!</h3>
            <input className='form-control' value={ this.state.taskName } onChange={evt => this.updateInputValue(evt)}/>
            <button type='button' className='btn btn-success' onClick={ this.addTask }>Add task!</button>
        <ul id='todo_list'>
          {this.state.items.map(taskName => (
            <li onClick={ this.removeTask }>
              {taskName}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(
<TodoList message='To-do List in ReactJS' />,
  document.getElementById("root")
);
