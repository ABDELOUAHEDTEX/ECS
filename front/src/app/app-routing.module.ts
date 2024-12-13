import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from "./components/acceuil/acceuil.component";
import { EtudiantComponent } from "./components/etudiant/etudiant.component";
import { OffresStageComponent } from "./components/offres-stage/offres-stage.component";

import { DetailsOffreStageComponent } from "./components/offres-stage/details/details-offre-stage.component";

import { EditEtudiantComponent } from "./components/etudiant/edit/edit-etudiant.component";
import { StagesComponent } from "./components/stages/stages.component";
import { EncadrantEtudiantComponent } from "./components/encadrant-etudiant/encadrant-etudiant.component";

import {StageComponent} from "./components/stage/stage.component";
import {CreatestageComponent} from "./components/stage/createstage/createstage.component";
import { OffreDeStageComponent } from "./components/offre-de-stage/offre-de-stage/offre-de-stage.component"
import { AddOffreDeStageComponent } from './components/offre-de-stage/add-offre/add-offre.component';
import { UpdateOffreDeStageComponent } from './components/offre-de-stage/update-offre/update-offre.component';
import {ValidateOffreComponent} from "./components/offre-de-stage/validate-offre/validate-offre.component";
import { DetailsOffreComponent } from "./components/offre-de-stage/details-offre/details-offre.component";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [

  { path: "acceuil", component: AcceuilComponent },

  { path: "edit-etudiant/:id", component: EditEtudiantComponent },

  { path: "details-offre-stage/:id", component: DetailsOffreStageComponent },
  { path: "etudiant", component: EtudiantComponent },

  { path: "offres-stage", component: OffresStageComponent },

  { path: "stages", component: StagesComponent },
  { path: "encadrant-etudiant", component: EncadrantEtudiantComponent },
  { path: "encadrant-etudiant/:id", component: EncadrantEtudiantComponent },

  { path: "stage", component: StageComponent },
  { path: "offre-de-stage", component: OffreDeStageComponent },
  { path: "validate-offre", component: ValidateOffreComponent},

  { path: "createstage", component: CreatestageComponent },
  { path: "add-offre", component: AddOffreDeStageComponent },
  { path: "update-offre/:id", component: UpdateOffreDeStageComponent },
  { path: "details/:id", component: DetailsOffreComponent },
  { path: "dashboard", component: DashboardComponent },

  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
