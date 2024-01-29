import GeneralInitialStates from "../../initialStates/general"
import { GeneralTypes } from "../../types/general"

const GeneralReducer = (state = GeneralInitialStates, action) => {
    switch (action.type) {

        case GeneralTypes.GET_LANDING:
            return {
                ...state,
                landing: action.payload
            }   

        default: return state;
    }

}

export default GeneralReducer