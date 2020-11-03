import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss'],
})
export class WordCloudComponent implements OnInit {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value

    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value

    overflow: true,
  };

  data: CloudData[] = [
    { text: 'weight-5-rotate(+10)', weight: 5 },

    { text: 'weight-9-rotate(+35)', weight: 9 },
    { text: 'weight-7-rotate(-20)', weight: 7 },
    // ...
  ];

  constructor() {}

  ngOnInit(): void {}
}
