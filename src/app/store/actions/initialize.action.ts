import { Action } from "@ngrx/store";

export enum EInitializeAction {
    ToggleInitializeStatus = '[Initialize] Toggle Initialize Status'
}

export class ToggleInitializeStatus implements Action {
    public readonly type = EInitializeAction.ToggleInitializeStatus
}

export type InitializeActions = ToggleInitializeStatus