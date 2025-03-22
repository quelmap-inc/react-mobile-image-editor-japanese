import { ReactNode } from "react";
export type EditorRefType = {
    exportImage: () => string;
};
export type EditorPropsType = {
    image: string;
    width?: number;
    height?: number;
    toolbarBottom?: ReactNode;
};
export declare const useExport: () => import("react").MutableRefObject<EditorRefType>;
declare const Editor: import("react").ForwardRefExoticComponent<EditorPropsType & import("react").RefAttributes<EditorRefType>>;
export default Editor;
