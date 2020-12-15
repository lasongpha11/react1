import React, { Component } from 'react';

class Search extends Component {
  hienThiNut = () => {
    if(this.props.hienthiForm ===  true) {
      return <div className= "btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()} >Đóng lại</div>;
    }else {
      return <div className= "btn btn-block btn-info" onClick = {() => this.props.ketNoi()}>Thêm mới</div>;
    }
  }
    render() {
        return (

<div className="col-12">
  <div className="form-group">
    <div className="btn-group">
      <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhap tu khoa" />
      <button className="btn-info"> Tìm</button>
      
    </div>
    <div className="btn-group1">
     
      {this.hienThiNut()}
    </div>
  </div>
  <hr/>
</div>

                  
        );
    }
}

export default Search;