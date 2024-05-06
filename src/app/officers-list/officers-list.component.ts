import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../shared/company.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CompanyList } from '../model/company';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersListComponent  implements OnInit, OnDestroy{
  private readonly destroy$$ = new Subject();
  companyNumber: string;
  companyTitle: string;

  officersList$: Observable<any>;

  constructor(
    protected router: Router,
    protected companyService: CompanyService,
    protected cdf: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.companyNumber = this.companyService.getCompanyNumber(this.router.url);
    this.officersList$ = this.companyService.getCompanyDetails(this.companyNumber);

    this.companyService.companyList$.pipe(takeUntil(this.destroy$$)).subscribe((data: any) => {
      const items = data.items;
      const filterData = items.filter((e: CompanyList) => e.company_number == this.companyNumber);
      const companyData = filterData[0];
      this.companyTitle = companyData?.title;
      console.log(companyData);
      this.cdf.markForCheck();
    });
  }

  navigatePage() {
    this.router.navigate(['companydetails', this.companyNumber]);
  }

  ngOnDestroy(): void {
    this.destroy$$.next(0);
    this.destroy$$.complete();
  }
}
