import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAreaComponent } from './tab-area.component';

describe('TabAreaComponent', () => {
  let component: TabAreaComponent;
  let fixture: ComponentFixture<TabAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
