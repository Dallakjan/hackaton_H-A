import { useState, useEffect } from 'react';

const Input = ({ onSubmit, aiResponse }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [fileContent, setFileContent] = useState(null);
  const [inputValueBefore, setInputValueBefore] = useState('');
  const [copied, setCopied] = useState(false);
  const [aiResponsePassed, setAiResponsePassed] = useState('');

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     setSelectedFile(file);

  //     pdfToText(file)
  //       .then((text) => {
  //         setFileContent(text);
  //         setInputValueBefore(text);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  // @TODO add error handling for empty fileContent or incorrect file type

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValueBefore) {
      onSubmit(inputValueBefore);
    } else {
      alert('No file or text input');
    }
  };

  useEffect(() => {
    setAiResponsePassed(aiResponse);
  }, [aiResponse]); // Dependency array includes aiResponse

  return (
    <form
      onSubmit={handleFormSubmit}
      className='w-full flex flex-col bg-gray-200 relative mb-20'
    >
      <h2 className='mx-auto text-2xl font-medium my-5'>Check Your Score</h2>
      <div className='flex flex-col md:flex-row w-full mt-5 justify-center'>
        <div className='flex flex-col flex-1 mb-4 md:mb-10 mt-10 justify-center max-w-xl'>
          <label
            htmlFor='large-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-black mx-2 md:mx-5 text-center'
          >
            Your text
          </label>
          <textarea
            type='text'
            className='resize-none border-x-0 border-t-0 border-gray-200 px-2 md:px-5 align-top sm:text-sm mx-2 md:mx-5 rounded-lg py-5'
            value={inputValueBefore}
            rows={5}
            onChange={(e) => setInputValueBefore(e.target.value)}
          />
          <div className='flex items-center gap-2 py-3'>
            <button
              type='button'
              className='rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600'
              onClick={() => {
                setInputValueBefore('');
              }}
            >
              Clear Input
            </button>

            <button
              type='submit'
              className='rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700'
              onClick={handleFormSubmit}
            >
              Calculate Score
            </button>
          </div>
        </div>
        {aiResponse && (
          <div className='flex flex-col flex-1 mb-4 md:mb-10 mt-10 justify-center max-w-xl'>
            <label
              htmlFor='large-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-black mx-2 md:mx-5 text-center'
            >
              Your text after
            </label>
            <textarea
              type='text'
              className='resize-none border-x-0 border-t-0 border-gray-200 px-2 md:px-5 align-top sm:text-sm mx-2 md:mx-5 rounded-lg py-5'
              value={aiResponsePassed}
              rows={5}
              readOnly
            />
            <div className='flex items-center gap-2 py-3'>
              <button
                type='button'
                className='rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600'
                onClick={() => {
                  setAiResponsePassed('');
                }}
              >
                Clear Input
              </button>

              <button
                type='submit'
                className='rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700'
                onClick={() => {
                  navigator.clipboard.writeText(aiResponsePassed);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}
      </div>
      {copied && (
        <div
          role='alert'
          className='rounded-xl border border-gray-100 bg-white p-4 w-2/12 absolute right-5 bottom-0 z-50 shadow-md duration-500'
        >
          <div className='flex items-start gap-4'>
            <span className='text-green-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>

            <div className='flex-1'>
              <strong className='block font-medium text-gray-900'>
                {' '}
                Copied{' '}
              </strong>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Input;
