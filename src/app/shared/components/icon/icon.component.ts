import { Component, Input } from '@angular/core';
import { Size } from '../../models/size.model';
import { Icon } from '../../models/icon.model';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() icon?: Icon;
  @Input() img?: Image;
  @Input() size: Size = 'sm';

  get href(): string {
    if (this.icon) return `/icons.svg#${this.icon}`;
    else if (this.img) return `/images/${this.img}.png`;
    else throw Error('Icon component used without providing icon or img');
  }

  get pixelSize(): number {
    switch (this.size) {
      case 'xs':
        return 15;
      case 'sm':
        return 20;
      case 'md':
        return 25;
      case 'lg':
        return 30;
      case 'xl':
        return 35;
    }
  }
}
