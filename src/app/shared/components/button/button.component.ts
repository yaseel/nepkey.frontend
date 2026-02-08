import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Icon } from '../../models/icon.model';
import { Size } from '../../models/size.model';
import { Color } from '../../models/color.model';
import { Image } from '../../models/image.model';
import { Side } from '../../models/side.model';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [IconComponent, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon?: Icon;
  @Input() img?: Image;
  @Input() size: Size = 'sm';
  @Input() iconSize?: Size;
  @Input() background: boolean = false;
  @Input() color: Color = 'primary';
  @Input() circular: boolean = false;
  @Input() width?: string;
  @Input() center: boolean = false;
  @Input() iconSide: Side = 'left';

  get cssColor(): string {
    return `var(--${this.color})`;
  }

  get cssSize(): string {
    return `var(--fs-${this.size})`;
  }

  get cssBorderRadius(): string {
    if (this.circular) return '100px';
    else return '10px';
  }

  get resolvedIconSize(): Size {
    return this.iconSize ?? this.size;
  }
}
