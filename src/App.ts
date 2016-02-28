import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'ngrx-planets',
    template: `<h1>Hello, {{name}}!</h1>`
})
export class NgRxPlanets {
    name: string = 'World';
}

bootstrap(NgRxPlanets);