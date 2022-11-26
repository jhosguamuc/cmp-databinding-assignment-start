import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.css']
})
export class OddComponent {
    @Input() starIndex
    constructor () {}

    isOdd() : boolean {
        return Math.abs(this.starIndex % 2) == 1;
    }
}