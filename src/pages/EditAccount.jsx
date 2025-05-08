import React from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { updateProfile } from "../api.jsx";
import { useEffect } from "react";
import { getUserInfo } from "../api.jsx";
import Loader from "../Components/Loader.jsx";

function EditAccount() {
  const [userData, setUserData] = React.useState();
  const [name, setName] = React.useState(userData?.name);
  const [password, setPassword] = React.useState();
  const [instance, setInstance] = React.useState(userData?.instance);
  const [whatsapp, setWhatsapp] = React.useState(userData?.whatsapp);
  const [files, setFiles] = React.useState([]);

  const idAcc = String(localStorage.getItem("seller_id"));

  const updateHandler = async () => {
    if (name === "" || instance === "" || whatsapp === "") {
      toast.error("Tidak Boleh Kosong!");
    } else {
      await updateProfile(
        idAcc,
        JSON.stringify({ name, instance, whatsapp }),
        files,
      );
    }
  };

  const token = JSON.parse(localStorage.getItem("userToken"));

  const fetchUser = async () => {
    const response = await getUserInfo(token);
    setUserData(response);
    console.log(response);
    if (response.role === "admin") {
      localStorage.setItem("XYZABC_SUPER", "SMEKENSA65");
      window.location = "/administration";
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log("token exist");
      fetchUser();
    } else {
      console.log("token not exist");
      window.location = "/login";
    }
  }, []);
  useEffect(() => {
    setName(userData?.name);
    setInstance(userData?.instance);
    setPassword(userData?.password);
    setWhatsapp(userData?.whatsapp);
  }, [userData]);

  return (
    <>
      <Navbar />

      <div className="bg-white w-screen pt-28 flex px-4 md:px-8 flex-col items-center h-screen py-6 sm:py-8 lg:py-12">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 md:mt-20 lg:text-3xl">
          Edit Akun
        </h2>
        {userData ? (
          <div className="mx-auto h-full pt-6">
            <div className="mx-auto max-w-lg rounded-lg border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateHandler();
                }}
                action=""
                className="flex flex-col gap-4 p-4 md:p-8">
                <div className="flex flex-col w-full gap-2">
                  <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Foto Profil
                  </label>
                  <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-indigo-500 bg-gray-200 shadow-lg">
                    <img
                      src={userData?.profile_photo}
                      loading="lazy"
                      alt="Profile"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                      Upload Foto Profil
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFiles(e.target.files)}
                      name="imgup"
                      id="imgup"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Nama
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={userData?.name}
                    type="text"
                    maxLength={20}
                    name="name"
                    required
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>
{/* 
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Password <sup>* kosongkan jika tidak ingin diubah</sup>
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    minLength={8}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div> */}

                <div className="flex w-full justify-between items-center">
                  <label
                    htmlFor="instance"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Instansi
                  </label>
                  <select
                    onChange={(e) => setInstance(e.target.value)}
                    name="instance"
                    id="instance"
                    defaultValue={userData?.instance}>
                    <option value="Siswa">Siswa</option>
                    <option value="Guru">Guru</option>
                    <option value="Departemen">Departemen</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Whatsapp"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Whatsapp
                  </label>
                  <input
                    onChange={(e) => setWhatsapp(e.target.value)}
                    type="text"
                    defaultValue={userData?.whatsapp}
                    required
                    pattern="^\+[1-9]{1}[0-9]{3,14}$"
                    title="Harus Menggunakan Format +62xxxxxxxxx"
                    name="Whatsapp"
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>

                <input
                  type="submit"
                  value={"Perbarui Profil"}
                  className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                />
              </form>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default EditAccount;
