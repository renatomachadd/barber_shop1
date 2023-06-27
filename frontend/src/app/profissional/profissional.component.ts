import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css'],
})
export class ProfissionalComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
}
