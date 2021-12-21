import axios from "axios";

axios.interceptors.request.use(function (config) {
  if (config.url.includes("cart")) {
    config.headers.token = localStorage.getItem("id");
  }

  if (config.url.includes("wish")) {
    config.headers.token = localStorage.getItem("id");
  }

  if (config.url.includes("edit_user")) {
    config.headers.token = localStorage.getItem("id");
  }

  if (config.url.includes("remove_")) {
    config.headers.token = localStorage.getItem("id");
  }

  console.log(config);
  return config;
});

axios.interceptors.response.use(function (response) {
  console.log(response);
  return response;
});
