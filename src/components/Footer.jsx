const Footer = () => {
  return (
    <footer className='bg-gray-100' id='form'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center text-gray-500 sm:justify-start'>
            Team H&A Made with ❤️ for BOLD
          </div>

          <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right'>
            {`Copyright © ${new Date().getFullYear()} All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
