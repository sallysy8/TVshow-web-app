import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowSearchComponent } from './tvshow-search.component';

describe('TVShowSearchComponent', () => {
  let component: TVShowSearchComponent;
  let fixture: ComponentFixture<TVShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVShowSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
