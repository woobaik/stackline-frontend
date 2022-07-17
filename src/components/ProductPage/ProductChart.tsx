import { DualAxes } from '@ant-design/plots';
import { Card } from 'antd';
import { useAppSelector } from '../../store/store';
import Spinner from '../Common/Spinner';

const ProductChart = () => {
  const { product } = useAppSelector((state) => state.product);

  const config = {
    autoFit: true,
    xField: 'weekEnding',
    yField: ['retailSales', 'wholesaleSales'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: false,
        color: '#5B8FF9',

        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
        lineStyle: {
          lineWidth: 4,
          opacity: 0.5,
        },

        point: {
          shape: 'circle',
          size: 4,
          style: {
            opacity: 0.5,
            stroke: '#5AD8A6',
            fill: '#fff',
          },
        },
      },
    ],
  };

  return product?.sales ? (
    <Card>
      <DualAxes {...config} data={[product.sales, product.sales]} />
    </Card>
  ) : (
    <div>
      <Spinner />
    </div>
  );
};

export default ProductChart;
