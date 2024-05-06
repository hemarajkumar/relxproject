import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";
import { CompanyList } from '../model/company';
import * as WebConstants from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyList$ = new BehaviorSubject<CompanyList>({});

  constructor(protected http: HttpClient) {}

  getCompanyList(search = '') {
    const apiUrl = WebConstants.SEARCH_COMPANY_LIST_URL + search;
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '**',
        'x-api-key': WebConstants.API_KEY
      })
    }
    this.http.get<CompanyList>(apiUrl, httpOptions).subscribe(data => {
      this.companyList$.next(data);
      shareReplay()
    },
    error => {
    //
    });
  }

  getCompanyDetails(companyNumber: string): Observable<any> {
    const apiUrl = WebConstants.SEARCH_COMPANY_URL + companyNumber;
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '**',
        'x-api-key': WebConstants.API_KEY
      })
    }
    return this.http.get<CompanyList>(apiUrl, httpOptions);
  }

  getCompanyNumber(url: string): string{
    const str = (url).split('/');
    return str[str.length - 1];
  }
}
