import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproductComponent } from './getproduct.component';

describe('GetproductComponent', () => {
  let component: GetproductComponent;
  let fixture: ComponentFixture<GetproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
