import { useState } from 'react';
import Link from "next/link";
import Register from "../register";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const item = {email, password};
    const result = await fetch(process.env.REACT_APP_URL_API+"/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col">
          <h1 className="text-white text-5xl flex font-bold">Se Connecter</h1>
          <div className="flex flex-col">
            <form method="POST" onSubmit={handleSubmit} className="flex flex-col">
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
              <button type={"submit"} className="p-3 border-2 border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800">
                  Connexion
              </button>
          </form>
          </div>
          <div className="m-3">
            <p>
              Vous n&apos;avez pas encore de compte ?
              <button  onClick={()=> <Register />} className="p-3 border-2 border-blue-500 bg-blue-500 hover:bg-blue-800 hover:border-blue-800">
                  Inscrivez vous
              </button>
            </p>
          </div>
      </div>
    </>
  );
}

export default Login
