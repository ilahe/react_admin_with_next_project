import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Submit = () => {
    return (
        <Grid container justify="flex-start" alignItems="center">
            <Button
                type="submit"
                variant="contained"
                style={{
                    margin: "15px",
                    background: "#2F7AB3",
                    color: "white",
                }}
            >
                Save
            </Button>
            <Button
                type="submit"
                variant="contained"
                style={{
                    margin: "15px",
                    background: "#1EB759",
                    color: "white",
                }}
            >
                Save & Approve
            </Button>
            <Button
                type="submit"
                variant="contained"
                style={{
                    margin: "15px",
                    background: "#DC354A",
                    color: "white",
                }}
            >
                Save & Reject
            </Button>
            <Button
                type="submit"
                variant="contained"
                style={{
                    margin: "15px",
                    background: "#ECC73C",
                    color: "white",
                }}
            >
                Save & Expire
            </Button>
        </Grid>
    );
};

export default Submit;
