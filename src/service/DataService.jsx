import axios from "axios";

let configObjGetBook = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: localStorage.getItem("token"),
  },
};

export const book = async () => {
  let response = await axios.get(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book",
    configObjGetBook
  );
  return response;
};
