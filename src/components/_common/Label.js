const Label = ({ id, label, required }) => (
    <label className="ui-library-label" htmlFor={id} label-required={required}>
        {label}
    </label>
);

export default Label;
