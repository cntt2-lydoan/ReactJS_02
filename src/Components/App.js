import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import Search from './Search';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data:DataUser
    }
  }
  getTextSearch = (dl) =>{
    console.log('Du lieu bo nhan duoc la : '+dl);
  }

  doiTrangThai = ()=>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    }
    );
  }
  
  thongBao = ()=> {alert("Ket noi thanh cong");}
  render() {
    console.log(this.state.data);
    return (

      <div >
          <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search 
                 checkConnectProps={(dl)=>this.getTextSearch(dl)}
                 ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
                <TableData dataUserProps={this.state.data}/>
                <AddUser hienThiForm={this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
