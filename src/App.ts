import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { provideStore } from '@ngrx/store';
import { planets } from './reducers/planets';

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
          provideStore(
            { planets }, 
            { isFetching: false, planets: [] }
          ) 
      ]
  )
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
