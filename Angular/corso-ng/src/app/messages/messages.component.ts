import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messaggi: string[];

  constructor(private messagesServices: MessagesService) { }

  ngOnInit(): void {
    this.messagesServices.messaggi().subscribe(msgs => this.messaggi = msgs);
  }

}
