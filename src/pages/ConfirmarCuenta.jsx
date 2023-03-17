import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";
import confirmarCuenta from "../services/usuario/confirmarCuenta";

export default function ConfirmarCuenta() {
  const [alerta, setAlerta] = useState({});
  const { token } = useParams();

  useEffect(() => {
    const peticionConfirmarCuenta = async () => {
      const peticion = await confirmarCuenta(token);
      console.log(peticion)
      if (peticion.status === "error") {
        setAlerta({
          mensaje: peticion.message,
          error: true,
        });
        return;
      }
      setAlerta({
        mensaje: peticion.message,
        error: false,
      });
    };
    peticionConfirmarCuenta();
  }, [token]);

  const { mensaje } = alerta;
  return (
    <>
      <h2 className="text-sky-600 font-black text-5xl text-center capitalize">
        Confirma tu cuenta y comienza a crear tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h2>
      <div>
        {mensaje && <Alerta alerta={alerta}/>}
      </div>
    </>
  );
}
