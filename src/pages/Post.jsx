import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Navbar from "../Components/Navbar";
import CurrencyInput from "react-currency-input-field";
import Upload from "../Components/Upload";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Post() {
  const [value, setValue] = useState("");

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-screen mt-[20%] lg:mt-[8%]">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Unggah Produk
              </h2>
            </div>

            <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
              <div className="col-span-2">
                <label
                  for="Nama Produk"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Nama Produk
                </label>
                <input
                  name="Nama Produk"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div className="col-span-2">
                <label
                  for="Harga"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Harga
                </label>
                <CurrencyInput
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  id="input-example"
                  name="input-name"
                  prefix="Rp."
                  placeholder="Rp.10,000"
                  decimalsLimit={2}
                  onValueChange={(value, name, values) =>
                    console.log(value, name, values)
                  }
                />
              </div>

              <div className="col-span-2">
                <label
                  for="Harga"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Deskripsi
                </label>
                <ReactQuill
                  className="h-32"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                />
              </div>

              <div className="col-span-2 mt-10">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Kategori
                </label>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Pilih Kategori"
                />
              </div>

              <div className="col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Upload Foto
                </label>
                <Upload />
              </div>

              <div className="flex items-center justify-between sm:col-span-2">
                <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Unggah
                </button>
              </div>

              <p className="text-xs text-gray-400">
                Unggah dengan mengikuti standar komunitas yang berlaku
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
