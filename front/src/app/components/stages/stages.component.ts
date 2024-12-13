import { Component, OnInit } from '@angular/core';
import { StageService } from "../../services/stages/stage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Stage } from "../../model/stage";
import { Etudiant } from "../../model/Etudiant.model";
import { EncadrantEtudiantService } from "../../services/encadrant_etudiant/encadrant-etudiant.service";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent {

}
