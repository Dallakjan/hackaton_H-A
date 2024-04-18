const Scores = ({ results }) => {
  const {
    fleschReadingEase,
    difficultWords,
    characters,
    words,
    sentences,
    syllables,
  } = results;

  return (
    <div>
      <div className='mb-1 text-lg font-medium'>Flesch Reading Ease Score</div>
      <div className='w-full h-6 mb-4 bg-gray-200 rounded-full dark:bg-gray-700'>
        <div
          className='text-blue-100 h-6 bg-blue-600 rounded-full dark:bg-blue-500 text-center'
          style={{ width: `${fleschReadingEase}%`, transition: 'width 0.5s' }}
        >
          {fleschReadingEase}/100
        </div>
      </div>
    </div>
  );
};

export default Scores;
