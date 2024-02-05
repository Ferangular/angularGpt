import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pros-cons-stream-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pros-cons-stream-page.component.html',
  styleUrl: './pros-cons-stream-page.component.css'
})
export class ProsConsStreamPageComponent {

}
