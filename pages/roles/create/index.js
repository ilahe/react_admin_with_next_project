import { END } from "redux-saga";
import { wrapper } from "src/redux/store";
import { getPermission } from "src/redux/Permissions/actions";
import CreateRoles from "src/components/Roles/create";

const CreateRole = () => {
    return <CreateRoles />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getPermission());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);

export default CreateRole;
