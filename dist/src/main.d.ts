import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import '@webcomponents/custom-elements';
import { VBox } from "./core/elements/layout/VBox";
import { HBox } from "./core/elements/layout/HBox";
import { LoginForm } from "./core/elements/form/loginForm";
import { News } from "./core/elements/list/News";
import { UserCard } from "./core/elements/demo/UserCard";
import { MyUserCard } from "./core/elements/demo/MyUserCard";
import { Navigator } from "./core/elements/navigator/Navigator";
export declare let sidamo: {
    VBox: typeof VBox;
    HBox: typeof HBox;
    LoginForm: typeof LoginForm;
    News: typeof News;
    UserCard: typeof UserCard;
    MyUserCard: typeof MyUserCard;
    Navigator: typeof Navigator;
};
