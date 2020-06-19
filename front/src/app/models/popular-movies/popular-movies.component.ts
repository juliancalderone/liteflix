import { Component, OnInit } from '@angular/core';
import { LiteflixService } from 'src/app/services/liteflix.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  public popularMoviesList: any;
  public popularMoviesSelection: any;
  public fourMovies: any;


  constructor(private liteflix: LiteflixService) { }

  ngOnInit() {
    this.getSoonMovies();
  }

  getSoonMovies() {
    this.liteflix.getPopularMovies().subscribe((data) => {
      this.popularMoviesList = data;
      this.popularMoviesSelection = this.popularMoviesList.results;
      this.fourMovies = this.popularMoviesSelection.filter((movie, index) => index <= 3);
    });
  }

}
