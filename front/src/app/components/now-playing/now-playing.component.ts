import { Component, OnInit } from '@angular/core';
import { LiteflixService } from 'src/app/services/liteflix.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {

  public nowPlayingList;
  public npMovie: Movie;


  constructor(private liteflix: LiteflixService) {}

  ngOnInit() {
    this.getPrincipalMovie();
  }

  getPrincipalMovie() {
    this.liteflix.getNowPlayingMovie().subscribe((data) => {
      this.nowPlayingList = data;
      this.npMovie = this.nowPlayingList.results[2];
    });
  }
}
