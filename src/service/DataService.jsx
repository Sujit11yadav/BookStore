import axios from "axios";

let configObjGetBook = {
  headers: {
    "x-access-token": localStorage.getItem("id"),
  },
};

export const book = async () => {
  let response = await axios.get(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book",
    configObjGetBook
  );
  return response;
};

export const addCartItems = async (obj) => {
  console.log(obj);
  let response = await axios.post(
    `https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/${obj}`,
    obj,
    configObjGetBook
  );
  return response;
};

export const getCartItems = async () => {
  let response = await axios.get(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items",
    configObjGetBook
  );
  return response;
};

export const cartItemQuantity = async (data) => {
  console.log(data);
  let response = await axios.put(
    "https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/60a8aab496edee0015d919dc",
    data,
    configObjGetBook
  );
  return response;
};
