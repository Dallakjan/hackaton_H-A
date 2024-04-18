import { useState } from 'react';
import rs from 'text-readability';

import Input from './Input';
import Scores from './Scores';

function App() {
  const [results, setResults] = useState({
    fleschReadingEase: null,
    difficultWords: null,
    characters: null,
    words: null,
    sentences: null,
    syllables: null,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [textToImprove, setTextToImprove] = useState('');

  const analyzeText = (text) => {
    const characters = text.length;
    const words = rs.letterCount(text, true);
    const sentences = rs.sentenceCount(text);
    const syllables = rs.syllableCount(text);
    const fleschReadingEase = rs.fleschReadingEase(text);
    const difficultWords = rs.difficultWords(text);

    setResults({
      difficultWords,
      fleschReadingEase,
      characters,
      words,
      sentences,
      syllables,
    });
  };

  const handleFormSubmit = (text) => {
    analyzeText(text);
    setTextToImprove(text);
    setIsFormSubmitted(true);
  };

  const handleAskAi = () => {
    fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer `,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: `How can I improve my writing to have better score in flesch reading ease, it should be from 50 to 69. Imporve text, fix the grammar and interpunction. The text to improve is the following: ${textToImprove}`,
            },
          ],
        }),
      }
    ).then((response) => {
      response.json().then((data) => {
        const aiResponse = data;
        console.log(aiResponse.choices[0].message.content);
      });
    });
  };

  return (
    <>
      <Input onSubmit={handleFormSubmit} />
      {isFormSubmitted && <Scores results={results} />}
      {isFormSubmitted && (
        <div className='mt-4 text-center'>
          <div className='mb-2 text-lg font-medium'>
            Want to have a better score?
          </div>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={handleAskAi}
          >
            Use AI
          </button>
        </div>
      )}
    </>
  );
}

export default App;
