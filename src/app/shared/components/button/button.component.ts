import {Component, Input} from '@angular/core';
import {IconComponent} from '../icon/icon.component';
import {Icon} from '../../models';
import {Size} from '../../models/size.model';

@Component({
  selector: 'app-button',
  imports: [
    IconComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon!: Icon;
  @Input() size: Size = "s";
}
