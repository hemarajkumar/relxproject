import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { openAssessmentDialog } from '../dialog-component/dialog-component.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  companyDetails: any[] = [];

  constructor(
    private dialog: MatDialog,
    private store: Store<any>
  ){}

  ngOnInit(): void {
    this.store.select('companyUpdate').subscribe(res => {
      this.companyDetails = res.companyDetails;
    });
  }

  openDialog(){
    openAssessmentDialog(this.dialog);
  }
}
