import React from "react";
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import Thumbs from "../Thumbs";

const StyledItem = styled.div`
    position: relative;
    z-index: 0;
    float: left;
    margin: 8px;
    width: 80px;
    height: 80px;
`;

const StyledContainer = styled.div`
    background-color: #ddd;
    white-space: nowrap;
    &:after {
        content: "";
        clear: both;
        display: table;
    }
`;
const SortableList = SortableContainer((props) => {
    const { items, onEdit, ...restProps } = props;
    return (
        <StyledContainer>
            {items.map((item, index) => (
                <SortableItem
                    key={item.name}
                    index={index}
                    value={item}
                    onEdit={onEdit}
                    {...restProps}
                />
            ))}
        </StyledContainer>
    );
});

const SortableItem = SortableElement((props) => {
    const { value: item, onEdit } = props;
    const onClickEdit = () => {
        onEdit(item);
    };
    return (
        <StyledItem>
            <div>
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: 1,
                    }}
                >
                    <EditIcon onClick={onClickEdit} />
                </div>
                <Handle file={item} onEdit={onEdit} />
            </div>
        </StyledItem>
    );
});

const Handle = SortableHandle(({ tabIndex, file, onEdit }) => {
    return <Thumbs tabIndex={tabIndex} file={file} onEdit={onEdit} />;
});

const DragAndDrop = ({ files, onEdit, sortFile }) => {
    const onSortEnd = ({ oldIndex, newIndex }) => {
        sortFile(arrayMove(files, oldIndex, newIndex));
    };

    return (
        <>
            <SortableList
                shouldUseDragHandle={true}
                useDragHandle
                axis="xy"
                items={files}
                onEdit={onEdit}
                onSortEnd={onSortEnd}
            />
        </>
    );
};

export default DragAndDrop;
