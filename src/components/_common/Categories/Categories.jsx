import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import StyledTreeItem from "./StyledTreeItems";
import { Container, Grid, RootRef } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Categories({ categoriesList }) {
  const classes = useStyles();
  const [tree, updateTree] = useState(categoriesList);
  const handleOnDragEnd = (result) => {
    const items = Array.from(tree);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateTree(items);
  };
  const renderTree = (nodes, provided) => (
    <StyledTreeItem
      provided={provided}
      nodeId={`${nodes.id}`}
      key={nodes.id}
      labelText={nodes.title ? nodes.title : `test-${nodes.id}`}
      labelIcon={
        nodes.children.length > 0 ? (
          <FolderIcon color={"secondary"} />
        ) : (
          <FolderOpenIcon color={"secondary"} />
        )
      }
      color="#1a73e8"
      bgColor="#e8f0fe"
      idEl={nodes.id}
      isActive={nodes.is_active}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );
  return (
    <Container component="main" maxWidth="md">
      <Grid item xs={12}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={"treeView"}>
            {(provided) => (
              <TreeView
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={classes.root}
                defaultExpanded={["root"]}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {tree.map((el, index) => (
                  <Draggable
                    key={el.id}
                    draggableId={el.id.toString()}
                    index={index}
                  >
                    {(provided) => renderTree(el, provided)}
                  </Draggable>
                ))}
              </TreeView>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Container>
  );
}
