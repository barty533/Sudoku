import { Component, inject, OnInit, Injectable } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({providedIn: 'root',})


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})

export class DataDisplayComponent {
  httpClient = inject(HttpClient);
  data: any ;

   fetchData(){

    this.httpClient
    .get('https://sudoku-api.vercel.app/api/dosuku')
    .subscribe((data: any)=>{
      this.data = data;  
    });}

  


}
