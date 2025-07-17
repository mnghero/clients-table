import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddFormComponent } from './client-add-form.component';

describe('ClientAddFormComponent', () => {
  let component: ClientAddFormComponent;
  let fixture: ComponentFixture<ClientAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
