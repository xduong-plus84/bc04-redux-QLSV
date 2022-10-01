//rxr

import { ADD_SINH_VIEN } from "../constants/addSinhVienConstant";

let initialState = {
  sinhVienArr: [
    {
      maSV: 1,
      tenSV: "Nguyễn Xuân Dương",
      email: "nguyenxuanduongxd2k@gmail.com",
      soPhone: "0385688579",
    },
    {
      maSV: 2,
      tenSV: "Dương David",
      email: "duongcute@gamil.com",
      soPhone: "0385074546",
    },
  ],
};

export let quanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SINH_VIEN: {
      // let { ma, ten, email, soPhone } = action.sinhVien;
      // console.log(action);
      let sinhVienArrClone = [...state.sinhVienArr, action.sinhVien];
      state.sinhVienArr = sinhVienArrClone;
      return { ...state };
    }

    default: {
      return { ...state };
      // do lần đầu load trang không có return thì sẽ báo lỗi
    }
  }
};
