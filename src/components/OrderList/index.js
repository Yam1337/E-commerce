import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItem from '../OrderItem';
import { Title, Li, CenterBox, Error, Span } from './styles';
import { Button } from '../../containers/LoginPage/styles';
import NavLoader from '../NavLoader';

const OrderList = () => {
  const [loader, setLoader] = useState(true);
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { data } = await axios.get(
          'https://e-commerce-mock-api.herokuapp.com/orders/count'
        );
        setCount(data);
      } catch (err) {
        setError('Something went wrong, try again later!');
      }
    };

    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `https://e-commerce-mock-api.herokuapp.com/orders`
        );
        setOrders(orders.concat(data));
      } catch (err) {
        setError('Something went wrong, try again later!');
      }
    };

    setLoader(true);
    fetchOrders();
    Promise.all([fetchOrders(), fetchCount()]).then((res) => {
      setLoader(false);
    });
    // eslint-disable-next-line
  }, [refresh]);

  return (
    <>
      <Title>YOUR ORDERS</Title>
      {error === '' ? (
        <ul>
          {orders?.map((item, index) => (
            <Li key={Math.random()}>
              <OrderItem
                key={item.id}
                id={index + 1}
                totalPrice={item?.totalPrice}
                status={item?.status}
                shippingPrice={item?.shippingPrice}
                products={item?.products}
              />
            </Li>
          ))}
          <CenterBox>
            <Span>
              {orders.length}/{count}
            </Span>
            {loader ? (
              <NavLoader />
            ) : (
              orders.length !== count && (
                // <Button type='submit' onClick={() => setRefresh(!refresh)}>
                //   LoadMore
                // </Button>
                <></>
              )
            )}
          </CenterBox>
        </ul>
      ) : (
        <Error aria-live='polite'>{error}</Error>
      )}
    </>
  );
};

export default OrderList;
