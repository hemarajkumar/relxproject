import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.scss'
})
export class DialogComponentComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogComponentComponent>
  ){}


  close() {
    this.dialogRef.close();
  }
}

export function openAssessmentDialog(dialog: MatDialog){

  const config = new MatDialogConfig();
  config.disableClose = false;
  config.autoFocus = true;

  const dialogRef = dialog.open(DialogComponentComponent, config);

  return dialogRef.afterClosed();

}