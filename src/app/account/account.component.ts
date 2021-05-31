import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggginService} from "../logggin.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
constructor(private loggingService:LoggginService,private accountsService:AccountsService) {
}

  onSetTo(status: string) {
   this.accountsService.onStatusChange({id:this.id,status:status})
    this.accountsService.statusUpdated.emit(status);
    this.loggingService.logStatusChange(status);
  }
}
