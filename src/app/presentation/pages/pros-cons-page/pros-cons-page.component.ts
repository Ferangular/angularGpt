import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pros-cons-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pros-cons-page.component.html',
  styleUrl: './pros-cons-page.component.css'
})
export default class ProsConsPageComponent {

}
