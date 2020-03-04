import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObjectComponent } from './test-object.component';

describe('TestObjectComponent', () => {
  let component: TestObjectComponent;
  let fixture: ComponentFixture<TestObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
