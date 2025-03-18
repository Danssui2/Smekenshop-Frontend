import axios from "axios";
import { toast } from "react-toastify";
import "./style/index.css";

export const api = axios.create({
  baseURL: "https://smekenshop-backend.vercel.app/",
});

api.interceptors.request.use((req) => {
  req.params = {
    server_id:
      "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
  };
  if (localStorage.getItem("userToken")) {
    //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`
    //req.headers.refresh = `Bearer ${JSON.parse(localStorage.getItem('refreshToken'))}`
  }
  return req;
});

export const signin = async (email, password) => {
  console.log(email, password);
  let loads = toast.loading("Mohon Tunggu Sebentar");

  await api
    .post("/auth/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      toast.update(loads, {
        render: "Berhasil Masuk",
        type: "success",
        isLoading: false,
        autoClose: 8000,
      });
      localStorage.setItem(
        "userToken",
        JSON.stringify(res?.data?.result?.access_token)
      );
      window.location = "/account";
    })
    .catch((err) => {
      console.log(err);
      let errMsg = err?.response?.data?.message;
      toast.update(loads, {
        render: errMsg,
        type: "error",
        isLoading: false,
        autoClose: 8000,
      });
    });
};

export const signup = async (name, email, password, instance, whatsapp) => {
  console.log(name, email, password, instance, whatsapp);
  let loads = toast.loading("Mohon Tunggu Sebentar");

  await api
    .post("/auth/signup", {
      email: email,
      password: password,
      name: name,
      instance: instance,
      whatsapp: whatsapp,
    })
    .then((res) => {
      console.log(res.data);
      toast.update(loads, {
        render: "Berhasil Membuat Akun",
        type: "success",
        isLoading: false,
        autoClose: 8000,
      });
      localStorage.setItem(
        "userToken",
        JSON.stringify(res?.data?.result?.access_token)
      );
      window.location = "/account";
    })
    .catch((err) => {
      console.log(err);
      let errMsg = err?.response?.data?.message;
      toast.update(loads, {
        render: errMsg,
        type: "error",
        isLoading: false,
        autoClose: 8000,
      });
    });
};

export const getUserInfo = async (token) => {
  const info = await api
    .post("/verify/token", {
      access_token: token,
    })
    .then((res) => {
      localStorage.setItem("seller_id", res.data.result.id);
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  return info;
};

export const getSellerInfo = async (acc) => {
  const info = await api
    .post("/verify/account", {
      account_id: acc,
    })
    .then((res) => {
      console.log(res);
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  return info;
};

export const uploadProduct = async (
  file,
  name,
  description,
  category,
  price,
  seller_id
) => {
  console.log(file, name, description, category, price, seller_id);

  await api
    .post(
      "/product/upload",
      {
        file: file,
        name: name,
        description: description,
        category: category,
        price: price,
        seller_id: seller_id,
        server_id:
          "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProducts = async (seller, product) => {
  let sellerInfo = await getSellerInfo(seller);
  let result = await api
    .post("/verify/product", {
      seller_id: seller,
      product_id: product,
      status: "approved",
    })
    .then((res) => {
      console.log([res.data.result, sellerInfo]);
      return [res.data.result, sellerInfo];
    })
    .catch((err) => [console.log(err)]);
  return result;
};

export const getProductsBrief = async (seller, product) => {
  let result = await api
    .post("/verify/product", {
      seller_id: seller,
      product_id: product,
    })
    .then((res) => {
      console.log(res.data.result);
      return res.data.result;
    })
    .catch((err) => [console.log(err)]);
  return result;
};

export const getHighlight = async () => {
  let res = await api
    .post("/product/summary")
    .then((res) => {
      console.log(res.data.result);
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

export const search = async (query) => {
  let res = await api
    .post("/product/find", {
      query: query,
    })
    .then((res) => {
      console.log(res.data.result);
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

export const getRejectPendingPosts = async (status) => {
  let res = await api
    .post("/product/list", { status: status })
    .then((res) => {
      console.log(res.data.result);
      return res.data.result;
    })
    .catch((err) => console.log(err.response.data));
  return res;
};

export const aproveRejectPost = async (id, action, status, msg) => {
  console.log(status)
  let res = await api
    .post("/product/review", { status: "pendings", product_id: id, action: action, message: msg })
    .then((res) => {
      console.log(res.data.result);
      window.location = "/administration"
      return res.data.result;
    })
    .catch((err) => console.log(err.response.data));
  return res;
};

// Cart System
const initCart = () => {
  const carts = localStorage.getItem("cart");
  if (carts === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
};

initCart();

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
