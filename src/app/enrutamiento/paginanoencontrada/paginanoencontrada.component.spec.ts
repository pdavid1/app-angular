import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanoencontradaComponent } from './paginanoencontrada.component';

describe('PaginanoencontradaComponent', () => {
  let component: PaginanoencontradaComponent;
  let fixture: ComponentFixture<PaginanoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginanoencontradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginanoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
