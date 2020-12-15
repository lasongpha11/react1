import React, { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      hienthiForm: false,
      data: DataUser
    }
  }
  //thongBao = () => {alert("Ket noi thanh cong");}

  doiTrangThai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }

  render() {

    return (
      <div>
        <Header/>
        <div className ="searchForm">
          <div className= "container">
            <div className = "row">
              <Search ketNoi = {() => this.doiTrangThai()}  hienthiForm= {this.state.hienthiForm} />
              <TableData dataUserProps = {this.state.data} />
              <AddUser hienthiForm= {this.state.hienthiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
