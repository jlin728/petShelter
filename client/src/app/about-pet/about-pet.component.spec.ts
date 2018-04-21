import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPetComponent } from './about-pet.component';

describe('AboutPetComponent', () => {
  let component: AboutPetComponent;
  let fixture: ComponentFixture<AboutPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
