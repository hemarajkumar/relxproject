import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CompanyList } from '../model/company';
import { CompanyService } from '../shared/company.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateCompanyData } from '../store/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnDestroy {

  private readonly destroy$$ = new Subject();

  companyList: CompanyList = {};

  companyLists: any[] = [];

  showErrorMessage: boolean = false;

  constructor(
    protected companyService: CompanyService,
    protected cdf: ChangeDetectorRef,
    protected router: Router,
    private store: Store
  )
    {
      this.companyService.companyList$.pipe(takeUntil(this.destroy$$)).subscribe((data: any) => {
        this.companyLists = [];
      if (data.items){
          let myObj = data?.items;
          myObj?.forEach((status: any) => {
            const address = (status?.description).split('-');
            this.companyList = {
              company_number: status?.company_number,
              address_snippet:  status?.address_snippet,
              title: status?.title,
              description: address[1].trim(),
              company_status: status?.company_status,
              company_type: status?.company_type,
              company_incorporated: status?.date_of_creation
            }
            this.companyLists.push(this.companyList);
            this.showErrorMessage = false;
          });
      } else {
        if(data?.page_number) {
          this.showErrorMessage = true;
        }
      }
      this.cdf.markForCheck();
    });
  }

  navigateProductDetails(companyNumber: string){
    const filterData = this.companyLists.filter((e: CompanyList) => e.company_number == companyNumber);
    const companyData = filterData[0];
    let companyDetails: CompanyList;
    companyDetails = {
      title: companyData?.title,
      company_number: companyData?.company_number,
      address_snippet: companyData?.address_snippet,
      company_status: companyData?.company_status,
      company_type: companyData?.company_type,
      company_incorporated: companyData?.company_incorporated
    }
    this.store.dispatch(updateCompanyData({
      item: companyDetails
    }));
  }

  ngOnDestroy(): void {
    this.destroy$$.next(0);
    this.destroy$$.complete();
  }
}
