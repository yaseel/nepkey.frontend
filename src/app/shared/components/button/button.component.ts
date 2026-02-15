import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Icon } from '../../models/icon.model';
import { Size } from '../../models/size.model';
import { Color } from '../../models/color.model';
import { Image } from '../../models/image.model';
import { Side } from '../../models/side.model';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonBgColor } from '../../models/button-color.model';

@Component({
  selector: 'app-button',
  imports: [IconComponent, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<void>();
  @Input() icon?: Icon;
  @Input() img?: Image;
  @Input() size: Size = 'md';
  @Input() iconSize?: Size;
  @Input() btnBgColor?: ButtonBgColor;
  @Input() color: Color = 'primary';
  @Input() circular: boolean = false;
  @Input() shadow: boolean = false;
  @Input() width?: string;
  @Input() center: boolean = false;
  @Input() iconSide: Side = 'left';
  @Input() type: HTMLButtonElement['type'] = 'button';

  onClick() {
    this.clicked.emit();
  }

  get cssBgColor(): string {
    return `var(--${this.btnBgColor})`;
  }

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
