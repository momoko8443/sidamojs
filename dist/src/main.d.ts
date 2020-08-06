import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import '@webcomponents/custom-elements';
import { VBox } from "./core/elements/layout/VBox";
import { HBox } from "./core/elements/layout/HBox";
import { LoginForm } from "./core/elements/form/loginForm";
import { News } from "./core/elements/list/News";
export declare let sidamo: {
    VBox: typeof VBox;
    HBox: typeof HBox;
    LoginForm: typeof LoginForm;
    News: typeof News;
};
