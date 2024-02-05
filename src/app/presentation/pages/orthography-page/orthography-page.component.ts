import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.css'
})
export default class OrthographyPageComponent {

}
