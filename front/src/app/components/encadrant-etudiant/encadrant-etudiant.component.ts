import { Component, OnInit } from '@angular/core';
import {EncadrantEtudiantService} from "../../services/encadrant_etudiant/encadrant-etudiant.service";
import { ActivatedRoute, Router } from "@angular/router";
import { EncadrantEtudiant } from "../../model/encadrant-etudiant";
import { Stage } from "../../model/stage";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-encadrant-etudiant',
  templateUrl: './encadrant-etudiant.component.html',
  styleUrls: ['./encadrant-etudiant.component.css']
})
export class EncadrantEtudiantComponent  {

}
