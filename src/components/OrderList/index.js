import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItem from '../OrderItem';
import { Title, Li } from './styles';
import { Button } from '../../containers/LoginPage/styles';
import NavLoader from '../NavLoader';

const OrderList = () => {
  const [loader, setLoader] = useState(true);
  const [orders, setOrders] = useState([]);
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { data } = await axios.get(
        'https://frontend-labs.herokuapp.com/orders/count'
      );
      setCount(data);
    };

    const fetchOrders = async () => {
      const { data } = await axios.get(
        `https://frontend-labs.herokuapp.com/orders?_limit=5&_start=${start}`
      );
      setOrders(orders.concat(data));
    };

    setLoader(true);
    fetchOrders();
    Promise.all([fetchOrders(), fetchCount()]).then((res) => {
      setLoader(false);
    });

    // eslint-disable-next-line
  }, [start]);

  return (
    <>
      <Title>YOUR ORDERS</Title>
      <ul>
        {orders.map((item) => (
          <Li key={item.id}>
            <OrderItem
              key={item.id}
              id={item.id}
              totalPrice={item.totalPrice}
              status={item.status}
              shippingPrice={item.shippingPrice}
              products={item.products}
            />
          </Li>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {loader ? (
            <NavLoader />
          ) : (
            orders.length !== count && (
              <Button type='submit' onClick={() => setStart(start + 5)}>
                LoadMore
              </Button>
            )
          )}
        </div>
      </ul>
    </>
  );
};

export default OrderList;
