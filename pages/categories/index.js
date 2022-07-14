import { END } from "redux-saga";
import CategoriesList from "src/components/Categories";
import wrapper from "src/redux/store";
import { getAllCategories } from "src/redux/Categories/actions";

const Categories = () => {
    return <CategoriesList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getAllCategories());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);
export default Categories;
