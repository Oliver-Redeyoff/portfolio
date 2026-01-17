/// <reference types="react-scripts" />

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.af" {
  const value: string;
  export default value;
}

declare module "react-curved-text" {
  import { ComponentType } from "react";
  
  interface ReactCurvedTextProps {
    width: number;
    height: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    startOffset: number;
    text: string;
    textPathProps?: Record<string, unknown>;
    textProps?: Record<string, unknown>;
  }
  
  const ReactCurvedText: ComponentType<ReactCurvedTextProps>;
  export default ReactCurvedText;
}
