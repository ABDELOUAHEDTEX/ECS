import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import{NavbarComponent} from'./components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { OffresStageComponent } from './components/offres-stage/offres-stage.component';

import { DetailsOffreStageComponent } from './components/offres-stage/details/details-offre-stage.component';

import { EditEtudiantComponent } from './components/etudiant/edit/edit-etudiant.component';
import { StagesComponent } from './components/stages/stages.component';
import { EncadrantEtudiantComponent } from './components/encadrant-etudiant/encadrant-etudiant.component';

import {StageComponent} from "./components/stage/stage.component";
import {CreatestageComponent} from "./components/stage/createstage/createstage.component";
import { OffreDeStageComponent } from './components/offre-de-stage/offre-de-stage/offre-de-stage.component';
import { AddOffreDeStageComponent } from './components/offre-de-stage/add-offre/add-offre.component';
import { UpdateOffreDeStageComponent } from './components/offre-de-stage/update-offre/update-offre.component';
import { DetailsOffreComponent } from './components/offre-de-stage/details-offre/details-offre.component';
import { ValidateOffreComponent } from './components/offre-de-stage/validate-offre/validate-offre.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component'


@NgModule({
  declarations: [

    EtudiantComponent,
    AcceuilComponent,
    NavbarComponent,

    OffresStageComponent,

    DetailsOffreStageComponent,

    EditEtudiantComponent,
    StagesComponent,
    EncadrantEtudiantComponent,


    StageComponent,
    CreatestageComponent,
    OffreDeStageComponent,
    AddOffreDeStageComponent,
    UpdateOffreDeStageComponent,
    DetailsOffreComponent,
    ValidateOffreComponent,

    DashboardComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],


})
export class AppModule { }
