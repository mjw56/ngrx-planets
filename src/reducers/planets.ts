//counter.ts
import {Reducer, Action} from '@ngrx/store';
import {
    PLANETS_REQUEST,
    PLANETS_SUCCESS
} from '../constants/planets';

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