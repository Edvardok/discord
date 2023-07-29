import "./barButton.css";

export function BarButton(props) {
  const selectedClass = props.selected ? "mainBarButton-selected" : "";
  const notificationsClass = props.notifications
    ? "mainBarButton-notification"
    : "";
  let className =
    "mainBarButton " +
    props.className +
    " " +
    selectedClass +
    " " +
    notificationsClass;
  return <div className={className}>G</div>;
}
