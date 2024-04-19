const BenefitItemsArray = [
  {
    icon: '🚀',
    title: 'Easy to use',
    description: 'Simply copy and paste your document',
  },
  {
    icon: '🔒',
    title: 'Get instant recommendations',
    description: 'With only one click you can have your cover letter improved',
  },
  {
    icon: '🎉',
    title: 'Boost readability',
    description:
      'Make your document easier to read based on Flesch Reading Ease Score',
  },
];

const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className='flex items-start gap-4'>
      <span className='shrink-0 rounded-lg bg-gray-800 p-4'>{icon}</span>

      <div>
        <h2 className='text-lg font-bold text-gray-900'>{title}</h2>

        <p className='mt-1 text-sm text-gray-900'>{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className='bg-gray-100 text-white'>
      <div className='max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 justify-center flex flex-col items-center mx-auto'>
        <div className='max-w-xl'>
          <h2 className='text-3xl font-bold sm:text-4xl text-center text-gray-900'>
            What makes our tool special?
          </h2>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {BenefitItemsArray.map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
