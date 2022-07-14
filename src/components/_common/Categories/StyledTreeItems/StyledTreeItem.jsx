import { makeStyles } from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import LabelIcon from "@material-ui/icons/Label";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import TableChartIcon from "@material-ui/icons/TableChart";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import LabelOffIcon from "@material-ui/icons/LabelOff";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    width: "100%",
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
  content: {
    fontWeight: theme.typography.fontWeightLight,
    borderBottom: "1px solid grey",
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightMedium,
      borderBottom: "1px solid grey",
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {
    borderBottom: "1px solid transparent",
  },
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
    maxWidth: "50%",
    "& button": {
      border: "none",
      outline: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "0",
    },
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    "& button": {
      border: "none",
      outline: "none",
      background: "transparent",
      cursor: "pointer",
      marginTop: 0,
      borderBottom: "1px solid grey",
      height: "32px",
      borderRadius: "0",
    },
  },
  withChildren: {
    position: "absolute!important",
    top: "1px!important",
    right: "0!important",
  },
}));

function StyledTreeItem({
  labelText,
  labelIcon,
  labelInfo,
  color,
  idEl,
  bgColor,
  isActive,
  provided,
  showChild,
  ...props
}) {
  const classes = useTreeItemStyles();
  const [labelClick, setLabelClick] = useState(false);
  const onLabel = () => {
    setLabelClick(!labelClick);
  };
  return (
    <div
      className={classes.itemContainer}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      ref={provided?.innerRef}
    >
      <TreeItem
        label={
          <div className={classes.labelRoot}>
            {labelIcon}
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              99
            </Typography>
          </div>
        }
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor,
        }}
        classes={{
          root: classes.root,
          expanded: classes.expanded,
          selected: classes.selected,
          label: classes.label,
          content: classes.content,
        }}
        {...props}
      />
      <div className={classes.withChildren}>
        <Button>
          {isActive ? (
            <CheckBoxIcon fontSize={"small"} color={"secondary"} />
          ) : (
            <CancelIcon fontSize={"small"} color={"error"} />
          )}
        </Button>
        <Button>
          <TableChartIcon fontSize={"small"} color={"secondary"} />
        </Button>
        <Button>
          <EditIcon fontSize={"small"} color={"secondary"} />
        </Button>
        <Button>
          <AddBoxIcon fontSize={"small"} color={"secondary"} />
        </Button>
      </div>
    </div>
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default StyledTreeItem;
