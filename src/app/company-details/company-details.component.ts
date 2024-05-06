import { Component, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../shared/company.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CompanyDetailsComponent {
  companyLists: any[] = [];
  companyDetails: any[] = [];
  constructor(
    protected router: Router,
    protected companyService: CompanyService,
    protected cdf: ChangeDetectorRef,
    private store: Store<any>
  ){ 
    this.store.select('companyUpdate').subscribe(res => {
      this.companyDetails = res.companyDetails;
    }).unsubscribe();
  }
}
