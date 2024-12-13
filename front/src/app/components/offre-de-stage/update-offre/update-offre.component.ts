import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { OffreDeStageService } from "../../../services/offre-de-stage/offre-de-stage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OffreDeStage } from "../../../model/OffreDeStage";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html'
})
export class UpdateOffreDeStageComponent {
 
}
