import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-image-tunning-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './image-tunning-page.component.html',
  styleUrl: './image-tunning-page.component.css'
})
export class ImageTunningPageComponent {

}
