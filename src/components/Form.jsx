import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [name, setName] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setsintomas] = useState('');

  const [error, seterror] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setName(paciente.name);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setsintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecht = Date.now().toString();

    return random + fecht;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, propietario, email, alta, sintomas].includes('')) {
      seterror(true);
      return;
    }

    seterror(false);

    const pacienteObj = {
      name,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      //Edsitando registro
      pacienteObj.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? pacienteObj : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //nuevoregistro
      pacienteObj.id = generarId();
      setPacientes([...pacientes, pacienteObj]);
    }

    //Reiniciar el Formulario
    setName('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setsintomas('');
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <h2 className="font-black text-3xl text-center"> Seguimiento Paciente</h2>

      <p className="text-lg mt-5 text-center mb-10">
        {`Anade Pacientes y  
      `}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-lg rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={'Todos los campos son obligatorios'} />}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota{' '}
          </label>
          <input
            id="mascota"
            className="borde-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-slate-50"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario{' '}
          </label>
          <input
            id="propietario"
            className="borde-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-slate-50"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email{' '}
          </label>
          <input
            id="email"
            className="borde-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-slate-50"
            type="email"
            placeholder="Introduce tu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta{' '}
          </label>
          <input
            id="alta"
            className="borde-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-slate-50"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas{' '}
          </label>
          <textarea
            name=""
            id="sintomas"
            cols="30"
            rows="10"
            className="borde-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-slate-50"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setsintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold  cursor-pointer hover:bg-indigo-700 transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
