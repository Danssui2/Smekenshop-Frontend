import React, { useEffect } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { TbBrandWechat } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { IoIosFlash, IoMdHeartEmpty } from "react-icons/io";
import { Accordion } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { toast } from "react-toastify";
import { updateProduct } from "../api";
import { IoHeart } from "react-icons/io5";
import { FiBox } from "react-icons/fi";

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
  id,
  stock,
  status,
  owner_role
}) {
  if (status !== 'approved' || owner_role == 'banned') {
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12 w-screen h-screen flex items-center justify-center">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Theo Crazzolara"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
                Laman Tidak Ditemukan
              </h1>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
                Halaman yang kamu cari tidak ada.
              </p>

              <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
                <div>
                  <a
                    href="/"
                    className="inline-block text-sm text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-base">
                    Home
                  </a>
                </div>

                <div>
                  <a
                    href="/#helpform"
                    className="inline-block text-sm text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-base">
                    Help
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const [isliked, setIsliked] = React.useState(false);
  const [oneclick, setoneclick] = React.useState(false);

  const joinedLinks = img?.map((i) => i.link);

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
            className="md:h-32 md:w-32 h-20 w-20 object-cover object-center"
          />
        </div>
      );
    }
  });

  const liked = JSON.parse(localStorage.getItem("like"));
  const handleLike = async () => {
    if (!oneclick) {
      setoneclick(true);
      if (isliked) {
        const finded = liked.findIndex((e) => e === id);
        console.log(finded);
        if (finded !== -1) {
          liked.splice(finded, 1);
          localStorage.setItem("like", JSON.stringify(liked));
          setIsliked(false);
          await updateProduct(
            seller.id,
            id,
            "approved",
            '{like: "-"}'
          );
          window.location.reload();
        }
      } else {
        localStorage.setItem("like", JSON.stringify(liked.concat(id)));
        setIsliked(true);
        await updateProduct(seller.id, id, "approved", '{like: "+"}');
        window.location.reload();
      }
    }
  };

  const handleInteract = async () => {
    window.open(
      "https://wa.me/" +
        seller.whatsapp +
        "?text=" +
        "Hai, saya tertarik dengan produk " +
        name +
        " anda. Apakah barangnya masih ada?"
    );
    await updateProduct(seller.id, id, "approved", "{interaction, stock}");
  };

  useEffect(() => {
    document.getElementById("descholder").innerHTML = desc;
  }, [desc]);
  useEffect(() => {
    if (liked.includes(id)) {
      setIsliked(true);
    } else {
      setIsliked(false);
    }
  }, []);

  const handleCart = () => {
    const carts = JSON.parse(localStorage.getItem("cart"));
    const finded = carts.findIndex((e) => e.id === id);
    if (finded == -1) {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          carts.concat({ seller: seller.id, sellerName: seller.name, id: id })
        )
      );
      toast.success("Berhasil Ditambahkan Ke Keranjang");
    } else {
      toast.error("Barang Sudah Ada Di Keranjang");
    }
    console.log(carts);
  };

  return (
    <div className="w-screen flex justify-center pb-[6rem] md:pb-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              {sideimgmapper}
            </div>

            <div className="relative h-[25rem] md:h-[35rem] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
              <Carousel slideInterval={3000}>{mapped}</Carousel>
              <button
                onClick={() => handleLike()}
                className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base">
                {isliked ? (
                  <IoHeart className="md:w-10 md:h-10 w-6 h-6 text-red-500" />
                ) : (
                  <IoMdHeartEmpty className="md:w-10 md:h-10 w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-[1px] inline-block text-gray-500">
                {category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {name}
              </h2>
            </div>

            <div className="flex gap-2 mb-2">
              <div className="flex items-center">
                <div className="flex p-2 items-center gap-1 rounded-full bg-indigo-500 px-3 text-white">
                  <span className="text-sm">{view}</span>
                  <HiOutlineEye className="text-xl" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex p-2 items-center gap-1 rounded-full bg-indigo-500 px-3 text-white">
                  <span className="text-sm">{interaction}</span>
                  <TbBrandWechat className="text-xl" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex p-2 items-center gap-1 rounded-full bg-indigo-500 px-3 text-white">
                  <span className="text-sm">{like}</span>
                  <FiHeart className="text-xl" />
                </div>
              </div>
              <div className="flex gap-2 bg-indigo-500 text-white p-2 px-4 rounded-full w-fit">
                <div className="flex gap-2 items-center">
                  <FiBox className="text-xl" />
                  <h4>stock</h4>
                </div>
                <p>{stock}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-gray-800 md:text-4xl">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    maximumFractionDigits: 0,
                    currency: "IDR",
                  }).format(price)}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                * Belum termasuk biaya eksternal
              </span>
            </div>

            <div className="w-full md:w-[75%] xl:w-[65%]">
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
                className="p-2 px-4 bg-indigo-500 rounded-xl text-center text-sm text-white font-semibold">
                Lihat Penjual
              </a>
            </div>

            <div className="mb-2 mt-2 flex items-center gap-2 text-gray-500">
              <IoIosFlash className="w-5 h-5" />
              <span className="text-sm">1m - 1h. Fast Response!</span>
            </div>

            <div className="flex gap-2.5 mb-10 md:w-4/6">
              <button
                onClick={() => handleInteract()}
                className="flex-1 flex items-center justify-center rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                Beli Sekarang
              </button>

              <button
                onClick={() => handleCart()}
                className="inline-block flex-1 rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
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
