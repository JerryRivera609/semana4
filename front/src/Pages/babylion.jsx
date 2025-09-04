import React, { useState } from "react";

export default function Babylonian() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Maneja los cambios en inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simula el envío de datos a una API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://tu-api.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error al crear el usuario");

      const data = await response.json();
      setMessage(`Usuario creado con éxito: ${data.name}`);
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h1 className="mb-4 text-2xl font-bold">Crear Usuario</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Telefono"
          value={form.password}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all duration-500 cursor-pointer"
        >
          Crear Usuario
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
