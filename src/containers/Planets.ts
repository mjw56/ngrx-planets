import { Component } from 'angular2/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { PlanetState } from '../reducers/planets';

interface PlanetsContainerVM {
    planets: string[]
}

@Component({
    selector: 'planets-container',
    template: `<h1>Planets Container</h1>`
})
export class PlanetsContainer { 
    viewModel$ : Observable<PlanetsContainerVM>;
    
    constructor(private store: Store<any>) {
        this.viewModel$ = Observable.combineLatest(
            store.select('planets'),
            (planets : PlanetState) => {
                return {
                    planets: planets.planets
                }
            }
        );
    }
}