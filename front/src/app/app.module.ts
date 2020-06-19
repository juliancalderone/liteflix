import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { SoonMoviesComponent } from './components/soon-movies/soon-movies.component';
import { HomeComponent } from './components/home/home.component';
import { PopularMoviesComponent } from './models/popular-movies/popular-movies.component';


// dropdown
import { BsDropdownModule } from 'ngx-bootstrap';

// modal
import { ModalModule } from 'ngx-bootstrap';


import { MatInputModule } from '@angular/material/input';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NowPlayingComponent,
    SoonMoviesComponent,
    HomeComponent,
    PopularMoviesComponent,
    MyMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
