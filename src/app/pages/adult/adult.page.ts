import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.page.html',
  styleUrls: ['./adult.page.scss'],
})
export class AdultPage implements OnInit {
  public strings = strings;

  constructor() { }

  ngOnInit() {
  }

}
