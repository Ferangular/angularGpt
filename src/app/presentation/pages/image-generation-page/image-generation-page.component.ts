import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-image-generation-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './image-generation-page.component.html',
  styleUrl: './image-generation-page.component.css'
})
export class ImageGenerationPageComponent {

}
