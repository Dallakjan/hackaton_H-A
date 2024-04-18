const StepContent = [
  {
    number: '1.',
    title: 'Upload or paste and copy your cover letter',
  },
  {
    number: '2.',
    title: 'Click “Calculate Score” to see the readability score of your text',
  },
  {
    number: '3.',
    title:
      'Improve your cover letter by clicking "Improve with AI" button and wait for the suggestions to appear',
  },
  {
    number: '4.',
    title: 'Compare the original text with the improved version',
  },
  {
    number: '5.',
    title: 'Copy the improved cover letter and use it in your job application!',
  },
];

const Step = ({ number, title, paragprah }) => {
  return (
    <div className='flex gap-4 my-4'>
      <p className='aspect-square rounded-lg object-cover'>{number}</p>

      <div>
        <h3 className='text-lg/tight font-medium text-gray-900'>{title}</h3>

        <p className='mt-0.5 text-gray-700'>{paragprah}</p>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <section className='flex flex-col items-center mb-5'>
      <h2 className='text-3xl font-bold text-gray-900 my-5'>How to Use</h2>
      <div>
        {StepContent.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default Steps;
