import { Component } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box';

@Component({
	selector: 'app-start',
	standalone: true,
	imports: [InfoBoxComponent],
	templateUrl: './start.html',
	styleUrl: './start.css'
})
export class StartComponent {

}