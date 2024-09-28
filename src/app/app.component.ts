import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // Adicione esta linha
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciador-de-tarefas';
}
