import { Component, OnInit } from '@angular/core';
import { LiteflixService } from 'src/app/services/liteflix.service';
import { Movie } from 'src/app/models/movie';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-soon-movies',
  templateUrl: './soon-movies.component.html',
  styleUrls: ['./soon-movies.component.scss']
})
export class SoonMoviesComponent implements OnInit {

  public soonMoviesList;
  public soonMoviesSelection;
  public fourMovies;

  constructor(private liteflix: LiteflixService) { }

  ngOnInit() {
    this.getSoonMovies();
  }

  getSoonMovies() {
    this.liteflix.getSoonMovies().subscribe((data) => {
      this.soonMoviesList = data;
      this.soonMoviesSelection = this.soonMoviesList.results;
      this.fourMovies = this.soonMoviesSelection.filter((movie, index) => index <= 3);
    });
  }





}
