import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CachedIcon from "@material-ui/icons/Cached";
import getCroppedImg from "./cropImage";
import { getBase64FromUrl } from "src/helpers/imageUpload";
import { MAIN } from "src/constants/color";

const useStyles = makeStyles((theme) => ({
    root: {},
    cropContainer: {
        position: "relative",
        width: 500,
        height: 200,
        background: "#333",
        [theme.breakpoints.up("sm")]: {
            height: 400,
        },
    },
    cropButton: {
        flexShrink: 0,
        marginLeft: 16,
        color: MAIN,
    },
    controls: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
        },
    },
    sliderContainer: {
        display: "flex",
        flex: "1",
        alignItems: "center",
    },
    sliderLabel: {
        [theme.breakpoints.down("xs")]: {
            minWidth: 65,
        },
    },
    slider: {
        padding: "22px 0px",
        marginLeft: 32,
        color: MAIN,
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
            margin: "0 16px",
        },
    },
    close: {
        position: "absolute",
        top: -30,
        right: -10,
        fontSize: "2em",
        cursor: "pointer",
        color: MAIN,
    },
}));

const Edit = ({ file, onEditClose }) => {
    const classes = useStyles();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);
    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                file.base64,
                croppedAreaPixels,
                rotation
            );
            console.log("donee", { croppedImage });
            const img = await getBase64FromUrl(croppedImage);
            setCroppedImage(croppedImage);
            console.log(croppedImage, img);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels, rotation]);

    return (
        <div className={classes.root}>
            <div className={classes.cropContainer}>
                <Cropper
                    image={file?.base64}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className={classes.controls}>
                <div className={classes.sliderContainer}>
                    <Typography
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        Zoom
                    </Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        classes={{ root: classes.slider }}
                        onChange={(e, zoom) => setZoom(zoom)}
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Typography
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        Rotation
                    </Typography>
                    <CachedIcon
                        onClick={() => {
                            setRotation(
                                rotation + 90 >= 360 ? 0 : rotation + 90
                            );
                        }}
                    />
                </div>
                <Button
                    onClick={showCroppedImage}
                    variant="contained"
                    color={MAIN}
                    classes={{ root: classes.cropButton }}
                >
                    Save
                </Button>
            </div>
            <HighlightOffIcon className={classes.close} onClick={onEditClose} />
        </div>
    );
};

export default Edit;
