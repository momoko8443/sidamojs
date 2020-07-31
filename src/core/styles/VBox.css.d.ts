declare namespace VBoxCssNamespace {
  export interface IVBoxCss {
    file: string;
    mappings: string;
    names: string;
    sources: string;
    sourcesContent: string;
    vbox: string;
    version: string;
  }
}

declare const VBoxCssModule: VBoxCssNamespace.IVBoxCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: VBoxCssNamespace.IVBoxCss;
};

export = VBoxCssModule;
