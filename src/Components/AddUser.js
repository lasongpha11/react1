import React, { Component } from 'react';

class AddUser extends Component {

  kiemtraTrangThai = () => {
    if(this.props.hienthiForm === true) {
      return (
        <div className ="col">
              <div className="card border-primary mb-3 mt-2" />
    <div className="card-header">Thêm mới user vào hệ thống</div>
    <div className="card-body text-primary">
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="Ten user" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="Dien thoai" />
      </div>
      <div className="form-group">
        <select required className="custom-select" name id>
          <option selected>Chọn quyền mặc định</option>
          <option value>Admin</option>
          <option value>Modrator</option>
          <option value>Normal</option>
        </select>
      </div>
      <div className="form-group">
        <div className="btn btn-block btn-primary">Them moi</div>
      </div>
    </div>
        </div>
      )
    }
  }
    

    render() {
      console.log(this.props.hienthiForm);
        return (
            <div className="col-3">
  <div className="card">
     
  {
    this.kiemtraTrangThai()
  }
     



  </div>
</div>

        );
    }
}

export default AddUser;