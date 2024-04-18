import { useState } from 'react';
import pdfToText from 'react-pdftotext';

const Input = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      pdfToText(file)
        .then((text) => {
          setFileContent(text);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // @TODO add error handling for empty fileContent or incorrect file type

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {
      onSubmit(fileContent);
    } else {
      onSubmit(inputValue);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='flex items-center justify-center w-full'>
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop Cover Letter
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>.PDF</p>
          </div>
          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className='mb-6 mt-6'>
        <label
          htmlFor='large-input'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
        >
          Large input
        </label>
        <input
          type='text'
          id='large-input'
          className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Enter your text here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        Calculate Readibility Score
      </button>
    </form>
  );
};

export default Input;
