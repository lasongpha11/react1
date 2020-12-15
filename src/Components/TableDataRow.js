import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if(this.props.permission === 1) {
            return  "Admin";
        }else if (this.props.permission === 2) {
            return "Moderator";
        }else {
            return "Normal User";
        }
    }
    render() {
        return (
            <tr>
        <td>{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>
            {this.permissionShow()}
        </td>
        <td>
          <div className="btn-group">
            <button className="btn btn-primary sua">Sửa</button>
            <div className="btn btn-warning xoa">Xóa</div>
          </div>
        </td>
      </tr>
        );
    }
}

export default TableDataRow;