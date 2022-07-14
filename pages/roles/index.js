import { END } from "redux-saga";
import  wrapper  from "src/redux/store";
import RolesList from "src/components/Roles";
import { getAllRoles } from "src/redux/Roles/actions";

const Roles = () => {
    return <RolesList />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getAllRoles());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);
export default Roles;
