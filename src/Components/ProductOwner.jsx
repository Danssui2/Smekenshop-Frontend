import React, { useEffect } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { TbBrandWechat } from "react-icons/tb";
import { FiBox, FiHeart } from "react-icons/fi";
import { IoIosFlash, IoMdHeartEmpty } from "react-icons/io";
import { Accordion } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { updateProduct, removeProduct } from "../api";

function ProductOwner({
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
  status,
  stock,
  messages,
  isdisabled,
}) {
  const [openred, setopenred] = useState(false);
  const [opengreen, setopengreen] = useState(false);
  const [opendelete, setopendelete] = useState(false);

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

  const handleHideShow = async () => {
    await updateProduct(seller.id, id, status, "{is_disabled}");
    window.location.reload();
  };

  const handleDelete = async () => {
    await removeProduct(seller.id, id, status);
    window.location = "/account";
  };

  useEffect(() => {
    document.getElementById("descholder").innerHTML = desc;
  }, [desc]);

  return (
    <>
      <div className="w-screen pb-[6rem] md:pb-0">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {sideimgmapper}
              </div>

              <div className="relative h-[25rem] md:h-[35rem] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Carousel slideInterval={3000}>{mapped}</Carousel>
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
              <div className="w-full md:w-[75%] xl:w-[65%]">
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>Pesan Oleh Peninjau</Accordion.Title>
                    <Accordion.Content>
                      <div>{messages}</div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>

              <div className="flex gap-5 md:w-[65%] justify-between items-center rounded-lg mt-6">
                {status == "approved" ? (
                  <div className="flex w-full h-16 font-semibold text-2xl items-center justify-center bg-green-500 text-white">
                    Disetujui
                  </div>
                ) : status == "pending" ? (
                  <div className="flex w-full h-20 font-semibold text-2xl items-center justify-center bg-yellow-300 text-white">
                    Sedang Dintinjau
                  </div>
                ) : status == 'rejected' ? (
                  <div className="flex w-full h-20 font-semibold text-2xl items-center justify-center bg-red-500 text-white">
                    Ditolak
                  </div>
                ) : (
                  <div className="flex w-full h-20 font-semibold text-2xl items-center justify-center bg-red-500 text-white">
                    Didrop
                  </div>
                )}
              </div>

              <div className="mb-2 mt-2 flex items-center gap-2 text-gray-500">
                <IoIosFlash className="w-5 h-5" />
                <span className="text-sm">1m - 1h. Fast Response!</span>
              </div>

              <div className="flex flex-col flex-wrap lg:flex-row gap-4">
                {status == "rejected" ? null : (
                  <a
                    href={`/product/edit/form/${seller?.id}/${id}/${status}`}
                    className="flex md:w-64 items-center justify-center rounded-lg bg-slate-800 px-8 py-3 text-center font-semibold text-sm lg:text-xl text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-600 focus-visible:ring active:bg-slate-700 sm:flex-none md:text-base">
                    Edit Produk
                  </a>
                )}
                {status === "approved" ? (
                  isdisabled === false ? (
                    <button
                      className="flex md:w-64 items-center justify-center rounded-lg bg-yellow-400 px-8 py-3 text-center font-semibold text-sm lg:text-xl text-white outline-none ring-yellow-300 transition duration-100 hover:bg-yellow-600 focus-visible:ring active:bg-yellow-700 sm:flex-none md:text-base"
                      onClick={() => setopenred(true)}>
                      Sembunyikan Produk
                    </button>
                  ) : (
                    <button
                      className="flex md:w-64 items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-center font-semibold text-sm lg:text-xl text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:flex-none md:text-base"
                      onClick={() => setopengreen(true)}>
                      Tampilkan Produk
                    </button>
                  )
                ) : null}
                <button
                  className="flex md:w-64 items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-center font-semibold text-sm lg:text-xl text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 sm:flex-none md:text-base"
                  onClick={() => setopendelete(true)}>
                  Hapus Produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={openred} size="md" onClose={() => setopenred(false)} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin menarik produk ini dari publik?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleHideShow();
                  setopenred(false);
                }}>
                Ya, saya yakin
              </Button>
              <Button color="gray" onClick={() => setopenred(false)}>
                Tidak, Batalkan
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        show={opengreen}
        size="md"
        onClose={() => setopengreen(false)}
        popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin merilis produk ini dari publik?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="success"
                onClick={() => {
                  handleHideShow();
                  setopengreen(false);
                }}>
                Ya, saya yakin
              </Button>
              <Button color="gray" onClick={() => setopengreen(false)}>
                Tidak, Batalkan
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        show={opendelete}
        size="md"
        onClose={() => setopendelete(false)}
        popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin menghapus produk ini dari publik?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleDelete();
                  setopendelete(false);
                }}>
                Ya, saya yakin
              </Button>
              <Button color="gray" onClick={() => setopendelete(false)}>
                Tidak, Batalkan
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ProductOwner;
