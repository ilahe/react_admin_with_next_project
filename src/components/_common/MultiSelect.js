import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const MultiSelect = ({values}) =>{

    return (
        <Autocomplete
            multiple
            id="tags-standard"
            options={values}
            getOptionLabel={(option) => option.title}
            defaultValue={[values[0]]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Select permissions"
                    placeholder="Permissions"
                />
            )}
        />
    )
}

export default MultiSelect;
