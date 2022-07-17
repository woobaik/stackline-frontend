import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAppSelector } from '../../store/store';

interface DataType {
  retailSales: number;
  retailerMargin: number;
  unitsSold: number;
  weekEnding: string;
  wholesaleSales: number;
}

const dateParser = (str: any): number => {
  return str.split('-').join('');
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Week Ending',
    dataIndex: 'weekEnding',

    // specify the condition of filtering result
    // here is that finding the name started with `value`
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
  },
  {
    title: 'WHOLESALE SALES',
    dataIndex: 'wholesaleSales',

    sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
  },
  {
    title: 'UNIT SOLD',
    dataIndex: 'wholesaleSales',

    sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
  },
  {
    title: 'UNITS SOLD',
    dataIndex: 'unitsSold',

    sorter: (a, b) => a.unitsSold - b.unitsSold,
  },
  {
    title: 'RETAILER MARGIN',
    dataIndex: 'retailerMargin',

    sorter: (a, b) => a.retailerMargin - b.retailerMargin,
  },
];

const ProductTable = () => {
  const { product, loading } = useAppSelector((state) => state.product);

  return (
    <Table
      columns={columns}
      dataSource={product?.sales}
      loading={loading}
      rowKey={`weekEnding`}
    />
  );
};

export default ProductTable;
