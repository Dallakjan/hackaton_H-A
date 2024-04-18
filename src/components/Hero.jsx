const Hero = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt=''
                src='https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                Cover Letter Readability Checker and Improver
              </h2>

              <p className='mt-4 text-gray-600'>
                Do you want to check how easy it is for recruiters to read your
                Cover Letter? With the help of our cover letter readability
                checker and enhancer you will get the AI powered suggestions to
                improve your document in a few simple steps!
              </p>

              <a
                href='#form'
                className='mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
              >
                Check your Cover Letter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
