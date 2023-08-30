import { NgModule, ErrorHandler, APP_INITIALIZER } from "@angular/core";
import * as Sentry from "@sentry/angular-ivy";
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherInterceptor } from "./core/interceptor/weather.interceptor";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
