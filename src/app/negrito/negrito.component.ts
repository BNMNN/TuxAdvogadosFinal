import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-negrito',
  templateUrl: './negrito.component.html',
  styleUrls: ['./negrito.component.css']
})
export class NegritoComponent {
  @Input() palavra = "";
  
}
