import MultipleImageUpload from "src/components/_common/MultipleImageUpload";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DropZoneImage from "../src/components/_common/DropZoneImage";
import Button from "src/components/_common/Button";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {Grid} from "@material-ui/core";

const checkTextarea = (val) => {
    if (isEdit) userPut(isEdit);
    if (!isEdit) userPost();
    if (val !== '' && !$(this).hasClass('not-empty')) {
        $(this).addClass('not-empty');
    } else if ($(this).val() === '') {
        $(this).removeClass('not-empty');
    }
};

const CreateAds = () => {
    return <div className="createads">
        <div className="row">
            <div className="col-md-12">
                <Typography component="h1" variant="h4">
                    Elan əlavə et
                </Typography>
            </div>
        </div>
        <form>
            <div className="row">
                <div className="col-md-6">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                type={"text"}
                                required
                                fullWidth
                                id={"title"}
                                label={"Title"}
                                name={"title"}
                                autoComplete={"title"}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                native
                                variant="outlined"
                                style={{minWidth: '100%'}}
                                // value={state.age}
                                // onChange={handleChange}
                                inputProps={{
                                    name: "age",
                                    id: "age-native-simple",
                                }}
                            >
                                <option value={5}>Category</option>
                                <option value={10}>Baku</option>
                                <option value={20}>Sumqayit</option>
                                <option value={30}>Qax</option>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                type={"text"}
                                required
                                fullWidth
                                id={"city"}
                                label={"City"}
                                name={"city"}
                                autoComplete={"city"}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                native
                                variant="outlined"
                                style={{minWidth: '100%'}}
                                // value={state.age}
                                // onChange={handleChange}
                                inputProps={{
                                    name: "age",
                                    id: "age-native-simple",
                                }}
                            >
                                <option value={5}>Region</option>
                                <option value={10}>Baku</option>
                                <option value={20}>Sumqayit</option>
                                <option value={30}>Qax</option>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <div id="cancellationNotesContainer" className="form-group full customMDTextarea">
                                <textarea maxLength="255" id="cancellationNotes" name="cancellationNotes"></textarea>
                                <label>Description</label>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="col-md-6">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                type={"text"}
                                required
                                fullWidth
                                id="videolink"
                                label="Video link"
                                name="videolink"
                                autoComplete="videolink"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div id="cancellationNotesContainer" className="form-group full customMDTextarea">
                                <textarea maxlength="255" id="cancellationNotes" name="cancellationNotes"></textarea>
                                <label>Note</label>
                            </div>
                        </Grid>
                        <hr/>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="user"
                                label="User"
                                name="user"
                                autoComplete="user"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p style={{fontSize: '20px', color: '#B90D5D'}}>Publication<span>*</span>:</p>
                            <p style={{marginTop: '7px'}}>от 22.06.2021 до 2021-09-20 09:53:42</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="row" style={{marginTop: '15px'}}>
                <div className="col-md-12">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <DropZoneImage/>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="button-group" style={{float: 'right'}}>
                        <Button variant="contained" style={{marginRight: '15px'}}
                                color="primary">Save
                        </Button>
                        <Button variant="contained"
                                btn-type='success'
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    </div>;
};
export default CreateAds;
