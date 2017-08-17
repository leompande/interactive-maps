import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLayerFormComponent } from './new-layer-form.component';

describe('NewLayerFormComponent', () => {
  let component: NewLayerFormComponent;
  let fixture: ComponentFixture<NewLayerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLayerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
