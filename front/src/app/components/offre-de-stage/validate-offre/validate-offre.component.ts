import { Component, OnInit } from '@angular/core';
import { OffreDeStage } from '../../../model/OffreDeStage';
import { OffreDeStageService } from '../../../services/offre-de-stage/offre-de-stage.service';

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-offre-de-stage',
  templateUrl: './validate-offre.component.html'
})
export class ValidateOffreComponent  {

}
