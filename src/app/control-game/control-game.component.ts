import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-game',
  templateUrl: './control-game.component.html',
  styleUrls: ['./control-game.component.css'],
})
export class ControlGameComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: ReturnType<typeof setInterval>;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
