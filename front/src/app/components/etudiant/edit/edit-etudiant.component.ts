import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Etudiant} from "../../../model/Etudiant.model";
import {EtudiantService} from "../../../services/etudiant/etudiant.service";

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent {

}
