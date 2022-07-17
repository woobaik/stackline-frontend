import { Col, Row } from 'antd';
import { useAppSelector } from '../../store/store';
import Spinner from '../Common/Spinner';
import ProductChart from './ProductChart';
import ProductLeftCard from './ProductLeftCard';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const { loading } = useAppSelector((state) => state.product);

  return loading ? (
    <Spinner />
  ) : (
    <Row style={{ marginTop: '15px' }}>
      <Col span={5}>
        <ProductLeftCard />
      </Col>
      <Col span={19}>
        <ProductChart />
        <br />
        <ProductTable />
      </Col>
    </Row>
  );
}
