import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListComponentComponent } from './clients-list-component.component';

describe('ClientsListComponentComponent', () => {
  let component: ClientsListComponentComponent;
  let fixture: ComponentFixture<ClientsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
