import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { provideStore } from '@ngrx/store';
import { planets } from './reducers/planets';
import { APP_ACTIONS } from "./actions/index";

@Component({
    selector: 'ngrx-planets',
    template: `<h1>Hello, {{name}}!</h1>`
})
export class NgRxPlanets {
    name: string = 'World';
}

export function main() {
  return bootstrap(
      NgRxPlanets, 
      [
        APP_ACTIONS, 
        provideStore(
          { planets }, 
          { isFetching: false, planets: [] }
        ) 
      ]
  )
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
