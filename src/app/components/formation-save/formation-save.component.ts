import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formation } from '../../shared/models/formation.model';
@Component({
  selector: 'app-formation-save',
  templateUrl: './formation-save.component.html',
  styleUrls: ['./formation-save.component.css']
})
export class FormationSaveComponent implements OnInit {
  formationItem: Formation = new Formation();
  formationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formationForm = new FormGroup({
      title: new FormControl("", Validators.required),
      nbHours: new FormControl("", Validators.required),
      dateStart: new FormControl("", Validators.required),
      dateEnd: new FormControl("", Validators.required),
      nbSubscribers: new FormControl("", Validators.required),
      technologies: new FormControl("", Validators.required),
    });
  }


}
