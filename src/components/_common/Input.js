import { isValidElement } from 'react';

const Input = ({ icon, ...props }) => {
    console.log(props);
  return (
    <div className="ui-library-input">
      {icon && <span className="ui-library-input-icon">{icon}</span>}
      <input input-icon={isValidElement(icon) ? 'true' : 'false'} {...props} />
    </div>
  );
};
export default Input;
