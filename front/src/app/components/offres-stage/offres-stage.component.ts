import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {OffresStageService} from "../../services/offres-stage/offres-stage.service";
import {Router} from "@angular/router";
import {OffreStage, OffreStageDetails} from "../../model/OffreStage.model";
import {OffreDeStage} from "../../model/OffreDeStage";
import {OffreDeStageService} from "../../services/offre-de-stage/offre-de-stage.service";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-offres-stage',
  templateUrl: './offres-stage.component.html',
  styleUrls: ['./offres-stage.component.css']
})
export class OffresStageComponent {

}
