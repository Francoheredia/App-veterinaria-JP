const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { name, propietario, email, alta, sintomas, id } = paciente;

  const handleDelete = () => {
    const respuesta = confirm('Estas seguro que deseas eliminar el paciente?');

    if (respuesta) {
      deletePaciente(id);
    }
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">{propietario}</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{alta}</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>{' '}
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10  bg-indigo-600  hover:bg-indigo-700 text-white font-bold uppercase  rounded-md  cursor-pointer "
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10  bg-red-600  hover:bg-red-700 text-white font-bold uppercase  rounded-md  cursor-pointer "
          type="button"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
