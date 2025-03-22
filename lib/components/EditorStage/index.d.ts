import { ReactNode } from "react";
type EditorRefType = {
    exportImage: () => string;
};
type EditorPropsType = {
    toolbarBottom?: ReactNode;
};
declare const EditorStage: import("react").ForwardRefExoticComponent<EditorPropsType & import("react").RefAttributes<EditorRefType>>;
export default EditorStage;
