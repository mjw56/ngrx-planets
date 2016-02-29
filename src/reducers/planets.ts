//counter.ts
import {Reducer, Action} from '@ngrx/store';
import {
    PLANETS_REQUEST,
    PLANETS_SUCCESS
} from '../constants/planets';

export interface PlanetState {
    isFetching: boolean;
    planets?: string[];
}

const initialState: PlanetState = {
    isFetching: false,
    planets: []
}

export const planets:Reducer<PlanetState> = (state: PlanetState = initialState, action: Action) => {
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