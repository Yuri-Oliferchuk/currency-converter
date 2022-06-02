import { createSelector } from "@ngrx/store"
import { IAppState } from "../state/app.state"
import { IInitialState } from "../state/initialize.state"

const selectInitialize = (state: IAppState) => state.initialize

export const selectInitialization = createSelector(
    selectInitialize,
    (state: IInitialState) => state.isInitialize
)