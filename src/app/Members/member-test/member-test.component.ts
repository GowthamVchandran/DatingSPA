import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-test',
  templateUrl: './member-test.component.html',
  styleUrls: ['./member-test.component.css']
})
export class MemberTestComponent implements OnInit {

  @Input() testMsg: string;

  constructor() { }


  ngOnInit() {
    console.log(this.testMsg);
  }

}
