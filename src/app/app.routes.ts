import { Routes } from '@angular/router';
import { StartComponent } from './start/start';
import { KonverteraComponent } from './konvertera/konvertera';
import { OmComponent } from './om/om';

export const routes: Routes = [
	{ path: '', component: StartComponent },
	{ path: 'konvertera', component: KonverteraComponent },
	{ path: 'om', component: OmComponent }
];