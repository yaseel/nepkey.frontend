import { Component, Input } from '@angular/core';
import { Size } from '../../models/size.model';
import { Icon } from '../../models/icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) icon!: Icon;
  @Input() size: Size = 'sm';

  get href(): string {
    return `/icons.svg#${this.icon}`;
  }

  get pixelSize(): number {
    switch (this.size) {
      case 'sm': return 20;
      case 'md': return 25;
      case 'lg': return 30;
    }
  }
}
