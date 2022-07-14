import DropDown from "src/components/_common/DropDown";

const CategoriesDropDown = ({ categoriesList }) => {
    const categorie = categoriesList.map((item) => item.children);
    console.log(categorie);
    return <>1</>;
};

export default CategoriesDropDown;
