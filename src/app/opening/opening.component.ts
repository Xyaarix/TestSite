 import { Component, OnInit } from '@angular/core';
 import { Input } from '@angular/core';
 import { Output, EventEmitter } from '@angular/core';
 import {MouseService} from '../mouse.service';

 @Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {

  entered = false;
  u1 = false;
  u2 = false;
  u3 = false;
  phase1 = false;
  x = 0;
  y = 0;
  constructor(private mouseService: MouseService) {
  }
  update(e): void {
    this.entered = this.mouseService.entered;
    this.x = this.mouseService.x;
    this.y = this.mouseService.y;
    if (this.x <= 1250 || this.y >= 293) {
      this.undermenuLeave(e);
    }
  }
  undermenuUpdate(e, n): void {
    if (n === 1) {
      this.u1 = true;
      this.u2 = false;
      this.u3 = false;
    } else if (n === 2) {
      this.u1 = false;
      this.u2 = true;
      this.u3 = false;
    } else if (n === 3) {
      this.u3 = true;
      this.u2 = false;
      this.u1 = false;
    }
  }
  undermenuLeave(e): void {
    this.u1 = false;
    this.u2 = false;
    this.u3 = false;
  }
  ngOnInit(): void {
  }


}
