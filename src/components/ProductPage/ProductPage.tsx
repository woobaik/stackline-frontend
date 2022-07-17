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
    <Row>
      <Col span={4}>
        <ProductLeftCard />
      </Col>
      <Col flex={12}>
        <ProductChart />
        <ProductTable />
      </Col>
    </Row>
  );
}
