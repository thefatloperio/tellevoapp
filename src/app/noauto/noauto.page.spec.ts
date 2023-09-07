import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoautoPage } from './noauto.page';

describe('NoautoPage', () => {
  let component: NoautoPage;
  let fixture: ComponentFixture<NoautoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoautoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
