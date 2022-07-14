import { isValidElement } from 'react';
// SVG
import { Spin, SpinSmall } from '../../../svg';

const Button = ({ type, children, icon, className = '', ...props }) => {
  // Hide icon when state is loading.
  const iconActive = !props['data-loading'] && isValidElement(icon);

  const classNames = className ? `ui-library-button  ${className}` : `ui-library-button `;

  return (
    <button className={classNames} type={type} data-icon={iconActive ? 'true' : 'false'} btn-text={children ? 'true' : 'false'} {...props}>
      {iconActive && <span className="ui-library-button-icon">{icon}</span>}
      {props['btn-loading'] ? props['btn-size'] ? <SpinSmall /> : <Spin /> : children}
    </button>
  );
};

export default Button;
