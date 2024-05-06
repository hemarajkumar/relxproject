import { Component  } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Observable, Subject} from 'rxjs';
import { CompanyList } from '../model/company';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})


export class HomepageComponent {
  searchForm: FormGroup;
  submitEnabled:boolean = false;
  showErrorMessage: boolean = false;

  private readonly destroy$$ = new Subject();

  constructor(
    protected companyService: CompanyService ) {
    this.searchForm = new FormGroup ({
      companyName: new FormControl('', [Validators.required, Validators.required])
    });
  }

  updateErrorMessage() {
   // console.log(this.searchForm);
  }

  inputSearch(event: KeyboardEvent) {
    let searchText = this.searchForm.value?.companyName;
    let eventKey = event.key;
    if (eventKey == 'Enter') {
      if (searchText.length >= 3){
        this.searchCompany();
      }
    } else if (searchText.length >= 3){
        this.submitEnabled = true;
      } else {
        this.submitEnabled = false;
      }
    if (this.searchForm.valid) {
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }

  searchCompany(){
    let searchText = this.searchForm.value?.companyName;
    this.companyService.getCompanyList(searchText);
  }

}
