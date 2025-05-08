import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { getRejectPendingPosts } from "../api";
import { Button, Modal } from "flowbite-react";
import { aproveRejectPost } from "../api";
import { useParams } from "react-router";
import { getProductsBrief } from "../api";

export function AdminDashboard() {
  const [pendingPosts, setPendingPosts] = React.useState([]);
  const [mappedPP, setMappedPP] = React.useState([]);
  const [rejectedPost, setrejectedPost] = React.useState([]);
  const [mappedRP, setmappedRP] = React.useState([]);

  const mapPendingPost = () => {
    console.log(pendingPosts);
    if (pendingPosts !== undefined) {
      const res = pendingPosts?.map((data, i) => {
        return (
          <div
            onClick={() =>
              (window.location =
                "/admin/review/" +
                data.seller.seller_id +
                "/" +
                data.product_id)
            }
            key={i}
            className="flex flex-col bg-slate-100 p-4 w-40 rounded-lg">
            <img src={data?.images[0]?.link} alt="blank product" />
            <h3 className="text-lg font-semibold">{data?.product_name}</h3>
            <h3 className="text-md font-semibold">{data?.seller.name}</h3>
            <h4>Rp.{data?.price}</h4>
          </div>
        );
      });
      setMappedPP(mappedPP?.concat(res));
    }
  };

  const mapRejectedPost = () => {
    console.log(rejectedPost);
    if (rejectedPost) {
      const res = rejectedPost?.map((data, i) => {
        return (
          <div
            onClick={() =>
              (window.location =
                "/admin/review/" +
                data.seller.seller_id +
                "/" +
                data.product_id)
            }
            key={i}
            className="flex flex-col bg-slate-100 p-4 w-40 rounded-lg">
            <img src={data?.images[0]?.link} alt="blank product" />
            <h3 className="text-lg font-semibold">{data?.product_name}</h3>
            <h3 className="text-md font-semibold">{data?.seller.name}</h3>
            <h4>Rp.{data?.price}</h4>
          </div>
        );
      });
      setmappedRP(mappedRP?.concat(res));
    }
  };

  const fetchPP = async () => {
    let res = await getRejectPendingPosts("pendings");
    if (res[0].product_id) {
      setPendingPosts(pendingPosts.concat(res));
      console.log(res)
    } else {
      setMappedPP(<p>Tidak Ada Data</p>)
    }
  };
  const fetchRP = async () => {
    let res = await getRejectPendingPosts("rejected");
    if (res[0].product_id) {
      console.log(res)
      setrejectedPost(rejectedPost.concat(res));
    } else {
      setmappedRP(<p>Tidak Ada Data</p>)
    }
  };

  useEffect(() => {
    fetchPP();
    fetchRP();
  }, []);
  useEffect(() => {
    mapPendingPost();
  }, [pendingPosts]);
  useEffect(() => {
    mapRejectedPost();
  }, [rejectedPost]);

  return (
    <>
      <Navbar />
      <div className="mt-32 w-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold uppercase">Admin Page</h1>
        <div className="mt-10">
          <h2 className="text-xl">Un Aproved Posts</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedPP}</div>
        </div>
        <div className="mt-10 lg:mb-4 mb-32">
          <h2 className="text-xl">Rejected Posts</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedRP}</div>
        </div>
      </div>
    </>
  );
}

export function ReviewProduct() {
  const id = useParams().id;
  const sellerid = useParams().seller;
  const [data, setData] = React.useState([]);
  const [statusMsg, setStatusMsg] = React.useState("");

  const fetchProduct = async () => {
    const datas = await getProductsBrief(sellerid, id);
    console.log(sellerid);
    setData(datas);
  };

  const handleACC = async (acc) => {
    await aproveRejectPost(data.product_id, acc, data.status, statusMsg);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mb-40 mt-28 ">
        <div>
          <div className="flex flex-wrap gap-2 w-full">
            {data?.images?.map((img, i) => {
              return (
                <img
                  className="w-40"
                  key={i}
                  src={img.link}
                  alt={"product Img " + i}
                />
              );
            })}
          </div>
          <h3 className="text-lg font-semibold">Name: {data?.product_name}</h3>
          <h3 className="text-md font-semibold">
            Seller: {data?.seller?.name}
          </h3>
          <h4>Price: Rp.{data?.price}</h4>
          <p>Product Id: {data?.product_id}</p>
          <p>date: {data?.release_date}</p>
          <p>status: {data?.status}</p>
          <p>like: {data?.like}</p>
          <p>interaction: {data?.interaction}</p>
          <p>view: {data?.view}</p>
          <p>desc: {data?.description}</p>
          <p>category: {data?.category}</p>
        </div>

        {data?.status == "rejected" ? null : (
          <div className="flex mt-10 w-full justify-center flex-col gap-4 items-start">
            <input
              onChange={(e) => setStatusMsg(e.target.value)}
              placeholder="Message"
              type="text"
            />
            <div className="flex gap-3">
              <Button onClick={() => handleACC("approve")}>Approve</Button>
              <Button color="red" onClick={() => handleACC("reject")}>
                Reject
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
