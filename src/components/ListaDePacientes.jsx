import { useEffect } from 'react';
import Paciente from './Paciente';

const ListaDePacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  console.log(pacientes.length);
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h4 className="font-black text-3xl text-center">
            Lista de pacientes
          </h4>
          <p className="text-xl mt-5 mb-10 text-center">
            {`Administra tus 
           `}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              deletePaciente={deletePaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h4 className="font-black text-3xl text-center">No hay pacientes</h4>
          <p className="text-xl mt-5 mb-10 text-center">
            {`Comienza agregando pacientes
           `}
            <span className="text-indigo-600 font-bold">y aparecera </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaDePacientes;
