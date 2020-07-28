import React from "react";
import logo from './logo.svg';
import "./App.css";
import { Button, Table } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };

    this.onCheckedChange = this.onCheckedChange.bind(this);
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone:false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  onCheckedChange(e){
    const list = [...this.state.list];
    list.map(item => {
      if(item.value === e.target.name){
        item.isDone = e.target.checked
      }
      return item.isDone
    })
    this.setState({
      [e.target.name]: e.target.checked
    })
    console.log(list.filter(item => item.value === e.target.name));
  }

  render() {
    return(
      <div className="App">
        <img src={logo} alt="Logo" className="App-logo" />
        <h1>My To Do App</h1>
        <br />
        <div className="divL">
          <b>Add an Item....</b><br/><br/>
          <Table borderless>
            <tr>
              <td>
                <input type="text" className="input-text" placeholder="Enter Task" required value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}/>
              </td>
              <td>
                <Button variant="info" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add</Button>
              </td>
              </tr>
          </Table>
        </div>
        <div className="divR">
          <div className="list">
            <center>
              <Table striped borderless width="1000" variant="dark">
                <thead>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {this.state.list.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <input type="checkbox" name={item.value} checked={item.isDone} value={item.id} onChange={this.onCheckedChange} />
                        </td>
                        <td>{item.value}</td>
                        <td>
                          <Button variant="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>             
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
