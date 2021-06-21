import React, { useState, useEffect } from 'react';
import { Loader } from '../../styles';
import { LoaderText } from './styles';

const LoaderComponent = () => {
  const [loadingText, setLoadingText] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingText(
        'Please be patient. First load may take up to 30 seconds due to a fact, that the API is hosted on free tier Heroku.'
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Loader />
      <LoaderText>{loadingText}</LoaderText>
    </>
  );
};

export default LoaderComponent;
