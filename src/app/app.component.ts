import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {MouseService} from './mouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MySite';
  x = 0;
  y = 0;
  entered = false;
  constructor(private mouseService: MouseService) {}
  ngOnInit(): void {}
  update(e): void {
    this.mouseService.mouseMove(e);
    this.entered = this.mouseService.entered;
    this.x = this.mouseService.x;
    this.y = this.mouseService.y;
  }


}
