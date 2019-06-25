import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import Search from './Search';
import AddUser from './AddUser';

class App extends Component {
  thongBao = ()=> {alert("Ket noi thanh cong");}
  render() {
    return (
      <div >
          <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search ketNoi={()=>this.thongBao()}/>
                <TableData/>
                <AddUser/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
