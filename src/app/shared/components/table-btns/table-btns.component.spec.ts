import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBtnsComponent } from './table-btns.component';

describe('TableBtnsComponent', () => {
  let component: TableBtnsComponent;
  let fixture: ComponentFixture<TableBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBtnsComponent]
    });
    fixture = TestBed.createComponent(TableBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
