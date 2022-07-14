import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { arrayItemConvertBase64 } from "src/helpers/imageUpload";
import { MAIN } from "src/constants/color";
import Thumbs from "./Thumbs";
import Edit from "./Thumbs/Edit";
import DragAndDrop from "./DragAndDrop";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    dropzone: {
        border: `3px solid ${MAIN}`,
        borderRadius: "15px",
        width: "100%",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "1.2em",
        padding: "10px",
    },
    download: {
        fontSize: "2em",
        color: MAIN,
    },
    thumbsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
    },
    DragDrop: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: 15,
    },
    edit: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100vh",
    },
}));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DropZoneImage = (props) => {
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const [edit, setEdit] = useState(null);
    useEffect(
        () => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: async (acceptedFiles) => {
            const arrFile = [];
            for (let i = 0; i < acceptedFiles.length; i++) {
                let check;
                files.forEach((item) => {
                    if (item.name === acceptedFiles[i].name) {
                        check = true;
                    }
                });
                if (!check) {
                    const img = await arrayItemConvertBase64(acceptedFiles[i]);
                    arrFile.push(img);
                }
            }
            const newFiles = [...files, ...arrFile];
            setFiles(newFiles);
        },
    });
    const onEditOpen = (file) => {
        setEdit(file);
    };
    const onEditClose = () => {
        setEdit(null);
    };
    const sortFile = (array) => {
        setFiles(array);
    };
    return (
        <section className={classes.root}>
            <div {...getRootProps({ className: classes.dropzone })}>
                <input {...getInputProps()} />
                <p>
                    Выберите фотографии на Вашем компьютере Размер одной
                    фотографий не должен превышать 15 МБ.
                </p>
                <ArrowDropDownCircleIcon className={classes.download} />
            </div>
            <DragAndDrop
                files={files}
                onEdit={onEditOpen}
                sortFile={sortFile}
            />

            {/* <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={classes.DragDrop}
                        >
                            {files.map((file, index) => (
                                <Draggable
                                    key={file.name}
                                    draggableId={file.name}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Thumbs
                                                file={file}
                                                onEdit={onEditOpen}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext> */}
            {edit ? (
                <div className={classes.edit}>
                    <Edit file={edit} onEditClose={onEditClose} />
                </div>
            ) : null}
        </section>
    );
};

export default DropZoneImage;
