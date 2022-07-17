import { useAppSelector } from '../../store/store';
import { Button, Card, Divider } from 'antd';
import ReactHelmet from '../utils/ReactHelmet/ReactHelmet';

const { Meta } = Card;

const ProductLeftCard = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <>
      <ReactHelmet title={`StackLine | ${product?.title}`} />
      <Card
        style={{ padding: 0, height: '100%' }}
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
    </>
  );
};

export default ProductLeftCard;
