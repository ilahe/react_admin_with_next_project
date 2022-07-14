import { END } from "redux-saga";
import { useRouter } from "next/router";
import { wrapper } from "src/redux/store";
import { getPermission } from "src/redux/Permissions/actions";
import { getAllRoles } from "src/redux/Roles/actions";
import { getSingleAdmin } from "src/redux/Users/action";
import CreateUsers from "src/components/Administration/create";

const CreateAdministration = (props) => {
    const router = useRouter();
    return <CreateUsers isEdit={router.query.id} />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, params, ...etc }) => {
            store.dispatch(getPermission());
            store.dispatch(getAllRoles());
            store.dispatch(getSingleAdmin(params.id));
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);

export default CreateAdministration;
