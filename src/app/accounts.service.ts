import {LoggginService} from "./logggin.service";
import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/core";
@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private loggingService:LoggginService) {
  }
  statusUpdated = new EventEmitter<string>();

  addAccount(name:string,status:string){
    this.accounts.push({name: name, status: status})
  }
  onStatusChange(updateInfo :{id:number,status:string}){
    this.accounts[updateInfo.id].status = status;
  }
 }
