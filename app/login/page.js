"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuario simulado
    if (user === "zenon" && password === "1234") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", user);
      router.push("/productos");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>
          Iniciar sesión en <span>LogicStore</span>
        </h1>

        <p>Accede para ver productos y gestionar tu carrito</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn-login2">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
