import React, { Component } from "react";
import { connect } from "react-redux";
import { addSinhVienAction } from "./redux/actions/addSinhVienAction";
import { regex_email, regex_PhoneNumber } from "./validation/patternConstants";

class QLSV_Form extends Component {
  state = {
    value: {
      maSV: "",
      tenSV: "",
      email: "",
      soPhone: "",
    },
    error: {
      maSV: "",
      tenSV: "",
      email: "",
      soPhone: "",
    },
  };

  getKeyByValue(object, value) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  handleRequire = (e) => {
    let inputTag = e.target;
    let { name, value, type, pattern } = inputTag;

    let errorMes = "không được bỏ trống";

    let values = { ...this.state.value, [name]: value };
    let errors = { ...this.state.error, [name]: errorMes };

    this.setState({ value: values, error: errors });

    // this.setState({ value: values, error: errors }, () => {
    //   console.log(this.state);
    // });
  };
  handleChangeInput = (e) => {
    let inputTag = e.target;
    let { name, value, type, pattern } = inputTag;
    let errorMes = "";

    let nameMes = "";
    switch (name) {
      case "maSV": {
        nameMes = "Mã sinh viên";
        break;
      }
      case "tenSV": {
        nameMes = "Tên sinh viên";
        break;
      }
      case "email": {
        nameMes = "Email";
        break;
      }
      case "soPhone": {
        nameMes = "Số điện thoại";
        break;
      }
    }

    // kiểm tra định dạng
    if (type == "email" || type == "tel") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMes = nameMes + " định dạng không đúng";
      }
    }

    let values = { ...this.state.value, [name]: value };
    let errors = { ...this.state.error, [name]: errorMes };

    this.setState({ value: values, error: errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let isValidate = false;

    // this.state.error.map((item) => console.log(item));
    let arrayValue = Object.values(this.state.value);
    let indexValue = arrayValue.indexOf("");

    let arrayError = Object.values(this.state.error);
    let indexError = arrayError.indexOf("");

    if (indexValue == -1 && indexError == -1) {
      isValidate = true;
    }

    if (isValidate) {
      this.props.handleAddSV(this.state.value);
    } else {
      // console.log(this.state);
      // console.log("indexValue: ", indexValue);
      // console.log("indexError: ", indexError);

      let nameError;
      indexValue != -1
        ? (nameError = this.getKeyByValue(this.state.value, ""))
        : (nameError = this.getKeyByValue(this.state.error, ""));

      let nameMes = "";
      switch (nameError) {
        case "maSV": {
          nameMes = "Mã sinh viên";
          break;
        }
        case "tenSV": {
          nameMes = "Tên sinh viên";
          break;
        }
        case "email": {
          nameMes = "Email";
          break;
        }
        case "soPhone": {
          nameMes = "Số điện thoại";
          break;
        }
      }

      let errorMes = "Kiểm tra " + nameMes;
      alert(errorMes);
    }
  };

  render() {
    return (
      <div className="card text-left mb-2">
        <div className="card-header bg-dark text-light ">
          <h5 className="mb-0">Thông tin sinh viên</h5>
        </div>
        <div className="card-body text-left">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-6">
                <span>Mã Sinh viên</span>
                <input
                  type="text"
                  className="form-control"
                  name="maSV"
                  onChange={this.handleChangeInput}
                  onClick={this.handleRequire}
                />
                <p className="text-danger">{this.state.error.maSV}</p>
              </div>

              <div className="form-group col-6">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  pattern={regex_email}
                  onChange={this.handleChangeInput}
                  onClick={this.handleRequire}
                />
                <p className="text-danger">{this.state.error.email}</p>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-6">
                <span>Tên sinh viên</span>
                <input
                  type="text"
                  className="form-control"
                  name="tenSV"
                  onChange={this.handleChangeInput}
                  onClick={this.handleRequire}
                />
                <p className="text-danger">{this.state.error.tenSV}</p>
              </div>

              <div className="form-group col-6">
                <span>Số điện thoại</span>
                <input
                  type="tel"
                  className="form-control"
                  name="soPhone"
                  pattern={regex_PhoneNumber}
                  onChange={this.handleChangeInput}
                  onClick={this.handleRequire}
                />
                <p className="text-danger">{this.state.error.soPhone}</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Thêm sinh viên
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddSV: (sinhVien) => {
      dispatch(addSinhVienAction(sinhVien));
    },
  };
};
export default connect(null, mapDispatchToProps)(QLSV_Form);
