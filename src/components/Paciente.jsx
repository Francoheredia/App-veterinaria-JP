const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Franco</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{' '}
        <span className="font-normal normal-case">
          franco_cli_cli@hotmail.com
        </span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">10/2/2022</span>{' '}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{' '}
        <span className="font-normal normal-case">
          Dolor en la pata Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Corporis cum tempora eum quisquam dolor illo aut consectetur,
          nulla, accusantium, consequatur est ipsum nobis facere odit asperiores
          unde veniam! Velit, necessitatibus!
        </span>{' '}
      </p>
    </div>
  );
};

export default Paciente;
