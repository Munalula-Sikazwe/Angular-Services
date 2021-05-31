import { Component, EventEmitter, Output } from '@angular/core';
import {LoggginService} from "../logggin.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
constructor(private loggingService:LoggginService,private accountsService:AccountsService) {
  this.accountsService.statusUpdated.subscribe((status: string) => alert('new status: ' + status))
}
  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountsService.addAccount(accountName, accountStatus);
this.loggingService.logStatusChange(accountStatus);
  }
}
