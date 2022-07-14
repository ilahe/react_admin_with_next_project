import { END } from "redux-saga";
import { wrapper } from "src/redux/store";
import { setUsersList } from "src/redux/Users/action";
import AdministrationList from "src/components/Administration";

const Users = () => {
    return <AdministrationList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(setUsersList());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);
export default Users;
