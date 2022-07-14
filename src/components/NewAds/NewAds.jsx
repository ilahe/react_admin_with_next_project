import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Submit from "./Submit";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import BlockThree from "./BlockThree";
import DropZoneImage from "../_common/DropZoneImage";

const NewAds = () => {
    return (
        <>
            <Submit />
            <form>
                <Grid
                    container
                    spacing={2}
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={3} container>
                        <BlockOne />
                    </Grid>

                    <Grid item xs={2} container>
                        <BlockTwo />
                    </Grid>
                    <Grid item xs={3} container justify="flex-start">
                        <BlockThree />
                    </Grid>
                    <Grid item xs={4}>
                        <DropZoneImage />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default NewAds;
