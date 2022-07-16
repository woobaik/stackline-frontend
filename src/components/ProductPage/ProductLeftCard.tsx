import { useAppSelector } from '../../store/store';

import { Button, Card, Divider } from 'antd';
const { Meta } = Card;

const ProductLeftCard = () => {
  const { product } = useAppSelector((state) => state.product);
  console.log('p', product);

  return (
    <Card
      style={{ width: 300, padding: 0, minHeight: '100vh' }}
      cover={<img alt="example" src={product?.image} />}
    >
      <Meta
        style={{ padding: '10px' }}
        title={product?.title}
        description={product?.subtitle}
      />
      <Divider />
      <div className="flexCenter">
        {product?.tags.map((tag, index) => {
          return (
            <Button
              style={{ marginLeft: '10px', marginBottom: '10px' }}
              key={tag + index}
            >
              {tag}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};

export default ProductLeftCard;
