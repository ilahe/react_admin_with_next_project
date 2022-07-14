import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Table from "src/components/_common/Table";
import { createAdministration } from "src/constants/path";
import { tableAdminCreate } from "src/helpers/tableRow";

const AdministrationList = ({ usersList, isToogleBlock }) => {
  const list = tableAdminCreate(usersList, isToogleBlock);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Typography component="h1" variant="h4">
            Administrasiya
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Grid container justify="flex-end" alignItems="center">
            <Link href={createAdministration}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginBottom: "15px" }}
              >
                Yarat
              </Button>
            </Link>
          </Grid>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Table list={list} />
        </div>
      </div>
    </div>
  );
};

export default AdministrationList;
