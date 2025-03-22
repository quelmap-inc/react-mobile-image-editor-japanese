import { ComponentType, ReactNode } from "react";
type ToolBarPropsType = {
    children?: ReactNode;
    onSelect?: () => void;
};
declare const Toolbar: ComponentType<ToolBarPropsType>;
export default Toolbar;
