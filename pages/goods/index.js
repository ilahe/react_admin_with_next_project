import { END } from "redux-saga";
import wrapper from "src/redux/store";
import NewAds from "src/components/NewAds";
import { getAllCities } from "src/redux/Customer/action";
import { getAllCategories } from "src/redux/Categories/actions";

const Goods = () => <NewAds />;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getAllCities());
            store.dispatch(getAllCategories());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);
export default Goods;
