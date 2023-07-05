import { useState } from 'react';
import useFetch from '../package/useFetch';

const MAX_ADVICE_NUM = 200;

const getRandomNum = () => {
  return Math.floor(Math.random() * MAX_ADVICE_NUM);
};

const App = () => {
  const [query, setQuery] = useState(() => getRandomNum());

  const URL = 'https://api.adviceslip.com/advice/' + query;
  const { data, loading, error } = useFetch(URL);

  return (
    <>
      {loading && 'Loading...'}
      {error && 'Error!'}
      {data && data.slip.advice}
      <button onClick={() => setQuery(getRandomNum())}>New Advice</button>
    </>
  );
};

export default App;
