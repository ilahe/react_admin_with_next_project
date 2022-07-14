import { END } from "redux-saga";
import { wrapper } from "src/redux/store";
import { getPermission } from "src/redux/Permissions/actions";
import CreateUsers from "src/components/Administration/create";
import { getAllRoles } from "src/redux/Roles/actions";

const CreateUser = () => {
    return <CreateUsers />;
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, ...etc }) => {
            store.dispatch(getPermission());
            store.dispatch(getAllRoles());
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);
export default CreateUser;
