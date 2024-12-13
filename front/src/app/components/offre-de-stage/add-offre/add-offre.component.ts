import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { OffreDeStage } from "../../../model/OffreDeStage";
import { OffreDeStageService } from "../../../services/offre-de-stage/offre-de-stage.service";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html'
})
export class AddOffreDeStageComponent  {

}
