//counter.ts
import {Reducer, Action} from '@ngrx/store';

export const PLANETS_REQUEST = 'PLANETS_REQUEST';
export const PLANETS_SUCCESS = 'PLANETS_SUCCESS';
export const PLANETS_FAILURE = 'PLANETS_FAILURE';

interface PS {
    isFetching: boolean;
    planets?: string[];
}

const initialState: PS = {
    isFetching: false,
    planets: []
}

export const planets:Reducer<PS> = (state: PS = initialState, action: Action) => {
    switch (action.type) {
        case PLANETS_REQUEST:
            return {
                isFetching: true
            };
        case PLANETS_SUCCESS:
            return {
                isFetching: false,
                planets: action.payload
            };

        default:
            return state;
    }
}