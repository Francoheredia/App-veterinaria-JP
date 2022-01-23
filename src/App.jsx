import Header from './components/Header';
import { useState } from 'react';
import Form from './components/Form';
import ListaDePacientes from './components/ListaDePacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form pacientes={pacientes} setPacientes={setPacientes} />
        <ListaDePacientes />
      </div>
    </div>
  );
}

export default App;
