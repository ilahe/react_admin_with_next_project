import Table from "src/components/_common/Table";
import {Grid, Typography} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Button from "@material-ui/core/Button";
import {createRole} from "src/constants/path";
import {tableRolesCreate} from "src/helpers/tableRow";
import {getLanguage} from "src/helpers";

const RolesList = ({roleList, roleDelete}) => {
    const list = tableRolesCreate(roleList, roleDelete);
    const t = getLanguage();
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        {t.roles}
                    </Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Grid container justify="flex-end" alignItems="center">
                        <Link href={createRole}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{marginBottom: "15px"}}
                            >
                                Yarat
                            </Button>
                        </Link>
                    </Grid>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Table list={list}/>
                </div>
            </div>
        </div>
    );
};

export default RolesList;
