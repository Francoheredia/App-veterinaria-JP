import React from 'react';

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase text-sm font-bold  mb-5 rounded-md">
      {' '}
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
