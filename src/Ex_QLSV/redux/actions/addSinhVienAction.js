import { ADD_SINH_VIEN } from "../constants/addSinhVienConstant";

export let addSinhVienAction = (sinhVien) => {
  return { type: ADD_SINH_VIEN, sinhVien: sinhVien };
};
