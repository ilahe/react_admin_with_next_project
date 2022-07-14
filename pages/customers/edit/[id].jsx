import { END } from "redux-saga";
import { useRouter } from "next/router";
import { wrapper } from "src/redux/store";
import CreateCustomers from "../../../src/components/Customers/create";
import {getAllCities, getSingleCustomer} from "../../../src/redux/Customer/action";

const CreateCustomer = (props) => {
    const router = useRouter();
    return <CreateCustomers isEdit={router.query.id} />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, params, ...etc }) => {
            store.dispatch(getAllCities());
            store.dispatch(getSingleCustomer(params?.id));
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);

export default CreateCustomer;
