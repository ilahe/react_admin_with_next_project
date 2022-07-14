import { END } from "redux-saga";
import { wrapper } from "src/redux/store";
import { getPermission } from "src/redux/Permissions/actions";
import CreateCustomers from "src/components/Customers/create";
import { getAllCities } from "src/redux/Customer/action";

const createCustomers = () => {
    return <CreateCustomers />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getAllCities());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);

export default createCustomers;
