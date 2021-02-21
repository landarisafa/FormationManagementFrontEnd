import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSaveComponent } from './formation-save.component';

describe('FormationSaveComponent', () => {
  let component: FormationSaveComponent;
  let fixture: ComponentFixture<FormationSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
