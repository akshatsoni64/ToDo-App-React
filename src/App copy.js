import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  delItem(id){
    const list = [...this.state];
    const updatelist = list.filter(item => item.id !== id);
    this.setState({ list: updatelist });
  }

  updtItem(input){
    this.setState({ newItem: input });
  }

  render(){
    return(
      <div className="App">
        <img src={logo} alt="Logo" className="App-logo" />
        <center>
          <input type="text" placeholder="Enter Task" name="TaskName" value={this.state.newItem} onChange={e => this.updtItem(e.target.value)} required />
          <button type="button" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add</button>
          <table border="1">
            <tr>
              <td>Done</td>
              <td>Name</td>
              <td>Action</td>
            </tr>
            <div className="list">
            {this.state.list.map(item => {
              return(
                {item}
              );
            })}
            </div>
          </table>
        </center>
      </div>
    );
  }
}

export default App;
