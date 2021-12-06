import axios from "axios";

export const registration = async (obj) => {
  let response = await axios.post(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/registration",
    obj
  );
  return response;
};

export const login = async (obj) => {
  let response = await axios.post(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/login",
    obj
  );
  return response;
};
