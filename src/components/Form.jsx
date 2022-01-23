import { useState, useEffect } from 'react';

const Form = ({ setPacientes, pacientes }) => {
  const [name, setName] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setsintomas] = useState('');

  const [error, seterror] = useState(false);

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

    setPacientes([...pacientes, pacienteObj]);

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
        {error && (
          <div className="bg-red-600 text-white text-center p-3 uppercase text-sm font-bold  mb-5 rounded-md">
            {' '}
            Todos los campos son obligatorios
          </div>
        )}

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
          value={'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
