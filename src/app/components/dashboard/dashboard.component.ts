import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InventarioComponent } from '../inventario/inventario.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InventarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}