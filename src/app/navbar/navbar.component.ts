import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  title: string = '';

  @Output()
  hidingEvent = new EventEmitter<void>;

  hidingButton() {
    this.hidingEvent.emit();
  }
}
