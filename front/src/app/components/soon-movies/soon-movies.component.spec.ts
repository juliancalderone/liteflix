import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonMoviesComponent } from './soon-movies.component';

describe('SoonMoviesComponent', () => {
  let component: SoonMoviesComponent;
  let fixture: ComponentFixture<SoonMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoonMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoonMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
