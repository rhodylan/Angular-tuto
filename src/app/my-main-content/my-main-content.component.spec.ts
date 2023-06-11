import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMainContentComponent } from './my-main-content.component';

describe('MyMainContentComponent', () => {
  let component: MyMainContentComponent;
  let fixture: ComponentFixture<MyMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMainContentComponent]
    });
    fixture = TestBed.createComponent(MyMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
