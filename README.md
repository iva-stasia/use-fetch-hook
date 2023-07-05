# useFetch React Hook

A simple React hook for handling data fetching.

## Install

`$ npm install @iva-stasia/use-fetch-hook`

## Usage example

You can see how this code works [here](https://stackblitz.com/edit/use-fetch-hook-example?file=src%2FApp.js).

```javascript
import { useState } from 'react';
import useFetch from '@iva-stasia/use-fetch-hook';

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
```

## API

### Parameters:

| Parameter | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| URL       | String | Yes      | The URL to fetch data from. |

### Returns

The hook returns an object that contains the following properties:

| Parameter | Type               | Description                                                                    |
| --------- | ------------------ | ------------------------------------------------------------------------------ |
| data      | any \| undefined   | The fetched data if the fetch was successful, otherwise `undefined`.           |
| loading   | boolean            | A value that represents whether a request is pending.                          |
| error     | error \| undefined | The error object if an error occurred during the fetch, otherwise `undefined`. |
