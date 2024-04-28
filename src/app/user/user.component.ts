import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
@ Input() item = 0;
@Output() updateDataEvent = new EventEmitter<string>();
}
