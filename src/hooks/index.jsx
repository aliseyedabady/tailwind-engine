import { Link } from "react-router-dom";
import Add from "../components/Add";
import { useMainContext } from "../context";

export const useEngine = () => {
  const { state, dispatch } = useMainContext();
  const renderChildren = element => {
    if (element?.children?.length) {
      return element.children.map(item => {
        return renderElement(item);
      });
    } else {
      if (element.value) {
        return element.value;
      } else {
        return <></>;
      }
    }
  };
  const renderElement = element => {
    switch (element.tag) {
      case "div":
        return (
          <div className={element.classNames}>{renderChildren(element)}</div>
        );
      case "span":
        return (
          <span className={element.classNames}>{renderChildren(element)}</span>
        );
      case "section":
        return (
          <section className={element.classNames}>
            {renderChildren(element)}
          </section>
        );
      case "input":
        return <input className={element.classNames} />;
      case "Link":
        return (
          <Link className={element.classNames}>
            {element.value}
            {renderChildren(element)}
          </Link>
        );
      case "button":
        return (
          <button className={element.classNames}>
            {renderChildren(element)}
          </button>
        );
      case "img":
        return <img className={element.classNames} alt="" src={element.src} />;
      default:
        break;
    }
  };
  const render = () => {
    if (state?.elements?.length > 0) {
      return state?.elements?.map(e => {
        return renderElement(e);
      });
    } else {
      return (
        <div className="">
          <Add />
        </div>
      );
    }
  };
  return { state, dispatch, render };
};
