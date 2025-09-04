import { useState, useEffect } from 'react';

export default function Weeks() {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener empleados');
        return res.json();
      })
      .then((data) => {
        setEmpleados(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-full justify-center p-4">
      <h1 className="mb-4 text-xl font-bold">Mostrar los empleados desde la API GET</h1>

      {loading && <p>Cargando empleados...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <ul className="space-y-2">
          {empleados.map((empleado) => (
            <li key={empleado.id} className="border p-2 rounded w-72">
              <p><strong>Nombre:</strong> {empleado.nombre}</p>
              <p><strong>Email:</strong> {empleado.correo}</p>
              <p><strong>Telefono:</strong> {empleado.telefono}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
