import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Checkbox } from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const RolesList = ({
    rolesList,
    onChangeUsersData,
    defaultPermissions = [],
}) => {
    console.log(rolesList);
    const [selectedRoles, setSelectedRoles] = React.useState([]);
    React.useEffect(() => {
        onChangeUsersData({
            key: "roles",
            value: Object.assign({}, [...selectedRoles]),
        });
    }, [selectedRoles]);
    const onAddRoles = (e, values) => {
        setSelectedRoles(values.map((el) => el.id));
    };
    const defaultPremission = () => {
        const defaultPrem = defaultPermissions.map((id) => {
            const filterPrem = rolesList?.find((roles) => roles.id === id);
            return filterPrem;
        });
        setSelectedRoles(defaultPermissions);
        return defaultPrem;
    };
    return (
        <>
            <Autocomplete
                multiple
                id="tags-standard"
                options={rolesList}
                disableCloseOnSelect
                getOptionLabel={(option) => option?.name}
                defaultValue={defaultPremission}
                onChange={onAddRoles}
                renderOption={(option, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select Roles"
                        placeholder="Select Roles"
                        margin="normal"
                    />
                )}
            />
        </>
    );
};

export default RolesList;
