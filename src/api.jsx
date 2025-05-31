import axios from "axios";
import { toast } from "react-toastify";
import "./style/index.css";
import imageCompression from "browser-image-compression";

export const api = axios.create({
  baseURL: "https://smekenshop-backend.vercel.app/",
});

api.interceptors.request.use((req) => {
  req.params = {
    server_id:
      "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
  };
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

export const signup = async (name, email, password, instance, whatsapp, asalSekolah, jurusan, file) => {
  console.log(name, email, password, instance, whatsapp);
  let loads = toast.loading("Mohon Tunggu Sebentar");

  const payload = {
    name,
    email,
    password,
    instance,
    whatsapp,
    asal_sekolah: asalSekolah,
    jurusan,
    server_id:
      "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
  };

  if (file && file.length > 0) {
    const compressed = await imageCompression(file[0], {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    })
      .then(function (compressedFile) {
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        );
        return compressedFile;
      })
      .catch(function (error) {
        toast.error(error.message);
      });

    payload.action = "update";
    payload.file = compressed;
  }

  api
    .post("auth/signup", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
  seller_id,
  stock
) => {
  console.log(file, name, description, category, price, seller_id, stock);
  toast.loading("Mohon tunggu sebentar");

  const compressedFiles = [];

  for (let i = 0; i < file.length; i++) {
    try {
      const compressed = await imageCompression(file[i], {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });
      console.log(
        `File ke-${i + 1} dikompres: ${compressed.size / 1024 / 1024} MB`
      );
      compressedFiles.push(compressed);
    } catch (error) {
      toast.error(`Gagal kompres file ke-${i + 1}: ${error.message}`);
      return;
    }
  }

  await api
    .post(
      "/product/upload",
      {
        file: compressedFiles,
        name: name,
        description: description,
        category: category,
        price: price,
        seller_id: seller_id,
        stock: stock,
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
      window.location = "/account";
    })
    .catch((err) => {
      console.log(err);
      toast.error("Ukuran file terlalu besar");
    });
};

export const getProducts = async (seller, product, status) => {
  let sellerInfo = await getSellerInfo(seller);
  let result = await api
    .post("/verify/product", {
      seller_id: seller,
      product_id: product,
      status: status,
    })
    .then((res) => {
      console.log([res.data.result, sellerInfo]);
      return [res.data.result, sellerInfo];
    })
    .catch((err) => [console.log(err)]);
  return result;
};

export const getProductsBrief = async (seller, product, status) => {
  let result = await api
    .post("/verify/product", {
      seller_id: seller,
      product_id: product,
      status: status,
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
    .post("/product/summary", {
      limit: 12,
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

export const search = async (query, category) => {
  let res = await api
    .post("/product/find", {
      query: query,
      category: category,
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
    .catch((err) => toast.error(err.response.data));
  return res;
};

export const aproveRejectPost = async (id, action, status, msg) => {
  console.log(status);
  toast.loading("Mohon Tunggu Sebentar");
  let res = await api
    .post("/product/review", {
      status: "pendings",
      product_id: id,
      action: action,
      message: msg,
    })
    .then((res) => {
      console.log(res.data.result);
      window.location = "/admin";
      return res.data.result;
    })
    .catch((err) => toast.error(err.response.data));
  return res;
};

export const dropPost = async (id, action, status, msg) => {
  console.log(status);
  toast.loading("Mohon Tunggu Sebentar");
  let res = await api
    .post("/product/review", {
      status: "approved",
      product_id: id,
      action: action,
      message: msg,
    })
    .then((res) => {
      console.log(res.data.result);
      window.location = "/admin";
      return res.data.result;
    })
    .catch((err) => toast.error(err.response.data));
  return res;
};

export const undropPost = async (id, action) => {
  toast.loading("Mohon Tunggu Sebentar");
  let res = await api
    .post("/product/review", {
      status: "dropped",
      product_id: id,
      action: action,
    })
    .then((res) => {
      console.log(res.data.result);
      window.location = "/admin";
      return res.data.result;
    })
    .catch((err) => toast.error(err.response.data));
  return res;
};

export const updateProduct = async (
  sellerid,
  productid,
  status,
  data,
  file
) => {
  console.log(sellerid, productid, status, data, file);
  toast.loading("Mohon Tunggu Sebentar");
  const payload = {
    seller_id: sellerid,
    product_id: productid,
    status: status,
    action: "update",
    data: data,
    file: file,
    server_id:
      "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
  };

  if (file && file.length > 0) {
    const compressedFiles = [];

    for (let i = 0; i < file.length; i++) {
      try {
        const compressed = await imageCompression(file[i], {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
        console.log(
          `File ke-${i + 1} dikompres: ${compressed.size / 1024 / 1024} MB`
        );
        compressedFiles.push(compressed);
      } catch (error) {
        toast.error(`Gagal kompres file ke-${i + 1}: ${error.message}`);
        return;
      }
    }
    payload.file = compressedFiles;
    payload.action = "update,add";
  }

  let res = await api
    .post("product/update", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data.result);
      window.location.reload();
    })
    .catch((err) => toast.error(err.response.data));
};

export const deleteProductImg = async (
  sellerid,
  productid,
  status,
  old_file_id
) => {
  console.log(sellerid, productid, status, old_file_id);
  toast.loading("Mohon Tunggu Sebentar");
  let res = await api
    .post(
      "product/update",
      {
        seller_id: sellerid,
        product_id: productid,
        status: status,
        action: "remove",
        old_file_id: old_file_id,
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
      console.log(res.data.result);
      window.location.reload();
    })
    .catch((err) => toast.error(err.response.data));
};

export const removeProduct = async (sellerid, id, status) => {
  console.log(sellerid, id, status);
  toast.loading("Mohon Tunggu Sebentar");
  let res = await api
    .post("product/remove", {
      seller_id: sellerid,
      product_id: id,
      status: status,
    })
    .then((res) => console.log(res.data.result))
    .catch((err) => console.log(err.data.result));
};

export const updateProfile = async (accId, data, file) => {
  console.log(accId, data, file);
  toast.loading("Mohon Tunggu Sebentar");
  const payload = {
    id: accId,
    data: data,
    server_id:
      "qgivsx4lrp0b9zwo61umd2yf7kjn3atec8h5nlcsxhid2p81zoubwryt3v4amqe7g0956fjk",
  };

  if (file && file.length > 0) {
    const compressed = await imageCompression(file[0], {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    })
      .then(function (compressedFile) {
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        );
        return compressedFile;
      })
      .catch(function (error) {
        toast.error(error.message);
      });

    payload.action = "update";
    payload.file = compressed;
  }

  api
    .post("account/update", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data.result);
      window.location = "/account";
    })
    .catch((err) => toast.error("Ukuran foto terlalu besar"));
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
      window.location = '/login'
      console.log(err);
    });
  return info;
};

export const getUserList = async (role) => {
  const info = await api
    .post("/account/list", {
      role
    })
    .then((res) => {
      return res.data.result;
    })
    .catch((err) => {
      console.log(err);
    })
  return info;
}

export const banUser = async (id, role, message = '-') => {
  toast.loading('Mohon tunggu sebentar...')
  await api.post('/account/role', {
    id,
    role,
    message
  })
  .then((res) => {
    window.location = '/admin/review-account'
  })
  .catch((err) => {
    console.log(err);
  })
}

// Cart System
const initCart = () => {
  const carts = localStorage.getItem("cart");
  if (carts === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
};
const initLike = () => {
  const likes = localStorage.getItem("like");
  if (likes === null) {
    localStorage.setItem("like", JSON.stringify([]));
  }
};

initCart();
initLike();

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
