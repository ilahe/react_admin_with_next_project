import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Link from "next/link";
import {
  editAdministration,
  editCustomer,
  editRoles,
} from "src/constants/path";
import { MAIN } from "src/constants/color";

export const tableRolesCreate = (roles, onDelete) => {
  const column = ["id", "name", "display_name", "action"];
  const rows = roles.map((item) => (
    <TableRow key={item.id}>
      <TableCell align="center">{item.id}</TableCell>
      <TableCell align="center" style={{ color: item.color }}>
        {item.name}
      </TableCell>
      <TableCell align="center">{item.display_name.az}</TableCell>
      <TableCell align="center">
        <Link href={`${editRoles}[id]`} as={`${editRoles}${item.id}`}>
          <EditIcon style={{ color: MAIN, cursor: "pointer" }} />
        </Link>
        <DeleteIcon
          onClick={() => onDelete(item.id)}
          style={{ color: MAIN, cursor: "pointer" }}
        />
      </TableCell>
    </TableRow>
  ));
  return {
    column,
    rows,
  };
};
export const tableAdminCreate = (users, isToogleBlock) => {
  const column = ["id", "email", "full_name", "phone", "roles", "action"];
  const rows = users?.map((item) => (
    <TableRow key={item.id}>
      <TableCell align="center">{item.id}</TableCell>
      <TableCell align="center">{item.email}</TableCell>
      <TableCell align="center">{item.full_name}</TableCell>
      <TableCell align="center">{item.phone}</TableCell>
      <TableCell align="center">
        {item.roles.map((rol, index) => (
          <span key={rol.id} style={{ color: rol.color }}>
            {rol.name}
            {index === item.roles.length - 1 ? "" : ", "}
          </span>
        ))}
      </TableCell>
      <TableCell align="center">
        <Link
          href={`${editAdministration}[id]`}
          as={`${editAdministration}${item.id}`}
        >
          <EditIcon style={{ color: MAIN, cursor: "pointer" }} />
        </Link>
        <span title="Block" onClick={() => isToogleBlock(item.id)}>
          {item?.is_blocked ? <LockOpenIcon /> : <LockIcon />}
        </span>
      </TableCell>
    </TableRow>
  ));
  return {
    column,
    rows,
  };
};

export const tableCustomersCreate = (users, openModal, unblock) => {
  const column = ["id", "email", "full_name", "phone", "last_login", "action"];
  const rows = users?.map((item) => {
    return (
      <TableRow key={item.id}>
        <TableCell align="center">{item.id}</TableCell>
        <TableCell align="center">{item.email}</TableCell>
        <TableCell align="center">{item.full_name}</TableCell>
        <TableCell align="center">{item.phone}</TableCell>
        <TableCell align="center">{item.last_login}</TableCell>
        <TableCell align="center">
          <Link href={`${editCustomer}[id]`} as={`${editCustomer}${item.id}`}>
            <EditIcon style={{ color: MAIN, cursor: "pointer" }} />
          </Link>
          <span
            title="Block"
            style={{ cursor: "pointer" }}
            onClick={() =>
              item?.is_blocked ? unblock(item.id) : openModal(item.id)
            }
          >
            {item?.is_blocked ? <LockIcon /> : <LockOpenIcon />}
          </span>
        </TableCell>
      </TableRow>
    );
  });
  return {
    column,
    rows,
  };
};

export const tableCategoriesCreate = (categories, child, parent) => {
  const column = ["name", "action"];
  const rows = categories?.map((item, index) => (
    <TableRow key={index}>
      <TableCell align="center">{item}</TableCell>
      {child && <TableCell align="center">{item[parent].children}</TableCell>}
    </TableRow>
  ));
  return {
    column,
    rows,
  };
};
