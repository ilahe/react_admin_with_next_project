import React from "react";
import PermissionList from "src/components/_common/PermissionList";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {getLanguage} from "src/helpers";
import {AzIcon, RuIcon} from "../../../../svg";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    createInput: {
        "& .MuiInputBase-input": {
            paddingRight: "13px"
        }
    }

}));

const CreateRoles = ({
                         setRolesData,
                         displayNameAz,
                         displayNameRu,
                         name,
                         color,
                         rolePost,
                         rolePut,
                         rolesPremissionsList,
                         isEdit,
                     }) => {
    const classes = useStyles();
    const t = getLanguage();
    const onChangeData = (e) => {
        if (e.key && e.value) {
            setRolesData(e);
        } else {
            setRolesData({
                key: e.target.id,
                value: e.target.value,
            });
        }
    };
    const sendData = (e) => {
        e.preventDefault();
        if (isEdit) rolePut(isEdit);
        if (!isEdit) rolePost();
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        {isEdit ? t.rolEdit : t.rolCreate}
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
                                    id={"az"}
                                    label={"Display name Az"}
                                    name={"Display name Az"}
                                    autoComplete={"Display name Az"}
                                    autoFocus
                                    onChange={onChangeData}
                                    value={displayNameAz}
                                    className={classes.createInput}
                                    InputProps={{
                                        endAdornment: <AzIcon/>
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type={"text"}
                                    required
                                    fullWidth
                                    id={"ru"}
                                    label={"Display name Ru"}
                                    name={"Display name Ru"}
                                    autoComplete={"Display name Ru"}
                                    autoFocus
                                    onChange={onChangeData}
                                    value={displayNameRu}
                                    className={classes.createInput}
                                    InputProps={{
                                        endAdornment: <RuIcon/>
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type={"text"}
                                    required
                                    fullWidth
                                    id={"name"}
                                    label={"Name"}
                                    name={"Name"}
                                    autoComplete={"Name"}
                                    autoFocus
                                    onChange={onChangeData}
                                    value={name}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col-md-6">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type={"color"}
                                    required
                                    fullWidth
                                    id={"color"}
                                    label={"color"}
                                    name={"color"}
                                    autoComplete={"color"}
                                    autoFocus
                                    onChange={onChangeData}
                                    value={color}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PermissionList
                                    onChange={onChangeData}
                                    defaultPermissions={rolesPremissionsList}
                                />
                            </Grid>
                            <Grid item xs={12} justify="flex-end" alignItems="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    style={{marginTop: "15px", float: 'right'}}
                                >
                                    Yadda saxla
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateRoles;
