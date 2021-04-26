import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListDetallesComponent } from './clients-list-detalles.component';

describe('ClientsListDetallesComponent', () => {
  let component: ClientsListDetallesComponent;
  let fixture: ComponentFixture<ClientsListDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsListDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
