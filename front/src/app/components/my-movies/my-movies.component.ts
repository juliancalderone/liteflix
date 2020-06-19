import { Component, OnInit } from '@angular/core';
import { LiteflixService } from 'src/app/services/liteflix.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {

  public myMoviesList: any;

  constructor(private liteflix: LiteflixService) { }

  ngOnInit() {
    this.getMyMovies();
  }

  getMyMovies() {
    this.liteflix.getMoviesFromApi().subscribe( data => {
      this.myMoviesList = data;
      console.log(this.myMoviesList);
    });

  }

}
