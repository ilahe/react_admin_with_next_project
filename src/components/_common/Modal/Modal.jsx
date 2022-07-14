import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "80%",
  },
}));

export default function DialogSelect({
  isOpen,
  blockCustomer,
  openModal,
  blockReasonsList,
  id,
}) {
  const [reason, setReason] = React.useState(1);
  const [desc, setDesc] = React.useState("");
  const classes = useStyles();

  const confirmBlock = () => {
    const reasonData = { reason_id: reason, description: desc };
    blockCustomer({ id, reasonData });
    openModal();
  };
  const onChangeReason = (e) => {
    setReason(e.target.value);
  };
  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  return (
    <Dialog disableEscapeKeyDown open={isOpen} onClose={openModal}>
      <DialogTitle>Blok səbəbi</DialogTitle>
      <DialogContent>
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-dialog-native">Səbəb</InputLabel>
            <Select
              native
              onChange={onChangeReason}
              input={<Input id="demo-dialog-native" />}
            >
              {blockReasonsList.map((reason) => (
                <option value={reason.id}>{reason.title.az}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-multiline-static"
              label="Təsviri"
              multiline
              rows={5}
              variant="outlined"
              onChange={onChangeDesc}
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={openModal} color="primary">
          İmtina
        </Button>
        <Button onClick={confirmBlock} color="primary">
          Qəbul et
        </Button>
      </DialogActions>
    </Dialog>
  );
}
