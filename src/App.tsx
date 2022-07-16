import React, { useCallback, useEffect } from 'react';

import './App.css';
import { useAppDispatch } from './store/store';
import { getProduct } from './features/products/productSlice';
import { Layout } from 'antd';
import NavBar from './components/NavBar';
import ProductPage from './components/ProductPage/ProductPage';
const { Content, Footer } = Layout;

function App() {
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(async () => {
    await dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return (
    <Layout>
      <NavBar />
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <ProductPage />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Joungwoo Baik @2022 Created for Stackline
      </Footer>
    </Layout>
  );
}

export default App;
