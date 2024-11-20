import { Component, OnInit, inject } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { AppComponent } from '../app.component';
import { CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-sudokuboard',
  standalone: true,
  imports: [],
  templateUrl: './sudokuboard.component.html',
  styleUrl: './sudokuboard.component.css'
})
export class SudokuboardComponent implements OnInit{

  private dataDisplay = inject(DataDisplayComponent);
  mistakeNumber: any;

  ngOnInit(): void {

    this.createGrid();
    
  }

  createGrid(){
    

    this.dataDisplay.fetchData();
    console.log(this.dataDisplay.data.newboard.grids);

    
    for(let j = 0; j<81; j=j+9){
    for(let i = 0; i<9; i++){
      (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value = `${this.dataDisplay.data.newboard.grids[0].value[j/9][i]}`;
      (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = true;
      (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.add('filledCell')
      if((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value == '0'){
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value = '';
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = false;
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('filledCell','emptyCell')
      }
    }
  }
  }

  checkSolution(){
    
    document.getElementById("checkBtn1")!.textContent="Check: on";
    let mistakeNumber = 0;

        const warningMessage = document.querySelector(".warningMessage")
    warningMessage!.textContent = "Check button is on, turn it off to type in numbers"

    for(let j = 0; j<81; j=j+9){
      for(let i = 0; i<9; i++){

        if((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).className == 'incorrectCell'  || 
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).className == 'nullCell' || 
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).className == 'correctCell'){
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('incorrectCell', 'emptyCell');
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('nullCell', 'emptyCell');
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('correctCell', 'emptyCell');
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = false;
          
          document.getElementById("checkBtn1")!.textContent="Check: off";
          warningMessage!.textContent = ""
 
        }
        else{
        if ((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value == ''){
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('emptyCell','nullCell');
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = true;
        }
        else {if((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value != `${this.dataDisplay.data.newboard.grids[0].solution[j/9][i]}`){
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('emptyCell','incorrectCell');
          mistakeNumber++;
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = true;

        }
        else{
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('emptyCell','correctCell');
          (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = true;
        }}

      }}}
      this.mistakeNumber = mistakeNumber;
  }

  reset(){
    for(let j = 0; j<81; j=j+9){
      for(let i = 0; i<9; i++){
        
        if((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).className != 'filledCell'){
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value = '';
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).readOnly = false;
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('incorrectCell','emptyCell');
        (<HTMLInputElement>document.getElementById(`cell-${j+i}`)).classList.replace('nullCell', 'emptyCell');

        this.mistakeNumber = 0;
        }
  }
}

  }

  reload(){
    window.location.reload();
  }

  checkIfGameWon(){
    let solutionCounter = 0;
    for(let j = 0; j<81; j=j+9){
      for(let i = 0; i<9; i++){
if((<HTMLInputElement>document.getElementById(`cell-${j+i}`)).value == `${this.dataDisplay.data.newboard.grids[0].solution[j/9][i]}`){
  solutionCounter++
}



      }}
      console.log(solutionCounter)
      if(solutionCounter == 81){
        console.log('Gratulacje!')
      }
      else{
        console.log('Sprobuj ponownie')
      }
  }

}
