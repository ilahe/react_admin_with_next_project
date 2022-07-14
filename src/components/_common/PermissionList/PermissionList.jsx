import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Checkbox } from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const PermissionList = ({
    permissionsList,
    onChange,
    defaultPermissions = [],
}) => {
    const [selectedPermissions, setSelectedPermissions] = React.useState([]);
    React.useEffect(() => {
        onChange({
            key: "permissions",
            value: Object.assign({}, [...selectedPermissions]),
        });
    }, [selectedPermissions]);
    const onAddPermission = (e, values) => {
        setSelectedPermissions(values.map((el) => el.id));
    };
    const defaultPremission = () => {
        const defaultPrem = defaultPermissions.map((id) => {
            const filterPrem = permissionsList?.find(
                (permissions) => permissions.id === id
            );
            return filterPrem;
        });
        setSelectedPermissions(defaultPermissions);
        return defaultPrem;
    };

    return (
        <>
            <Autocomplete
                multiple
                id="tags-standard"
                options={permissionsList}
                getOptionLabel={(option) => option?.display_name.az}
                defaultValue={defaultPremission}
                disableCloseOnSelect
                onChange={onAddPermission}
                renderOption={(option, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.display_name.az}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select permissions"
                        placeholder="Permissions"
                        margin="normal"
                    />
                )}
            />
        </>
    );
};

export default PermissionList;
