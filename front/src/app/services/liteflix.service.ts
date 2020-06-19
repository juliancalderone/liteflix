import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const api = 'https://api.themoviedb.org/3/movie';
const key = 'api_key=6f26fd536dd6192ec8a57e94141f8b20';
const custom_api = 'http://localhost:3000/api/movies';


@Injectable({
  providedIn: 'root',
})
export class LiteflixService {

  constructor(private httpClient: HttpClient) {}

  getNowPlayingMovie() {
    return this.httpClient.get(`${api}/now_playing?${key}`);
  }

  getSoonMovies() {
    return this.httpClient.get(`${api}/upcoming?${key}`);
  }

  getPopularMovies() {
    return this.httpClient.get(`${api}/popular?${key}`);
  }

  createNewMovie(title: string, category: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('category', category);
    fd.append('image', photo);
    return this.httpClient.post(custom_api, fd);
  }

  getMoviesFromApi() {
    return this.httpClient.get(custom_api);
  }



}
