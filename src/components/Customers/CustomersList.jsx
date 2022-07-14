import Table from "src/components/_common/Table";
import {Grid, Typography} from "@material-ui/core";
import Modal from "../_common/Modal";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import React from "react";

import {createCustomer} from "../../constants/path";
import {tableCustomersCreate} from "../../helpers/tableRow";

const CustomersList = ({
                           customersList,
                           blockCustomer,
                           unblockCustomer,
                           blockReasonsList,
                       }) => {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(null);
    const openModal = (id) => {
        setId(id);
        setOpen(!open);
    };
    const list = tableCustomersCreate(customersList, openModal, unblockCustomer);
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        Müştərilərin Siyahısı
                    </Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Grid container justify="flex-end" alignItems="center">
                        <Link href={createCustomer}>
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
            <Modal
                isOpen={open}
                openModal={openModal}
                blockCustomer={blockCustomer}
                blockReasonsList={blockReasonsList}
                id={id}
            />
        </div>
    );
};

export default CustomersList;
