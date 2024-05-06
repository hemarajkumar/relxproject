import { Component  } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Observable, Subject} from 'rxjs';
import { CompanyList } from '../model/company';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitEnabled:boolean = false;
  showErrorMessage: boolean = false;

  private readonly destroy$$ = new Subject();

  constructor(
    protected companyService: CompanyService ) {
    this.loginForm = new FormGroup ({
      login: new FormControl('', [Validators.required, Validators.required])
    });
  }


  submit(){
    let searchText = this.loginForm.value?.login;
    // store update
  }
}
