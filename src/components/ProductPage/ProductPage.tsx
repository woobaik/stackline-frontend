import { Col, Row } from 'antd';
import ProductChart from './ProductChart';
import ProductLeftCard from './ProductLeftCard';
import ProductTable from './ProductTable';

export default function ProductPage() {
  return (
    <Row>
      <Col flex={2}>
        <ProductLeftCard />
      </Col>
      <Col flex={8}>
        <ProductChart />
        <ProductTable />
      </Col>
    </Row>
  );
}
