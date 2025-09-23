import { Context } from "./Context";

export interface State {
    handle(context: Context): void;
}
