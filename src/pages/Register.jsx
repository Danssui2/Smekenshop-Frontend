import React from "react";
import Navbar from "../Components/Navbar";
import { signup } from "../api.jsx";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [instance, setInstance] = React.useState("Siswa");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [asalSekolah, setAsalSekolah] = React.useState("");
  const [jurusan, setJurusan] = React.useState("TKP");
  const [files, setFiles] = React.useState([]);

  const signupHanlder = () => {
    if (
      email === "" ||
      password === "" ||
      name === "" ||
      instance === "" ||
      whatsapp === "" ||
      asalSekolah === "" ||
      jurusan === "" ||
      files.length == 0
    ) {
      toast.error("Semua data harus diisi!");
    } else {
      signup(name, email, password, instance, whatsapp, asalSekolah, jurusan, files);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-white w-screen flex items-center h-screen py-6 sm:py-8 lg:py-12">
        <div className="mx-auto h-full pt-16 px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Daftar
          </h2>

          <div className="mx-auto max-w-lg rounded-lg border">
            <form
              onSubmit={(e) => { e.preventDefault(); signupHanlder() }}
              action=""
              className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Nama
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  maxLength={20}
                  name="name"
                  required
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  required
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  minLength={8}
                  required
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div className="flex w-full justify-between items-center">
                <label
                  htmlFor="instance"
                  className="sm:mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Instansi
                </label>
                <select
                  onChange={(e) => setInstance(e.target.value)}
                  name="instance"
                  id="instance">
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
                  required
                  pattern="^\+[1-9]{1}[0-9]{3,14}$"
                  title="Harus Menggunakan Format +62xxxxxxxxx"
                  name="Whatsapp"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="asalsekolah"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Asal Sekolah
                </label>
                <input
                  onChange={(e) => setAsalSekolah(e.target.value)}
                  type="text"
                  required
                  name="Asal Sekolah"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div className="flex w-full justify-between items-center">
                <label
                  htmlFor="jurusan"
                  className="sm:mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Jurusan
                </label>
                <select
                  onChange={(e) => setJurusan(e.target.value)}
                  name="jurusan"
                  id="jurusan">
                  <option value="TKP">TKP</option>
                  <option value="DPIB">DPIB</option>
                  <option value="TPM">TPM</option>
                  <option value="TKRO">TKRO</option>
                  <option value="TEI">TEI</option>
                  <option value="TAV">TAV</option>
                  <option value="TITL">TITL</option>
                  <option value="TJKT">TJKT</option>
                  <option value="PSPR">PSPR</option>
                  <option value="PSPTV">PSPTV</option>
                </select>
              </div>

              <div className="flex flex-col w-full gap-2">
                <label className="mt-3 mb-2 inline-block text-sm text-gray-800 sm:text-base">
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

              <input
                type="submit"
                value={"Daftar"}
                className="mt-5 block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
              />
            </form>
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Sudah punya akun?{" "}
                <a
                  href="/login"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                  Masuk Sekarang!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
