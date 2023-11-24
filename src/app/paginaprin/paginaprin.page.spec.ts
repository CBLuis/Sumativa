import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaprinPage } from './paginaprin.page';

describe('PaginaprinPage', () => {
  let component: PaginaprinPage;
  let fixture: ComponentFixture<PaginaprinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaprinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
