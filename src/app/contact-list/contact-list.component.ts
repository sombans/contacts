import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  
  contacts;

  constructor() {
    this.contacts = [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    },
    {
      firstName: 'Daniel',
      lastName: 'Ros',
      email: 'daniel@example.com'
    },
    {
      firstName: 'Martin',
      lastName: 'Hess',
      email: 'martin@example.com'
    },
    {
        firstName: 'Martin',
        lastName: 'Hessss',
        email: 'martin@example.com'
      }
    ];
    
  }
    removeContact(contact){
        let index = this.contacts.indexOf(contact);
      this.contacts.splice(index,1);
        }
  ngOnInit() {
  }

}
