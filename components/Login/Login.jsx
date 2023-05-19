import React from "react";

import supabase from "../../utils/supabase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  async function login() {
    if (!email) return;
    const { error, data } = await supabase.auth.signIn({
      email,
    });
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
    if (submitted) {
      return (
        <div>
          <h1>Please check your email to sign in</h1>
        </div>
      );
    }
    return (
      <div>
        <div>
          <h1></h1>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => login()}>Sign in </button>
        </div>
      </div>
    );
  }
}
