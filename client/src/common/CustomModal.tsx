import React from 'react';

export const Modal = () => {
  return (
    <div>
      <div
        // onClick={toggleModal}
        className='animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex'>
        <div className='animated fadeInDown fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col'></div>
      </div>
    </div>
  );
};
