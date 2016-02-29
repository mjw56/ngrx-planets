import {Injectable} from "angular2/core";
import {Store, Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";
import {
    PLANETS_REQUEST,
    PLANETS_SUCCESS,
    PLANETS_FAILURE
} from '../constants/planets';

@Injectable()
export class PlanetsActions {
    private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});
    private id : number = 1;
    constructor(private store : Store<any>){
        const fetchPlanets = this.actions$
            .filter((action : Action) => action.type === PLANETS_REQUEST);

        Observable
            .merge(fetchPlanets)
            .subscribe((action : Action) => store.dispatch(action));
    }

    fetchPlanets(){
        this.actions$.next({type: PLANETS_REQUEST, payload: { isFetching: true, planets: [] }});
    }
}