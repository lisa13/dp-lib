import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListHeadingComponent } from './menu-list-heading.component';

describe('MenuListHeadingComponent', () => {
  let component: MenuListHeadingComponent;
  let fixture: ComponentFixture<MenuListHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
