import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearchManualComponent } from './giphy-search-manual.component';

describe('GiphySearchManualComponent', () => {
  let component: GiphySearchManualComponent;
  let fixture: ComponentFixture<GiphySearchManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
