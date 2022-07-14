import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PermissionList from "src/components/_common/PermissionList";
import RolesList from "src/components/_common/RolesList";
import { useState } from "react";
import { validateUsers } from "src/helpers/validation";

const CreateUsers = ({
    onChangeUsersData,
    getUserEmail,
    getUserFullName,
    getUserUsername,
    getUserPhone,
    getUserPassword,
    getUserPassConfirmation,
    adminsPremissionsList,
    getUserRolesList,
    userPost,
    userPut,
    isEdit,
}) => {
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        phone: false,
        passwordConfirmation: false,
    });
    const sendData = (e) => {
        e.preventDefault();
        if (isEdit) userPut(isEdit);
        if (!isEdit) userPost();
    };

    const onHandleClick = (e) => {
        const validation =validateUsers(e.target?.value, e.target?.id,getUserPassword);
        setErrors({...errors, [e.target?.id]:validation[e.target?.id]});
        if (e.key && e.value) {
            onChangeUsersData(e);
        } else {
            onChangeUsersData({ key: e.target.id, value: e.target.value });
        }
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        Create User
                    </Typography>
                </div>
            </div>

            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col-md-6">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type={"text"}
                                    required
                                    fullWidth
                                    id={"full_name"}
                                    label={"Full name"}
                                    name={"fullName"}
                                    autoComplete={"fullName"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserFullName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.email}
                                    variant="outlined"
                                    margin="normal"
                                    type={"email"}
                                    required
                                    fullWidth
                                    id={"email"}
                                    label={"Email"}
                                    name={"Email"}
                                    autoComplete={"Email"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserEmail}
                                    helperText={errors.email ? "Email is wrong" : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type={"text"}
                                    required
                                    fullWidth
                                    id={"username"}
                                    label={"Username"}
                                    name={"userName"}
                                    autoComplete={"Username"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserUsername}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.phone}
                                    variant="outlined"
                                    margin="normal"
                                    type={"tel"}
                                    required
                                    fullWidth
                                    id={"phone"}
                                    label={"Phone"}
                                    name={"phone"}
                                    autoComplete={"Phone"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserPhone}
                                    helperText={errors.phone ? "Phone is wrong" : ""}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col-md-6">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.password}
                                    variant="outlined"
                                    margin="normal"
                                    type={"password"}
                                    required={!isEdit}
                                    fullWidth
                                    id={"password"}
                                    label={"Password"}
                                    name={"password"}
                                    autoComplete={"Password"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserPassword}
                                    helperText={errors.password ? "Password is wrong" : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.passwordConfirmation}
                                    variant="outlined"
                                    margin="normal"
                                    type={"password"}
                                    required={!isEdit}
                                    fullWidth
                                    id={"password_confirmation"}
                                    label={"Password confirmation"}
                                    name={"passwordConfirmation"}
                                    autoComplete={"Password confirmation"}
                                    autoFocus
                                    onChange={onHandleClick}
                                    value={getUserPassConfirmation}
                                    helperText={
                                        errors.passwordConfirmation
                                            ? "Password is not match"
                                            : ""
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PermissionList
                                    onChange={onHandleClick}
                                    defaultPermissions={adminsPremissionsList}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RolesList
                                    onChangeUsersData={onHandleClick}
                                    defaultPermissions={getUserRolesList}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Grid container justify="flex-end" alignItems="center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                style={{ marginTop: "15px" }}
                            >
                                Yadda saxla
                            </Button>
                        </Grid>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateUsers;
