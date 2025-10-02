import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { banUser, dropPost, getRejectPendingPosts, getSellerInfo, getUserList, undropPost } from "../api";
import { Button, Modal } from "flowbite-react";
import { aproveRejectPost } from "../api";
import { useParams } from "react-router";
import { getProductsBrief } from "../api";
import { toast } from "react-toastify";

export function AdminDashboard() {
  const [pendingPosts, setPendingPosts] = React.useState([]);
  const [mappedPP, setMappedPP] = React.useState([]);
  const [mappedAP, setMappedAP] = React.useState([]);
  const [rejectedPost, setrejectedPost] = React.useState([]);
  const [approvedPost, setApprovedPost] = React.useState([]);
  const [mappedRP, setmappedRP] = React.useState([]);
  const [mappedDP, setMappedDP] = React.useState([]);
  const [droppedPost, setDroppedPost] = React.useState([]);

  const mapApprovedPost = () => {
    console.log(approvedPost);
    if (approvedPost !== undefined) {
      const res = approvedPost?.map((data, i) => {
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
      setMappedAP(mappedAP?.concat(res));
    }
  };

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

  const mapDropPost = () => {
    console.log(droppedPost);
    if (droppedPost) {
      const res = droppedPost?.map((data, i) => {
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
      setMappedDP(mappedDP?.concat(res));
    }
  };

  const fetchAP = async () => {
    let res = await getRejectPendingPosts("approved");
    if (res[0].product_id) {
      setApprovedPost(approvedPost.concat(res));
      console.log(res)
    } else {
      setMappedAP(<p>Tidak Ada Data</p>)
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
  const fetchDP = async () => {
    let res = await getRejectPendingPosts("dropped");
    if (res[0].product_id) {
      console.log(res)
      setDroppedPost(droppedPost.concat(res));
    } else {
      setMappedDP(<p>Tidak Ada Data</p>)
    }
  };

  useEffect(() => {
    fetchAP();
    fetchPP();
    fetchRP();
    fetchDP();
  }, []);
  useEffect(() => {
    mapPendingPost();
  }, [pendingPosts]);
  useEffect(() => {
    mapRejectedPost();
  }, [rejectedPost]);
  useEffect(() => {
    mapApprovedPost();
  }, [approvedPost]);
  useEffect(() => {
    mapDropPost();
  }, [droppedPost]);

  return (
    <>
      <Navbar />
      <div className="mt-32 w-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold uppercase">Admin Page</h1>
        <a
          href="/logout"
          className="block mt-2 inline-block flex-1 md:w-40 rounded-lg bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
          Logout
        </a>
        <a
          href="/admin/review-account"
          className="block mt-2 inline-block flex-1 md:w-40 rounded-lg bg-purple-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
          Review Account
        </a>
        <div className="mt-10">
          <h2 className="text-xl">Aproved Posts</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedAP}</div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl">Pending Posts</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedPP}</div>
        </div>
        <div className="mt-10 lg:mb-4 mb-32">
          <h2 className="text-xl">Rejected Posts</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedRP}</div>
        </div>
        <div className="mt-10 lg:mb-4 mb-32">
          <h2 className="text-xl">Dropped Posts (banned)</h2>
          <div className="flex justify-center flex-wrap gap-4">{mappedDP}</div>
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

  const handleUndrop = async (acc) => {
    await undropPost(data.product_id, acc);
  };

  const dropp = async () => {
    if (data.status !== 'approved') {
      toast.error('Produk harus dalam status approved terlebih dahulu.');
      return;
    }
    await dropPost(data.product_id, 'drop', data.status, statusMsg);
  }

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

        <div className="flex mt-10 w-full justify-center flex-col gap-4 items-start">
          {(data?.status == 'pendings' || data?.status == 'approved') && (
            <input
              onChange={(e) => setStatusMsg(e.target.value)}
              placeholder="Message"
              type="text"
            />
          )}
          <div className="flex gap-3">
            {data?.status == 'dropped' ? (
              <Button onClick={() => handleUndrop("approve")}>Undrop</Button>
            ) : (
              <>
                {(data?.status == 'pending' || data?.status == 'rejected') && (
                  <>
                    <Button onClick={() => handleACC("approve")}>Approve</Button>
                    {data?.status == 'pending' && (
                      <Button color="red" onClick={() => handleACC("reject")}>
                        Reject
                      </Button>
                    )}
                  </>
                )}
                {data?.status == 'approved' && (
                  <Button color="red" onClick={() => dropp()}>
                    Drop
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function ReviewAccount() {
  const [map, setMap] = React.useState([]);
  const [mapBan, setMapBan] = React.useState([]);

  const fetchAcc = async (role) => {
    const userList = await getUserList(role);
    setMap(userList);
  };

  const fetchAccBan = async (role) => {
    const userList = await getUserList(role);
    setMapBan(userList);
  };

  useEffect(() => {
    fetchAcc("user");
    fetchAccBan("banned");
  }, []);

  const accs = () => {
    if (map.length == 0) return null;
    return map
      .map((data, i) => (
        <div
          onClick={() =>
            (window.location = "/admin/account/" + data.id)
          }
          key={i}
          className="flex flex-col bg-slate-100 p-4 w-40 rounded-lg"
        >
          <img src={data?.profile_photo ?? 'https://lh3.googleusercontent.com/d/1wrRSWHtf52qaYHkilG3rIMOzUI4tA2zZ'} alt="profile photo" />
          <h3 className="text-lg font-semibold">{data?.name}</h3>
          <h3 className="text-md font-semibold break-words whitespace-normal">
            {data?.email}
          </h3>
        </div>
      ));
  };

  const accsBanned = () => {
    if (mapBan.length == 0) return null;
    return mapBan
      .map((data, i) => (
        <div
          onClick={() =>
            (window.location = "/admin/account/" + data.id)
          }
          key={i}
          className="flex flex-col bg-slate-100 p-4 w-40 rounded-lg"
        >
          <img src={data?.profile_photo ?? 'https://lh3.googleusercontent.com/d/1wrRSWHtf52qaYHkilG3rIMOzUI4tA2zZ'} alt="profile photo" />
          <h3 className="text-lg font-semibold">{data?.name}</h3>
          <h3 className="text-md font-semibold break-words whitespace-normal">
            {data?.email}
          </h3>
        </div>
      ));
  };

  return (
    <>
      <Navbar />
      <div className="mt-32 w-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold uppercase">Admin Page</h1>
        <a
          href="/logout"
          className="block mt-2 inline-block flex-1 md:w-40 rounded-lg bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
          Logout
        </a>
        <a
          href="/admin"
          className="block mt-2 inline-block flex-1 md:w-40 rounded-lg bg-purple-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
          Review Product
        </a>
        <div className="mt-10">
          <h2 className="text-xl text-center mb-5">Account</h2>
          {accs() ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {accs()}
            </div>
          ) : (
            <p className="text-center">Tidak ada data.</p>
          )}

          <h2 className="mt-10 text-xl text-center mb-5">Banned Account</h2>
          {accsBanned() ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {accsBanned()}
            </div>
          ) : (
            <p className="text-center">Tidak ada data.</p>
          )}
        </div>
      </div>
    </>
  );
}

export const Accounts = () => {
  const id = useParams().id;
  const [accInfo, setAccInfo] = React.useState(null);
  const [message, setMessage] = React.useState("");

  const accountInfo = async () => {
    const sss = await getSellerInfo(id);
    setAccInfo(sss);
  }

  const handleACC = async (status) => {
    console.log(message)
    if (status == 'ban' && !message) return toast.error('Pesan tidak boleh kosong.');
    await banUser(id, status, message);
    return;
  }

  useEffect(() => {
    accountInfo();
  }, []);

  useEffect(() => {
    if (accInfo) {
      console.log(accInfo);
    }
  }, [accInfo]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mb-40 mt-28 ">
        <div>
          <img
            className="w-40"
            key="1"
            src={accInfo?.profile_photo ?? 'https://lh3.googleusercontent.com/d/1wrRSWHtf52qaYHkilG3rIMOzUI4tA2zZ'}
            alt="profile photo"
          />
          <h3 className="text-lg font-semibold">Name: {accInfo?.name}</h3>
          <h3 className="text-md font-semibold">
            instance: {accInfo?.instance}
          </h3>
          <p>Whatsapp: {String(accInfo?.whatsapp).includes('+') ? accInfo?.whatsapp : `+${accInfo?.whatsapp}`}</p>
          <p>Status: {accInfo?.role}</p>
          <p>Interaction: {accInfo?.interaction}</p>
          <p>Email: {accInfo?.email}</p>
          <p>Total products: {accInfo?.products.length}</p>
          <p>Total like: {accInfo?.statistics.total_like}</p>
          <p>Total interaction: {accInfo?.statistics.total_interaction}</p>
        </div>

        {accInfo?.role != "banned" ? (
          <div className="flex mt-10 w-full justify-center flex-col gap-4 items-start">
            <input
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              type="text"
            />
            <div className="flex gap-3">
              <Button color="red" onClick={() => handleACC("banned")}>
                Ban
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex mt-10 w-full justify-center flex-col gap-4 items-start">
            <div className="flex gap-3">
              <Button onClick={() => handleACC("user")}>Unban</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}