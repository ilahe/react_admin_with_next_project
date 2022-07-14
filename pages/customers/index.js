import { END } from "redux-saga";
import wrapper from "src/redux/store";
import { getBlockReason, getCustomerList } from "src/redux/Customer/action";
import CustomersList from "src/components/Customers";

const Customers = () => {
  return <CustomersList />;
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res, ...etc }) => {
    store.dispatch(getCustomerList());
    store.dispatch(getBlockReason());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
export default Customers;
