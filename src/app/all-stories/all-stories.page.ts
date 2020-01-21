import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/admin/storage.service';
import { NativePageTransitions, NativeTransitionOptions } from "@ionic-native/native-page-transitions/ngx";

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.page.html',
  styleUrls: ['./all-stories.page.scss'],
})
export class AllStoriesPage implements OnInit {
  stories: any = [];
  story: any;
  Temp: any = [];

  constructor(private nativePageTransitions: NativePageTransitions ,private router: Router, private route: ActivatedRoute, public storage: StorageService) {
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
    // temp2.push(this.stories);
    // console.log(this.Temp);
    count = this.Temp[0].tit;

    //   this.temp.forEach(element =>  {
    //        temp2.push(this.temp[count]);
    //       // console.log('story ' + temp[count].tit);

    //        count ++;
    //   });
    //   console.log('story ' + temp2);
    // }

  }

  getStory(title: string) {
    this.storage.getstory(title).then((n) => {
      this.story = n;
      // console.log(this.story);
      let route = this.router.config.find(r => r.path === 'view-story');
      route.data = this.story;
      this.router.navigate(['view-story', { note: this.story }]);
     // console.log(this.story);
      return this.story;
    });
    // console.log(this.story);

  }



}
