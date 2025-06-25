import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFournisseursComponent } from './liste-fournisseurs.component';

describe('ListeFournisseursComponent', () => {
  let component: ListeFournisseursComponent;
  let fixture: ComponentFixture<ListeFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
