import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySideMenuComponent } from './my-side-menu.component';

describe('MySideMenuComponent', () => {
  let component: MySideMenuComponent;
  let fixture: ComponentFixture<MySideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySideMenuComponent]
    });
    fixture = TestBed.createComponent(MySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
