import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Card from "@material-ui/core/Card";
import Tabletop from 'tabletop';

class ReactTableTop extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: "1NhrBwcIvMOm8iMzGLJAq_orrfTk6tEagfus7l2xRlZM",
      callback: googleData => {
        //console.log('google sheet data --->', googleData)
        this.setState({ data : googleData})
        //console.log(this.state.data)
      },
      simpleSheet: true
    })
  }

  createTable = () => {
    var sheet = this.state.data;
    console.log('logging sheet');
    console.log(sheet)

    let table = [];
    table.push(<tr> 
      <th>Start Time</th>
      <th>End Time</th>
      <th>Event Name</th>
      <th>Event Location</th>
    </tr>)
    for(let i=0;i<sheet.length;i++){
      table.push(<tr> 
        <td>{sheet[i]['Start Time']}</td>
        <td>{sheet[i]['End Time']}</td>
        <td>{sheet[i]['Event Name']}</td>
        <td>{sheet[i]['Event Location']}</td>
      </tr>)
  
      
    }
    return table;
}

  render() {
    return (
      <div className="App">
        <table style={{border: '1px solid black'}}>
        {this.createTable()}
        </table>
      </div>
    );
  }
}

export default ReactTableTop;