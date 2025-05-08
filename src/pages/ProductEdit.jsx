import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaRegTrashCan } from "react-icons/fa6";

import Navbar from "../Components/Navbar";
import CurrencyInput from "react-currency-input-field";

import Loader from "../Components/Loader.jsx";
import "react-dropdown/style.css";

import { deleteProductImg, getProductsBrief } from "../api";
import { useParams } from "react-router";

import { updateProduct } from "../api";

function ProductEdit() {
  const [data, setdata] = useState();
  const [value, setvalue] = useState([]);
  const [files, setFiles] = useState([]);
  const [name, setname] = useState(data?.name);
  const [description, setdescription] = useState(data?.description);
  const [category, setcategory] = useState(data?.category);
  const [price, setprice] = useState(data?.price);

  const id = useParams().id;
  const seller = useParams().seller;
  const status = useParams().status;

  const fetchData = async () => {
    if (status == "pending") {
      const datas = await getProductsBrief(seller, id, "pendings");
      setdata(datas);
    } else {
      const datas = await getProductsBrief(seller, id, status);
      setdata(datas);
    }
  };

  const updateHandler = async () => {
    const payload = {
    };

    if (name !== data.product_name) {
      payload.product_name = name;
    }
    if (description !== data.description) {
      payload.description = description;
    }
    if (category !== data.category) {
      payload.category = category;
    }
    if (price !== data.price) {
      payload.price = price;
    }

    if (data.status == "pending") {
      await updateProduct(seller, id, "pendings", JSON.stringify(payload), files);
    } else {
      await updateProduct(
        seller,
        id,
        data?.status,
        JSON.stringify(
          payload
        ),
        files
      );
    }
  };
  const handleDeleteImage = async (img) => {
    if (data.status == "pending") {
      await deleteProductImg(seller, id, "pendings", img.file_id);
    } else {
      await deleteProductImg(seller, id, data?.status, img.file_id);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setname(data?.product_name);
    setprice(data?.price);
    setcategory(data?.category);
    setvalue(data?.description);
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-screen mt-[20%] lg:mt-[8%] pb-[4rem] md:pb-0">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Edit Produk
              </h2>
            </div>

            {data ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateHandler();
                }}
                className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="Nama Produk"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Nama Produk
                  </label>
                  <input
                    onChange={(e) => setname(e.target.value)}
                    name="Nama Produk"
                    defaultValue={data.product_name}
                    required
                    maxLength={20}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="Harga"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Harga
                  </label>
                  <CurrencyInput
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    id="input-example"
                    required
                    defaultValue={data.price}
                    name="input-name"
                    prefix="Rp."
                    decimalsLimit={0}
                    onValueChange={(values) => setprice(values)}
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="Harga"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Deskripsi
                  </label>
                  <ReactQuill
                    className="h-32"
                    theme="snow"
                    defaultValue={data?.description}
                    value={value}
                    onChange={(e) => {
                      setvalue(e);
                      setdescription(e);
                    }}
                  />
                </div>

                <div className="flex w-full mt-10 justify-between col-span-2 items-center">
                  <label
                    htmlFor="category"
                    className="mb-4 inline-block text-sm text-gray-800 sm:text-base">
                    Kategori
                  </label>
                  <select
                    onChange={(e) => setcategory(e.target.value)}
                    name="category"
                    defaultValue={data?.category}
                    id="category">
                    <option value="Makanan">Makanan</option>
                    <option value="Pakaian">Pakaian</option>
                    <option value="Elektronik">Elektronik</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Foto Produk
                  </label>
                  <div className="flex flex-wrap gap-6">
                    {data.images.map((imgs, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => handleDeleteImage(imgs)}
                          className="overflow-hidden flex relative w-fit rounded-lg bg-gray-100">
                          <img
                            src={imgs.link}
                            loading="lazy"
                            alt="Foto Produk"
                            className="md:h-32 md:w-32 h-20 w-20 object-cover object-center"
                          />
                          <FaRegTrashCan className="absolute left-[40%] top-[40%] text-3xl" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-2 flex flex-col">
                  <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Upload Foto
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                    name="imgup"
                    id="imgup"
                  />
                </div>

                <div className="flex items-center justify-between sm:col-span-2">
                  <input
                    type="submit"
                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  />
                </div>

                <p className="text-xs text-gray-400">
                  Unggah dengan mengikuti standar komunitas yang berlaku
                </p>
              </form>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
