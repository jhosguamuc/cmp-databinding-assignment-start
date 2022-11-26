import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervalContainer: any;
  timeoutContainer: any;
  starIndex: number = 0;
  arrayIndex:Array<number>=[];

  initSetInterval(evt:{}){
      this.intervalContainer = setInterval(() => {
        this.starIndex++
        this.arrayIndex.push(this.starIndex);
        console.log(this.starIndex);
      }, 1000);
  }

  clearInitInterval(evt:{}){
    clearInterval(this.intervalContainer);
    this.starIndex = 0;   
    this.timeoutContainer = setTimeout(() => { this.arrayIndex =[]; }, 1000); 
    
  }

}

