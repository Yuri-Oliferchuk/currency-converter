import { EInitializeAction, InitializeActions } from "../actions/initialize.action"
import { IInitialState, initialInitializeState } from "../state/initialize.state"

export const initializeReducers = (
    state = initialInitializeState,
    action: InitializeActions
):IInitialState => {
    switch(action.type) {
        case EInitializeAction.ToggleInitializeStatus: {
            return {
                ...state,
                isInitialize: state.isInitialize ? false : true
            }
        }
        default: {
            return state
        }
    }
}