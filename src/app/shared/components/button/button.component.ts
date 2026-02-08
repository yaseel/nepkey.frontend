import {Component, Input} from '@angular/core';
import {IconComponent} from '../icon/icon.component';
import {Icon} from '../../models/icon.model';
import {Size} from '../../models/size.model';
import {Color} from '../../models/color.model';
import {Image} from '../../models/image.model';

@Component({
  selector: 'app-button',
  imports: [
    IconComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon?: Icon;
  @Input() img?: Image;
  @Input() size: Size = "sm";
  @Input() background: boolean = false;
  @Input() color: Color = "primary";
  @Input() circular: boolean = false;
  @Input() width?: string;
  @Input() center: boolean = false;

  get cssColor(): string {
    return `var(--${this.color})`;
  }

  get cssSize(): string {
    return `var(--fs-${this.size})`;
  }

  get cssBorderRadius(): string {
    if (this.circular) return "100px";
    else return "10px";
  }
}
