import React, { Component } from "react";
import { connect } from "react-redux";

class QLSV_Table extends Component {
  renderSinhVien = () => {
    return this.props.sinhVienArr.map((item, index) => {
      let { maSV, tenSV, email, soPhone } = item;
      return (
        <tr key={index}>
          <th scope="row">{maSV}</th>
          <td>{tenSV}</td>
          <td>{email}</td>
          <td>{soPhone}</td>
        </tr>
      );
    });
  };
  render() {
    // console.log(this.props);
    return (
      <table className="table table-striped ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
          </tr>
        </thead>
        <tbody>{this.renderSinhVien()}</tbody>
      </table>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    sinhVienArr: state.quanLySinhVienReducer.sinhVienArr,
  };
};

export default connect(mapStateToProps, null)(QLSV_Table);
