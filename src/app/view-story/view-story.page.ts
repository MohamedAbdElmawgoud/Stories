import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/admin/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.page.html',
  styleUrls: ['./view-story.page.scss'],
})
export class ViewStoryPage implements OnInit {
  stories: any = [];
  story: any;
  Temp: any = [];

  constructor(private router: Router, private route: ActivatedRoute, public storage: StorageService) {
  }

  ngOnInit() {
    this.story = this.route
      .data
      .subscribe(v => {
        this.stories = v;
      });
    let count: any;
    let temp = Object.keys(this.stories);
    for (count of temp) {
      this.Temp.push(this.stories[count]);
    }
   // console.log(this.Temp);
  }

}
