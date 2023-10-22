import classNames from "classnames";
import "./barButton.css";
import PropTypes from "prop-types";

export function BarButton(props) {
  let cssClass = classNames("mainBarButton", props.className, {
    "mainBarButton-selected": props.isSelected,
    "mainBarButton-notification": props.hasNotifications,
    greenFontButton: props.isGreen,
  });
  return (
    <div className={cssClass} style={{ color: props.color }}>
      {props.icon ? props.icon : props.text}
    </div>
  );
}

BarButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  isSelected: PropTypes.bool,
  isGreen: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  className: PropTypes.string,
};
