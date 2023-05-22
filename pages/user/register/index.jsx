import { useState } from 'react';
import Link from "next/link";
import Login from "../login";
const Register = () => {

  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test")
    const item = {name, firstname, email, password, confirmPassword};
    const result = await fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(name, firstname, email, password, confirmPassword),
    });
    console.log(result)
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white text-5xl flex font-bold">Inscription</h1>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="bg-blue-200 text-white my-4 p-2"
              type="text" placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-blue-200 text-white my-4 p-2"
              type="text" placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="bg-blue-200 text-white my-4 p-2"
              type="email" placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-blue-200 text-white my-4 p-2"
              type="password" placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="bg-blue-200 text-white my-4 p-2"
              type="password" placeholder="confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="p-3 border-2 border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800">
                S&apos;inscrire
            </button>
          </form>
        </div>
        <div className="m-3">
          <p>
            Vous avez déjà un compte ?
            <button onClick={()=> <Login />} className="p-3 border-2 border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800">
              <Link href="/user/login">
                Connecter-vous
              </Link>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register
