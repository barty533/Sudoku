import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuboardComponent } from './sudokuboard.component';

describe('SudokuboardComponent', () => {
  let component: SudokuboardComponent;
  let fixture: ComponentFixture<SudokuboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
