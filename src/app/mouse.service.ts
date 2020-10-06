import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  x = 0;
  y = 0;
  entered = false;
  mouseMove(e): void {
    this.x = e.pageX;
    this.y = e.pageY;
    if (this.x >= 1490 && this.y <= 50) {
      this.entered = true;
    }
    if (this.x <= 1250 || this.y >= 293) {
      this.entered = false;
    }
  }

  constructor() { }
}
