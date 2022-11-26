import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
    @Output() setInterval = new EventEmitter<any>;
    @Output() clearInterval = new EventEmitter<any>;

    starIndex: number = 0;

    constructor () {}

    onSetInterval(){
        this.setInterval.emit();
    }

    onClearInterval(){
        this.clearInterval.emit();
    }
}