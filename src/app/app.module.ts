import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { wrapperFeature } from './app.state';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    HomeComponent,
    BrowserModule,
    StartComponent,
    CoreModule,
    NgbCarousel,
    RouterModule.forRoot(routes),
    StoreModule.forFeature(wrapperFeature),
    FormsModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
