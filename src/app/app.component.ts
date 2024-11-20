import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SudokuboardComponent } from './sudokuboard/sudokuboard.component';
import { DataDisplayComponent } from './data-display/data-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SudokuboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sudokufinal';
}
