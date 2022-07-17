import { Card, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAppSelector } from '../../store/store';

interface DataType {
  retailSales: number;
  retailerMargin: number;
  unitsSold: number;
  weekEnding: string;
  wholesaleSales: number;
}

// the provided data type is string, but I belive dateParser will work since its a date. we can always change it to new Date() function.
const dateParser = (str: any): number => {
  return str.split('-').join('');
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Week Ending',
    dataIndex: 'weekEnding',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => {
      return dateParser(a.weekEnding) - dateParser(b.weekEnding);
    },
    sortDirections: ['descend'],
  },
  {
    title: 'RETAIL SALES',
    dataIndex: 'retailSales',
    sorter: (a, b) => a.retailSales - b.retailSales,
    render(value) {
      return (
        <span>{`$ ${value
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
      );
    },
  },
  {
    title: 'WHOLESALE SALES',
    dataIndex: 'wholesaleSales',
    sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
    render(value) {
      return (
        <span>{`$ ${value
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
      );
    },
  },
  {
    title: 'UNIT SOLD',
    dataIndex: 'wholesaleSales',
    sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
  },

  {
    title: 'RETAILER MARGIN',
    dataIndex: 'retailerMargin',
    sorter: (a, b) => a.retailerMargin - b.retailerMargin,
    render(value) {
      return (
        <span>{`$ ${value
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</span>
      );
    },
  },
];

const ProductTable = () => {
  const { product, loading } = useAppSelector((state) => state.product);

  return (
    <Card style={{ marginLeft: '10px' }}>
      <Table
        columns={columns}
        dataSource={product?.sales}
        loading={loading}
        // The given data didn't have a key or Id, so I assumed weekEnding data is unique.
        rowKey={`weekEnding`}
      />
    </Card>
  );
};

export default ProductTable;
