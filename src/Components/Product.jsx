import React, { useEffect } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { TbBrandWechat } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { IoIosFlash } from "react-icons/io";
import { Accordion } from "flowbite-react";
import { Carousel } from "flowbite-react";

function Product({
  img,
  name,
  desc,
  category,
  seller,
  price,
  view,
  interaction,
  like,
  id
}) {
  const joinedLinks = img?.map((i) => i.link);
  // const joinedLinks = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fPHQZQL-iMO4Vcg_TQ_OZ2cFB4L3D6dX0n2je-tZlT_KORwbzvncYuAS&s=10",
  // ]

  const mapped = joinedLinks?.map((data, i) => {
    return (
      <img
        src={data}
        loading="lazy"
        key={i}
        alt="Foto Produk"
        className="h-[25rem] md:h-[35rem] w-full object-cover object-center"
      />
    );
  });

  const sideimgmapper = joinedLinks?.map((data, i) => {
    if (i < 4) {
      return (
        <div key={i} className="overflow-hidden rounded-lg bg-gray-100">
          <img
            src={data}
            loading="lazy"
            alt="Foto Produk"
            className="h-full w-full object-cover object-center"
          />
        </div>
      );
    }
  });

  useEffect(() => {
    document.getElementById("descholder").innerHTML = desc;
  }, [desc]);
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("cart")))
  }, []);

  const handleCart = () => {
    const carts = JSON.parse(localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify(carts.concat({"seller": seller.id, "sellerName": seller.name, "id": id,})));
    console.log(carts)
  }
  


  return (
    <div className="w-screen flex justify-center">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              {sideimgmapper}
            </div>

            <div className="relative h-[25rem] md:h-[35rem] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
              <Carousel slideInterval={3000}>{mapped}</Carousel>
              <a
                href="#"
                className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {name}
              </h2>
            </div>

            <div className="flex gap-2">
              <div className="md:mb-6 mb-3 flex items-center">
                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                  <span className="text-sm">{view}</span>
                  <HiOutlineEye />
                </div>
              </div>

              <div className="md:mb-6 mb-3 flex items-center gap-3">
                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                  <span className="text-sm">{interaction}</span>
                  <TbBrandWechat />
                </div>
              </div>

              <div className="md:mb-6 mb-3 flex items-center gap-3">
                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                  <span className="text-sm">{like}</span>
                  <FiHeart />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-gray-800 md:text-3xl">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(price)}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                * Belum termasuk biaya eksternal
              </span>
            </div>

            <div className="w-[75%] xl:w-[65%]">
              <Accordion collapseAll>
                <Accordion.Panel>
                  <Accordion.Title>Deskripsi Produk</Accordion.Title>
                  <Accordion.Content>
                    <div id="descholder"></div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>

            <div className="flex gap-5 md:w-[65%] justify-between items-center rounded-lg bg-gray-100 p-4 mt-6">
              <div className="flex gap-5">
                <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200 shadow-lg">
                  <img
                    src={seller?.profile_photo}
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="font-bold text-indigo-500 md:text-lg">
                    {seller?.name}
                  </div>
                  <p className="text-sm text-gray-500 md:text-base">
                    {seller?.products.length + " Produk"}
                  </p>
                </div>
              </div>

              <a
                href={"/seller/" + seller?.id}
                className="p-3 px-6 bg-indigo-500 rounded-xl text-white font-semibold">
                Lihat Penjual
              </a>
            </div>

            <div className="mb-2 mt-2 flex items-center gap-2 text-gray-500">
              <IoIosFlash className="w-5 h-5" />
              <span className="text-sm">1m - 1h. Fast Response!</span>
            </div>

            <div className="flex gap-2.5 mb-10">
              <a
                href={
                  "https://wa.me/" +
                  "+62881036490338" +
                  "?text=" +
                  "Hai, saya tertarik dengan produk " +
                  name +
                  " anda. Apakah barangnya masih ada?"
                }
                className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                Beli Sekarang
              </a>

              <button
                onClick={() => handleCart()}
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                Tambahkan ke keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
