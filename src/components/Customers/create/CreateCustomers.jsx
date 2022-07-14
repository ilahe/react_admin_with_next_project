import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import ImageUpload from "../../_common/ImageUpload";
import { getLanguage } from "src/helpers";
import Button from "src/components/_common/Button";
import { Typography } from "@material-ui/core";
import { validateUsers } from "../../../helpers/validation";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "row",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CreateCustomers = ({
    getCustomersEmail,
    getCustomerCity,
    getCities,
    getCustomersFullName,
    getCustomersPhone,
    getCustomersPassword,
    getCustomersPassConfirmation,
    getCustomersNote,
    getCustomersAddPhone,
    getCustomersWhatsApp,
    getCustomersAddress,
    setCustomersDataByKey,
    setCustomersPost,
    isEdit,
    setCustomersPut,
}) => {
    const [addNote, setAddNote] = useState(false);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        phone: false,
        passwordConfirmation: false,
        phones: false,
        whatsapp: false,
    });
    const t = getLanguage();
    const classes = useStyles();
    const toggleClick = () => {
        setAddNote(!addNote);
    };
    const onChangeData = (e) => {
        console.log(errors);
        if (e.key && e.value) {
            setCustomersDataByKey(e);
        } else {
            const validation = validateUsers(
                e.target?.value,
                e.target?.id,
                getCustomersPassword
            );
            setErrors({ ...errors, [e.target?.id]: validation[e.target?.id] });
            setCustomersDataByKey({
                key: e.target.id,
                value: e.target.value,
            });
        }
    };
    const onSendData = (e) => {
        e.preventDefault();
        if (isEdit) setCustomersPut(isEdit);
        if (!isEdit) setCustomersPost();
    };
    return (
        <form className="create_customer" onSubmit={onSendData}>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        {isEdit ? t.customerEdit : t.createcustomers}
                    </Typography>
                </div>
            </div>
            <div className="form_control">
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-2">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="full_name"
                                    name="Full name"
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    id="full_name"
                                    label="Full Name"
                                    autoFocus
                                    value={getCustomersFullName}
                                    onChange={onChangeData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    id="email"
                                    type={"email"}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={getCustomersEmail}
                                    onChange={onChangeData}
                                    error={errors.email}
                                    helperText={
                                        errors.email ? "Email is wrong" : ""
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    native
                                    variant="outlined"
                                    style={{ minWidth: "100%" }}
                                    inputProps={{
                                        name: "city",
                                        id: "city",
                                    }}
                                    value={getCustomerCity}
                                    onChange={onChangeData}
                                >
                                    {getCities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.title.az}
                                        </option>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    id="address"
                                    label="Adress"
                                    name="address"
                                    autoComplete="address"
                                    value={getCustomersAddress}
                                    onChange={onChangeData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    type={"tel"}
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    value={getCustomersPhone}
                                    onChange={onChangeData}
                                    error={errors.phone}
                                    helperText={
                                        errors.phone ? "Phone is wrong" : ""
                                    }
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-2">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={getCustomersPassword}
                                    onChange={onChangeData}
                                    error={errors.password}
                                    helperText={
                                        errors.password
                                            ? "Passwords to short"
                                            : ""
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="password_confirmation"
                                    name="password_confirmation"
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    type="password"
                                    id="password_confirmation"
                                    label="Confirm Password"
                                    autoFocus
                                    value={getCustomersPassConfirmation}
                                    onChange={onChangeData}
                                    error={errors.password_confirmation}
                                    helperText={
                                        errors.password_confirmation
                                            ? "Passwords not match"
                                            : ""
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    type={"tel"}
                                    id="phones"
                                    label="Additional Number"
                                    name="phones"
                                    autoComplete="phones"
                                    value={getCustomersAddPhone}
                                    onChange={onChangeData}
                                    error={errors.phones}
                                    helperText={
                                        errors.phones ? "Phone is wrong" : ""
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required={!isEdit}
                                    fullWidth
                                    type={"tel"}
                                    id="whatsapp"
                                    label="Whatsapp"
                                    name="whatsapp"
                                    autoComplete="whatsapp"
                                    value={getCustomersWhatsApp}
                                    onChange={onChangeData}
                                    error={errors.whatsapp}
                                    helperText={
                                        errors.whatsapp ? "Phone is wrong" : ""
                                    }
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-2">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ImageUpload />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    btn-size="small"
                                    onClick={toggleClick}
                                    type={"button"}
                                >
                                    {addNote ? "Close Note" : "Add Note"}
                                </Button>
                                {addNote ? (
                                    <TextareaAutosize
                                        id={"note"}
                                        style={{
                                            minWidth: 398,
                                            marginTop: 15,
                                            border: "1px solid rgba(0, 0, 0, 0.23)",
                                            borderRadius: "4px",
                                            opacity: 1,
                                            fontSize: "16px",
                                            padding: "8px",
                                        }}
                                        rowsMin={5}
                                        aria-label="Add Notes"
                                        placeholder="Empty"
                                        value={getCustomersNote}
                                        onChange={onChangeData}
                                    />
                                ) : (
                                    ""
                                )}
                            </Grid>
                        </Grid>
                        <Button
                            style={{ minWidth: 398 }}
                            className={`ui-library-button ${classes.submit}`}
                            variant="contained"
                            color="primary"
                            type={"submit"}
                        >
                            Yarat
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateCustomers;
