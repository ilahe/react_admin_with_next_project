
const Alert = ({ text, type = 'danger', ...props }) => {
  return (
    <div className="ui-library-alert" type={type} {...props}>
      <p>{text}</p>
    </div>
  );
};
export default Alert;
