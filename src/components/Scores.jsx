const Scores = ({ results, title }) => {
  const {
    fleschReadingEase,
    difficultWords,
    characters,
    words,
    sentences,
    syllables,
  } = results;

  return (
    <div className='px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
          {title}
        </h2>
      </div>

      <div className='mt-8 sm:mt-12'>
        <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
          <div className='flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500'>
              Flesh Reading Ease
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              {fleschReadingEase >= 100 ? 100 : fleschReadingEase}
            </dd>
          </div>

          <div className='flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500'>
              Difficult Words
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              {difficultWords}
            </dd>
          </div>

          <div className='flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500'>
              Characters
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              {characters}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Scores;
