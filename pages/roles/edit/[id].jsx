import { END } from "redux-saga";
import { useRouter } from "next/router";
import { wrapper } from "src/redux/store";
import { getPermission } from "src/redux/Permissions/actions";
import { getSingleRole } from "src/redux/Roles/actions";
import CreateRoles from "src/components/Roles/create";

const CreateRole = (props) => {
    const router = useRouter();
    return <CreateRoles isEdit={router.query.id} />;
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, params, ...etc }) => {
            store.dispatch(getPermission());
            store.dispatch(getSingleRole(params.id));
            store.dispatch(END);
            await store.sagaTask.toPromise();
        }
);

export default CreateRole;
