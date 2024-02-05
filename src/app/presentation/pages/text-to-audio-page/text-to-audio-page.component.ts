import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-text-to-audio-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-to-audio-page.component.html',
  styleUrl: './text-to-audio-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextToAudioPageComponent {

}
