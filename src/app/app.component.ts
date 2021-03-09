import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer';

  flag = false;
  hour = 23;
  min = 50;
  sec = 0;

  setIntervalFunction(): void {

    const interval = setInterval(() => {
        if (this.sec >= 59) {
          this.sec = 0;

          if (this.min >= 59) {
            this.min = 0;
            this.sec = 0;

            if (this.hour >= 23) {
              this.hour = 0;
              this.min = 0;
              this.sec = 0;
              return;
            }

            this.hour += 1;
            return;
          }

          this.min += 1;
          return;
        }

        this.sec += 1;
      }, 1000);
    if (this.flag) {
      clearInterval(interval);
    }
  }

  reset(): void {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }

  start(): void {
    this.setIntervalFunction();
    this.flag = true;
  }

  stop(): void {
    this.reset();
    this.setIntervalFunction();
    this.flag = false;
  }

  wait(): void {

    this.flag = false;
  }


}

