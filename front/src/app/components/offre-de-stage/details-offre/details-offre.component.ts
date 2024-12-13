import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreDeStage } from '../../../model/OffreDeStage';
import { OffreDeStageService } from '../../../services/offre-de-stage/offre-de-stage.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-details-offre',
  templateUrl: './details-offre.component.html',
  styleUrls: ['./details-offre.component.css']
})
export class DetailsOffreComponent  {

}
