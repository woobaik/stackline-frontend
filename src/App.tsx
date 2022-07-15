import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './store/store';
import { getProduct } from './features/products/productSlice';

function App() {
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(async () => {
    await dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
