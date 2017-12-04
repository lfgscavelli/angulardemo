import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfraComponent } from './testfra.component';

describe('TestfraComponent', () => {
  let component: TestfraComponent;
  let fixture: ComponentFixture<TestfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
