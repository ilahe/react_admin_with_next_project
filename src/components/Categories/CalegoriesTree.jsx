import Categories from "../_common/Categories";
import { Typography } from "@material-ui/core";
import React from "react";

const CategoriesList = ({ categoriesList }) => {
  return (
    <div>
      <Typography component="h1" variant="h4">
        Объявления / Категории
      </Typography>
      <Categories categoriesList={categoriesList} />
    </div>
  );
};

export default CategoriesList;
