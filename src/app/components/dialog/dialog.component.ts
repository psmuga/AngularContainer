import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dialogResult= '';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog()
  {
    const dialogRef  = this.dialog.open(ExampleDialogComponent, {width: '600px', data: 'this text is passed into the dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }
}

@Component({
  selector: 'app-example-dialog',
  templateUrl: 'dialogExample.component.html',
})
export class ExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  onCloseConfirm()
  {
    this.dialogRef.close('Confirm');
  }
  onCloseCancel()
  {
    this.dialogRef.close('Cancel');
  }
}
