import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormModel } from './../model/form.model';
import { FormService} from './form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formModel: FormGroup;
  result: string = 'Not calculated yet';

  constructor(private formBuilder: FormBuilder,
              private formService: FormService,
              private router: Router) {}

  ngOnInit() {
    this.formModel = this.formBuilder.group({
      birth : ['', Validators.required],
      height : ['', Validators.required],
      heightSystem: [ 'Imperial' ],
      weight : ['', Validators.required],
      weightSystem: [ 'Imperial'],
      gender : ['male'],
    });
    this.onChanges();

    
  }

  onChanges(): void {
    this.formModel.valueChanges.subscribe(val => {
      if(this.formModel.valid) {
        this.result = 'Getting response from server...';
        console.log('submitted');
        this.submitForm();
      }
      
    });
  }

  submitForm() {
    console.log(this.formModel.value);
    this.formService.calculateBMI(this.formModel.value).subscribe((response) => {
      console.log(response);
      if(response.success) {
        this.result = response;
      } else{
        this.result = 'There was an error calculating your BMI.';
      }
      
    }, (error) {
      console.log(error);
      this.result = 'There was an error calculating your BMI.';
    });
  }


}
