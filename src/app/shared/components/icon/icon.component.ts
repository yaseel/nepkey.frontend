import { Component, Input } from '@angular/core';
import { Size } from '../../models/size.model';
import { Icon } from '../../models';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) icon!: Icon;
  @Input() size: Size = 's';

  get href(): string {
    return `/icons.svg#${this.icon}`;
  }

  get pixelSize(): number {
    switch (this.size) {
      case 's': return 20;
      case 'm': return 25;
      case 'l': return 30;
    }
  }
}
