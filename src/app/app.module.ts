import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdRadioModule,
  MdSelectModule, MdSliderModule, MdSlideToggleModule, MdMenuModule, MdSidenavModule, MdToolbarModule,
  MdListModule, MdGridListModule, MdCardModule, MdTabsModule, MdButtonModule, MdButtonToggleModule,
  MdChipsModule, MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdDialogModule,
  MdTooltipModule, MdSnackBarModule, MdTableModule, MdSortModule, MdPaginatorModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { LanguagesComponent } from './pages/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    HomeComponent,
    NavigationComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    MdAutocompleteModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdRadioModule,
    MdSelectModule, MdSliderModule, MdSlideToggleModule, MdMenuModule, MdSidenavModule, MdToolbarModule,
    MdListModule, MdGridListModule, MdCardModule, MdTabsModule, MdButtonModule, MdButtonToggleModule,
    MdChipsModule, MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdDialogModule,
    MdTooltipModule, MdSnackBarModule, MdTableModule, MdSortModule, MdPaginatorModule,
    Routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
