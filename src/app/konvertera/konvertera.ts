import { Component } from '@angular/core';

@Component({
	selector: 'app-konvertera',
	standalone: true,
	imports: [],
	templateUrl: './konvertera.html',
	styleUrl: './konvertera.css'
})
export class KonverteraComponent {
	feet: number = 0;
	fahrenheit: number = 0;

	convertMeterToFeet(event: Event): void {
		const input = event.target as HTMLInputElement;
		const meters = Number(input.value);
		this.feet = meters * 3.28084;
	}

	convertCelsiusToFahrenheit(event: Event): void {
		const input = event.target as HTMLInputElement;
		const celsius = Number(input.value);
		this.fahrenheit = (celsius * 9) / 5 + 32;
	}
}