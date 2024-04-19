import { useEffect, useState } from 'react';
import rs from 'text-readability';

import Input from './Input';
import Scores from './Scores';
import Hero from './Hero';
import Benefits from './Benefits';
import Steps from './Steps';
import Footer from './Footer';

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
  const [aiResponse, setAiResponse] = useState('');
  const [aiResponseScore, setAiResponseScore] = useState({
    fleschReadingEase: null,
    difficultWords: null,
    characters: null,
    words: null,
    sentences: null,
    syllables: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const analyzeText = (text) => {
    const characters = text.length;
    const words = rs.letterCount(text, true);
    const sentences = rs.sentenceCount(text);
    const syllables = rs.syllableCount(text);
    const difficultWords = rs.difficultWords(text);

    const fleschReadingEase = (
      206.835 -
      1.015 * (words / sentences) -
      84.6 * (syllables / words)
    ).toFixed(2);

    const results = {
      difficultWords,
      characters,
      words,
      sentences,
      syllables,
      fleschReadingEase,
    };

    return results;
  };

  const handleFormSubmit = (text) => {
    const analyzedText = analyzeText(text);
    setResults(analyzedText);
    setTextToImprove(text);
    setIsFormSubmitted(true);
  };

  const handleAskAi = () => {
    setIsLoading(true);
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //ADD API KEY AFTER BEARER
        Authorization: `Bearer `,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a professional content writer.',
          },
          {
            role: 'user',
            content: `The Flesch–Kincaid readability tests are readability tests designed to indicate how difficult a passage in English is to understand. There are two tests: the Flesch Reading-Ease, and the Flesch–Kincaid Grade Level. Although they use the same core measures (word length and sentence length), they have different weighting factors. It is calculated using the formula: 206.835 - 1.015 * (total words / total sentences) - 84.6 * (total syllables / total words). The target score range is 50 to 69. Please improve the text, correct the grammar, and adjust the punctuation. The text to be improved is: ${textToImprove}. Give only improved text without any additional information. Return text with no special characters and no empty line breaks.`,
          },
        ],
      }),
    }).then((response) => {
      response.json().then((data) => {
        setAiResponse(data.choices[0].message.content);
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    if (aiResponse) {
      const analyzedText = analyzeText(aiResponse);
      setAiResponseScore(analyzedText);
    }
  }, [aiResponse]);

  return (
    <>
      <Hero />
      <Benefits />
      <Steps />
      <Input onSubmit={handleFormSubmit} aiResponse={aiResponse} />
      <section className='flex flex-col md:flex-row w-full mt-5 justify-center'>
        {isFormSubmitted && <Scores results={results} title={'Your Score'} />}
        {aiResponse && (
          <Scores results={aiResponseScore} title={'Improved Score'} />
        )}
      </section>
      {isFormSubmitted && aiResponse === '' ? (
        <div className='mt-4 text-center mb-20'>
          <p className='mb-4 text-lg font-medium text-3xl font-bold text-gray-900 sm:text-4xl'>
            {results.fleschReadingEase <= 70 || aiResponse
              ? 'Want to have a better score?'
              : 'Great job!'}
          </p>
          {results.fleschReadingEase <= 70 && (
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
              onClick={handleAskAi}
            >
              {isLoading ? 'Loading' : 'Improve with AI'}
            </button>
          )}
        </div>
      ) : (
        <div className='mt-4 text-center mb-20'>
          <p className='mb-4 text-lg font-medium text-3xl font-bold text-gray-900 sm:text-4xl'>
            Great job!
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
