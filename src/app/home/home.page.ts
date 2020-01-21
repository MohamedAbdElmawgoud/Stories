import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService, Singelton } from 'src/app/admin/storage.service';
import { Platform } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription: any;
  stories: any = [];
  story: any;
  tempStory: any = [];
  constructor(private admobFree: AdMobFree,private nativePageTransitions: NativePageTransitions ,private router: Router, public storage: StorageService, public platform: Platform) {


    const sto = new Singelton();
    this.story = sto.savestory();
    this.tempStory = this.story;
    // console.log(this.story);

  //   this.subscription = this.platform.backButton.subscribe(() => {
  //   if (window.confirm('هل تريد الخروج')) {
  //     navigator['app'].exitApp();
  //    } });
  //
}

  ionViewWillEnter() {
    
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-5127506429735986/2587725384',
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);     
     this.admobFree.banner.prepare()
     this.admobFree.banner.show()
     

  }
  ionViewWillLeave() {
    
    //  let options: NativeTransitionOptions = {
    //     direction: 'up',
    //     duration: 500,
    //     slowdownfactor: 3,
    //     slidePixels: 20,
    //     iosdelay: 100,
    //     androiddelay: 150,
    //     fixedPixelsTop: 0,
    //     fixedPixelsBottom: 60
    //    }
    //    this.nativePageTransitions.slide(options);
   
    
    }

  ionViewDidEnter() {

  }
  getStories(type) {
    this.storage.getAllstories(type, this.tempStory).then((n) => {
      this.story = n;
      // console.log(this.story);
      let route = this.router.config.find(r => r.path === 'all-stories');
      route.data = this.story;
      // console.log(this.tempStory);
      this.router.navigate(['all-stories', { story: this.tempStory }]);
      return this.story;
    });
  }


  saveStory(title, content, type) {
    let data = { tit: title, con: content, ta: type };
    this.stories.push(data);
    // console.log(this.stories);
    this.storage.savestory(data.tit, data.con, data.ta);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // horror


    this.saveStory(this.story[0].tit, this.story[0].con, this.story[0].ta);
    this.saveStory(this.story[1].tit, this.story[1].con, this.story[1].ta);
    this.saveStory(this.story[2].tit, this.story[2].con, this.story[2].ta);
    this.saveStory(this.story[3].tit, this.story[3].con, this.story[3].ta);
    this.saveStory(this.story[4].tit, this.story[4].con, this.story[4].ta);
    this.saveStory(this.story[5].tit, this.story[5].con, this.story[5].ta);
    this.saveStory(this.story[6].tit, this.story[6].con, this.story[6].ta);
    this.saveStory(this.story[7].tit, this.story[7].con, this.story[7].ta);
    this.saveStory(this.story[8].tit, this.story[8].con, this.story[8].ta);
    this.saveStory(this.story[9].tit, this.story[9].con, this.story[9].ta);
    this.saveStory(this.story[10].tit, this.story[10].con, this.story[10].ta);
    this.saveStory(this.story[11].tit, this.story[11].con, this.story[11].ta);
    this.saveStory(this.story[12].tit, this.story[12].con, this.story[12].ta);
    this.saveStory(this.story[13].tit, this.story[13].con, this.story[13].ta);
    this.saveStory(this.story[14].tit, this.story[14].con, this.story[14].ta);


    // quran
    this.saveStory(this.story[15].tit, this.story[15].con, this.story[15].ta);
    this.saveStory(this.story[16].tit, this.story[16].con, this.story[16].ta);
    this.saveStory(this.story[17].tit, this.story[17].con, this.story[17].ta);
    this.saveStory(this.story[18].tit, this.story[18].con, this.story[18].ta);
    this.saveStory(this.story[19].tit, this.story[19].con, this.story[19].ta);
    this.saveStory(this.story[20].tit, this.story[20].con, this.story[20].ta);
    this.saveStory(this.story[21].tit, this.story[21].con, this.story[21].ta);
    this.saveStory(this.story[22].tit, this.story[22].con, this.story[22].ta);
    this.saveStory(this.story[23].tit, this.story[23].con, this.story[23].ta);
    this.saveStory(this.story[24].tit, this.story[24].con, this.story[24].ta);


    // motivation
    this.saveStory(this.story[25].tit, this.story[25].con, this.story[25].ta);
    this.saveStory(this.story[26].tit, this.story[26].con, this.story[26].ta);
    this.saveStory(this.story[27].tit, this.story[27].con, this.story[27].ta);
    this.saveStory(this.story[28].tit, this.story[28].con, this.story[28].ta);
    this.saveStory(this.story[29].tit, this.story[29].con, this.story[29].ta);
    this.saveStory(this.story[30].tit, this.story[30].con, this.story[30].ta);
    this.saveStory(this.story[31].tit, this.story[31].con, this.story[31].ta);
    this.saveStory(this.story[32].tit, this.story[32].con, this.story[32].ta);
    this.saveStory(this.story[33].tit, this.story[33].con, this.story[33].ta);
    this.saveStory(this.story[34].tit, this.story[34].con, this.story[34].ta);
    this.saveStory(this.story[35].tit, this.story[35].con, this.story[35].ta);
    this.saveStory(this.story[36].tit, this.story[36].con, this.story[36].ta);
    this.saveStory(this.story[37].tit, this.story[37].con, this.story[37].ta);
    this.saveStory(this.story[38].tit, this.story[38].con, this.story[38].ta);

    // realistic

    this.saveStory(this.story[39].tit, this.story[39].con, this.story[39].ta);
    this.saveStory(this.story[40].tit, this.story[40].con, this.story[40].ta);
    this.saveStory(this.story[41].tit, this.story[41].con, this.story[41].ta);
    this.saveStory(this.story[42].tit, this.story[42].con, this.story[42].ta);
    this.saveStory(this.story[43].tit, this.story[43].con, this.story[43].ta);
    this.saveStory(this.story[44].tit, this.story[44].con, this.story[44].ta);
    this.saveStory(this.story[45].tit, this.story[45].con, this.story[45].ta);
    this.saveStory(this.story[46].tit, this.story[46].con, this.story[46].ta);
    this.saveStory(this.story[47].tit, this.story[47].con, this.story[47].ta);
    this.saveStory(this.story[48].tit, this.story[48].con, this.story[48].ta);
    this.saveStory(this.story[49].tit, this.story[49].con, this.story[49].ta);
    this.saveStory(this.story[50].tit, this.story[50].con, this.story[50].ta);
    this.saveStory(this.story[51].tit, this.story[51].con, this.story[51].ta);



    // go7a

    this.saveStory(this.story[52].tit, this.story[52].con, this.story[52].ta);
    this.saveStory(this.story[53].tit, this.story[53].con, this.story[53].ta);
    this.saveStory(this.story[54].tit, this.story[54].con, this.story[54].ta);
    this.saveStory(this.story[55].tit, this.story[55].con, this.story[55].ta);
    this.saveStory(this.story[56].tit, this.story[56].con, this.story[56].ta);
    this.saveStory(this.story[57].tit, this.story[57].con, this.story[57].ta);
    this.saveStory(this.story[58].tit, this.story[58].con, this.story[58].ta);
    this.saveStory(this.story[59].tit, this.story[59].con, this.story[59].ta);
    this.saveStory(this.story[60].tit, this.story[60].con, this.story[60].ta);
    this.saveStory(this.story[61].tit, this.story[61].con, this.story[61].ta);
    this.saveStory(this.story[62].tit, this.story[62].con, this.story[62].ta);
    this.saveStory(this.story[63].tit, this.story[63].con, this.story[63].ta);
    this.saveStory(this.story[64].tit, this.story[64].con, this.story[64].ta);
    this.saveStory(this.story[65].tit, this.story[65].con, this.story[65].ta);
    this.saveStory(this.story[66].tit, this.story[66].con, this.story[66].ta);
    this.saveStory(this.story[67].tit, this.story[67].con, this.story[67].ta);
    this.saveStory(this.story[68].tit, this.story[68].con, this.story[68].ta);


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    // sad

    this.saveStory(this.story[69].tit, this.story[69].con, this.story[69].ta);
    this.saveStory(this.story[70].tit, this.story[70].con, this.story[70].ta);
    this.saveStory(this.story[71].tit, this.story[71].con, this.story[71].ta);
    this.saveStory(this.story[72].tit, this.story[72].con, this.story[72].ta);
    this.saveStory(this.story[73].tit, this.story[73].con, this.story[73].ta);
    this.saveStory(this.story[74].tit, this.story[74].con, this.story[74].ta);
    this.saveStory(this.story[75].tit, this.story[75].con, this.story[75].ta);


    /////////////////////////////////////////////////////////////////////////////////////////////////////


    // Amsal
    this.saveStory(this.story[76].tit, this.story[76].con, this.story[76].ta);
    this.saveStory(this.story[77].tit, this.story[77].con, this.story[77].ta);
    this.saveStory(this.story[78].tit, this.story[78].con, this.story[78].ta);
    this.saveStory(this.story[79].tit, this.story[79].con, this.story[79].ta);
    this.saveStory(this.story[80].tit, this.story[80].con, this.story[80].ta);
    this.saveStory(this.story[81].tit, this.story[81].con, this.story[81].ta);
    this.saveStory(this.story[82].tit, this.story[82].con, this.story[82].ta);
    this.saveStory(this.story[83].tit, this.story[83].con, this.story[83].ta);
    this.saveStory(this.story[84].tit, this.story[84].con, this.story[84].ta);
    this.saveStory(this.story[85].tit, this.story[85].con, this.story[85].ta);
    this.saveStory(this.story[86].tit, this.story[86].con, this.story[86].ta);
    this.saveStory(this.story[87].tit, this.story[87].con, this.story[87].ta);
    this.saveStory(this.story[88].tit, this.story[88].con, this.story[88].ta);
    this.saveStory(this.story[89].tit, this.story[89].con, this.story[89].ta);
    this.saveStory(this.story[90].tit, this.story[90].con, this.story[90].ta);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // childern

    this.saveStory(this.story[91].tit, this.story[91].con, this.story[91].ta);
    this.saveStory(this.story[92].tit, this.story[92].con, this.story[92].ta);
    this.saveStory(this.story[93].tit, this.story[93].con, this.story[93].ta);
    this.saveStory(this.story[94].tit, this.story[94].con, this.story[94].ta);
    this.saveStory(this.story[95].tit, this.story[95].con, this.story[95].ta);
    this.saveStory(this.story[96].tit, this.story[96].con, this.story[96].ta);
    this.saveStory(this.story[97].tit, this.story[97].con, this.story[97].ta);
    this.saveStory(this.story[98].tit, this.story[98].con, this.story[98].ta);
    this.saveStory(this.story[99].tit, this.story[99].con, this.story[99].ta);
    this.saveStory(this.story[100].tit, this.story[100].con, this.story[100].ta);
    this.saveStory(this.story[101].tit, this.story[101].con, this.story[101].ta);
    this.saveStory(this.story[102].tit, this.story[102].con, this.story[102].ta);
    this.saveStory(this.story[103].tit, this.story[103].con, this.story[103].ta);
    this.saveStory(this.story[104].tit, this.story[104].con, this.story[104].ta);
    this.saveStory(this.story[105].tit, this.story[105].con, this.story[105].ta);
    this.saveStory(this.story[106].tit, this.story[106].con, this.story[106].ta);
    this.saveStory(this.story[107].tit, this.story[107].con, this.story[107].ta);
    this.saveStory(this.story[108].tit, this.story[108].con, this.story[108].ta);
    this.saveStory(this.story[109].tit, this.story[109].con, this.story[109].ta);
    this.saveStory(this.story[110].tit, this.story[110].con, this.story[110].ta);
    this.saveStory(this.story[111].tit, this.story[111].con, this.story[111].ta);
    this.saveStory(this.story[112].tit, this.story[112].con, this.story[112].ta);
    this.saveStory(this.story[113].tit, this.story[113].con, this.story[113].ta);
    this.saveStory(this.story[114].tit, this.story[114].con, this.story[114].ta);
    this.saveStory(this.story[115].tit, this.story[115].con, this.story[115].ta);
    this.saveStory(this.story[116].tit, this.story[116].con, this.story[116].ta);
    this.saveStory(this.story[117].tit, this.story[117].con, this.story[117].ta);
    this.saveStory(this.story[118].tit, this.story[118].con, this.story[118].ta);
    this.saveStory(this.story[119].tit, this.story[119].con, this.story[119].ta);
    this.saveStory(this.story[120].tit, this.story[120].con, this.story[120].ta);
    this.saveStory(this.story[121].tit, this.story[121].con, this.story[121].ta);
    this.saveStory(this.story[122].tit, this.story[122].con, this.story[122].ta);
    this.saveStory(this.story[123].tit, this.story[123].con, this.story[123].ta);
    this.saveStory(this.story[124].tit, this.story[124].con, this.story[124].ta);
    this.saveStory(this.story[125].tit, this.story[125].con, this.story[125].ta);
    this.saveStory(this.story[126].tit, this.story[126].con, this.story[126].ta);
    this.saveStory(this.story[127].tit, this.story[127].con, this.story[127].ta);
    this.saveStory(this.story[128].tit, this.story[128].con, this.story[128].ta);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // scientific
    this.saveStory(this.story[129].tit, this.story[129].con, this.story[129].ta);
    this.saveStory(this.story[130].tit, this.story[130].con, this.story[130].ta);
    this.saveStory(this.story[131].tit, this.story[131].con, this.story[131].ta);
    this.saveStory(this.story[132].tit, this.story[132].con, this.story[132].ta);
    this.saveStory(this.story[133].tit, this.story[133].con, this.story[133].ta);
    this.saveStory(this.story[134].tit, this.story[134].con, this.story[134].ta);
    this.saveStory(this.story[135].tit, this.story[135].con, this.story[135].ta);
    this.saveStory(this.story[136].tit, this.story[136].con, this.story[136].ta);
    this.saveStory(this.story[137].tit, this.story[137].con, this.story[137].ta);
    this.saveStory(this.story[138].tit, this.story[138].con, this.story[138].ta);
    this.saveStory(this.story[139].tit, this.story[139].con, this.story[139].ta);
    this.saveStory(this.story[140].tit, this.story[140].con, this.story[140].ta);
    this.saveStory(this.story[141].tit, this.story[141].con, this.story[141].ta);
    this.saveStory(this.story[142].tit, this.story[142].con, this.story[142].ta);
    this.saveStory(this.story[143].tit, this.story[143].con, this.story[143].ta);
    this.saveStory(this.story[144].tit, this.story[144].con, this.story[144].ta);
    this.saveStory(this.story[145].tit, this.story[145].con, this.story[145].ta);
    this.saveStory(this.story[146].tit, this.story[146].con, this.story[146].ta);
    this.saveStory(this.story[147].tit, this.story[147].con, this.story[147].ta);
    this.saveStory(this.story[148].tit, this.story[148].con, this.story[148].ta);
    this.saveStory(this.story[149].tit, this.story[149].con, this.story[149].ta);





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // darab
    this.saveStory(this.story[150].tit, this.story[150].con, this.story[150].ta);
    this.saveStory(this.story[151].tit, this.story[151].con, this.story[151].ta);
    this.saveStory(this.story[152].tit, this.story[152].con, this.story[152].ta);
    this.saveStory(this.story[153].tit, this.story[153].con, this.story[153].ta);
    this.saveStory(this.story[154].tit, this.story[154].con, this.story[154].ta);
    this.saveStory(this.story[155].tit, this.story[155].con, this.story[155].ta);
    this.saveStory(this.story[156].tit, this.story[156].con, this.story[156].ta);
    this.saveStory(this.story[157].tit, this.story[157].con, this.story[157].ta);
    this.saveStory(this.story[158].tit, this.story[158].con, this.story[158].ta);
    this.saveStory(this.story[159].tit, this.story[159].con, this.story[159].ta);
    this.saveStory(this.story[160].tit, this.story[160].con, this.story[160].ta);
    this.saveStory(this.story[161].tit, this.story[161].con, this.story[161].ta);
    this.saveStory(this.story[162].tit, this.story[162].con, this.story[162].ta);
    this.saveStory(this.story[163].tit, this.story[163].con, this.story[163].ta);
    this.saveStory(this.story[164].tit, this.story[164].con, this.story[164].ta);



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // انبياء

    this.saveStory(this.story[165].tit, this.story[165].con, this.story[165].ta);
    this.saveStory(this.story[166].tit, this.story[166].con, this.story[166].ta);
    this.saveStory(this.story[167].tit, this.story[167].con, this.story[167].ta);
    this.saveStory(this.story[168].tit, this.story[168].con, this.story[168].ta);
    this.saveStory(this.story[169].tit, this.story[169].con, this.story[169].ta);
    this.saveStory(this.story[170].tit, this.story[170].con, this.story[170].ta);
    this.saveStory(this.story[171].tit, this.story[171].con, this.story[171].ta);
    this.saveStory(this.story[172].tit, this.story[172].con, this.story[172].ta);
    this.saveStory(this.story[173].tit, this.story[173].con, this.story[173].ta);
    this.saveStory(this.story[174].tit, this.story[174].con, this.story[174].ta);
    this.saveStory(this.story[175].tit, this.story[175].con, this.story[175].ta);
    this.saveStory(this.story[176].tit, this.story[176].con, this.story[176].ta);
    this.saveStory(this.story[177].tit, this.story[177].con, this.story[177].ta);
    this.saveStory(this.story[178].tit, this.story[178].con, this.story[178].ta);
    this.saveStory(this.story[179].tit, this.story[179].con, this.story[179].ta);
    this.saveStory(this.story[180].tit, this.story[180].con, this.story[180].ta);


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // تربويه

    this.saveStory(this.story[181].tit, this.story[181].con, this.story[181].ta);
    this.saveStory(this.story[182].tit, this.story[182].con, this.story[182].ta);
    this.saveStory(this.story[183].tit, this.story[183].con, this.story[183].ta);
    this.saveStory(this.story[184].tit, this.story[184].con, this.story[184].ta);
    this.saveStory(this.story[185].tit, this.story[185].con, this.story[185].ta);
    this.saveStory(this.story[186].tit, this.story[186].con, this.story[186].ta);
    this.saveStory(this.story[187].tit, this.story[187].con, this.story[187].ta);
    this.saveStory(this.story[188].tit, this.story[188].con, this.story[188].ta);
    this.saveStory(this.story[189].tit, this.story[189].con, this.story[189].ta);
    this.saveStory(this.story[190].tit, this.story[190].con, this.story[190].ta);
    this.saveStory(this.story[191].tit, this.story[191].con, this.story[191].ta);
    this.saveStory(this.story[192].tit, this.story[192].con, this.story[192].ta);
    this.saveStory(this.story[193].tit, this.story[193].con, this.story[193].ta);
    this.saveStory(this.story[194].tit, this.story[194].con, this.story[194].ta);
    this.saveStory(this.story[195].tit, this.story[195].con, this.story[195].ta);
    this.saveStory(this.story[196].tit, this.story[196].con, this.story[196].ta);


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // sa7aba


    this.saveStory(this.story[197].tit, this.story[197].con, this.story[197].ta);
    this.saveStory(this.story[198].tit, this.story[198].con, this.story[198].ta);
    this.saveStory(this.story[199].tit, this.story[199].con, this.story[199].ta);
    this.saveStory(this.story[200].tit, this.story[200].con, this.story[200].ta);
    this.saveStory(this.story[201].tit, this.story[201].con, this.story[201].ta);
    this.saveStory(this.story[202].tit, this.story[202].con, this.story[202].ta);
    this.saveStory(this.story[203].tit, this.story[203].con, this.story[203].ta);
    this.saveStory(this.story[204].tit, this.story[204].con, this.story[204].ta);
    this.saveStory(this.story[205].tit, this.story[205].con, this.story[205].ta);
    this.saveStory(this.story[206].tit, this.story[206].con, this.story[206].ta);
    this.saveStory(this.story[207].tit, this.story[207].con, this.story[207].ta);
    this.saveStory(this.story[208].tit, this.story[208].con, this.story[208].ta);
    this.saveStory(this.story[209].tit, this.story[209].con, this.story[209].ta);
    this.saveStory(this.story[210].tit, this.story[210].con, this.story[210].ta);
    this.saveStory(this.story[211].tit, this.story[211].con, this.story[211].ta);
    this.saveStory(this.story[212].tit, this.story[212].con, this.story[212].ta);
    this.saveStory(this.story[213].tit, this.story[213].con, this.story[213].ta);
    this.saveStory(this.story[214].tit, this.story[214].con, this.story[214].ta);
    this.saveStory(this.story[215].tit, this.story[215].con, this.story[215].ta);
    this.saveStory(this.story[216].tit, this.story[216].con, this.story[216].ta);
    this.saveStory(this.story[217].tit, this.story[217].con, this.story[217].ta);
    this.saveStory(this.story[218].tit, this.story[218].con, this.story[218].ta);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // حكم وعبر

    this.saveStory(this.story[219].tit, this.story[219].con, this.story[219].ta);
    this.saveStory(this.story[220].tit, this.story[220].con, this.story[220].ta);
    this.saveStory(this.story[221].tit, this.story[221].con, this.story[221].ta);
    this.saveStory(this.story[222].tit, this.story[222].con, this.story[222].ta);
    this.saveStory(this.story[223].tit, this.story[223].con, this.story[223].ta);
    this.saveStory(this.story[224].tit, this.story[224].con, this.story[224].ta);
    this.saveStory(this.story[225].tit, this.story[225].con, this.story[225].ta);
    this.saveStory(this.story[226].tit, this.story[226].con, this.story[226].ta);
    this.saveStory(this.story[227].tit, this.story[227].con, this.story[227].ta);
    this.saveStory(this.story[228].tit, this.story[228].con, this.story[228].ta);
    this.saveStory(this.story[229].tit, this.story[229].con, this.story[229].ta);
    this.saveStory(this.story[230].tit, this.story[230].con, this.story[230].ta);
    this.saveStory(this.story[231].tit, this.story[231].con, this.story[231].ta);
    this.saveStory(this.story[232].tit, this.story[232].con, this.story[232].ta);
    this.saveStory(this.story[233].tit, this.story[233].con, this.story[233].ta);
    this.saveStory(this.story[234].tit, this.story[234].con, this.story[234].ta);
    this.saveStory(this.story[235].tit, this.story[235].con, this.story[235].ta);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // horror

    this.saveStory(this.story[236].tit, this.story[236].con, this.story[236].ta);
    this.saveStory(this.story[237].tit, this.story[237].con, this.story[237].ta);
    this.saveStory(this.story[238].tit, this.story[238].con, this.story[238].ta);
    this.saveStory(this.story[239].tit, this.story[239].con, this.story[239].ta);
    this.saveStory(this.story[240].tit, this.story[240].con, this.story[240].ta);
    this.saveStory(this.story[241].tit, this.story[241].con, this.story[241].ta);
    this.saveStory(this.story[242].tit, this.story[242].con, this.story[242].ta);
    this.saveStory(this.story[243].tit, this.story[243].con, this.story[243].ta);
    this.saveStory(this.story[244].tit, this.story[244].con, this.story[244].ta);
    this.saveStory(this.story[245].tit, this.story[245].con, this.story[245].ta);
    this.saveStory(this.story[246].tit, this.story[246].con, this.story[246].ta);
    this.saveStory(this.story[247].tit, this.story[247].con, this.story[247].ta);
    this.saveStory(this.story[248].tit, this.story[248].con, this.story[248].ta);
    this.saveStory(this.story[249].tit, this.story[249].con, this.story[249].ta);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QURAN

this.saveStory(this.story[250].tit, this.story[250].con, this.story[250].ta);
this.saveStory(this.story[251].tit, this.story[251].con, this.story[251].ta);
this.saveStory(this.story[252].tit, this.story[252].con, this.story[252].ta);
this.saveStory(this.story[253].tit, this.story[253].con, this.story[253].ta);
this.saveStory(this.story[254].tit, this.story[254].con, this.story[254].ta);
this.saveStory(this.story[255].tit, this.story[255].con, this.story[255].ta);
this.saveStory(this.story[256].tit, this.story[256].con, this.story[256].ta);
this.saveStory(this.story[257].tit, this.story[257].con, this.story[257].ta);
this.saveStory(this.story[258].tit, this.story[258].con, this.story[258].ta);
this.saveStory(this.story[259].tit, this.story[259].con, this.story[259].ta);


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// motivation

this.saveStory(this.story[260].tit, this.story[260].con, this.story[260].ta);
this.saveStory(this.story[261].tit, this.story[261].con, this.story[261].ta);
this.saveStory(this.story[262].tit, this.story[262].con, this.story[262].ta);
this.saveStory(this.story[263].tit, this.story[263].con, this.story[263].ta);
this.saveStory(this.story[264].tit, this.story[264].con, this.story[264].ta);
this.saveStory(this.story[265].tit, this.story[265].con, this.story[265].ta);
this.saveStory(this.story[266].tit, this.story[266].con, this.story[266].ta);
this.saveStory(this.story[267].tit, this.story[267].con, this.story[267].ta);
this.saveStory(this.story[268].tit, this.story[268].con, this.story[268].ta);
this.saveStory(this.story[269].tit, this.story[269].con, this.story[269].ta);
this.saveStory(this.story[270].tit, this.story[270].con, this.story[270].ta);
this.saveStory(this.story[271].tit, this.story[271].con, this.story[271].ta);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// amsal

this.saveStory(this.story[272].tit, this.story[272].con, this.story[272].ta);
this.saveStory(this.story[273].tit, this.story[273].con, this.story[273].ta);
this.saveStory(this.story[274].tit, this.story[274].con, this.story[274].ta);
this.saveStory(this.story[275].tit, this.story[275].con, this.story[275].ta);
this.saveStory(this.story[276].tit, this.story[276].con, this.story[276].ta);
this.saveStory(this.story[277].tit, this.story[277].con, this.story[277].ta);
this.saveStory(this.story[278].tit, this.story[278].con, this.story[278].ta);
this.saveStory(this.story[279].tit, this.story[279].con, this.story[279].ta);
this.saveStory(this.story[280].tit, this.story[280].con, this.story[280].ta);
this.saveStory(this.story[281].tit, this.story[281].con, this.story[281].ta);
this.saveStory(this.story[282].tit, this.story[282].con, this.story[282].ta);
this.saveStory(this.story[283].tit, this.story[283].con, this.story[283].ta);
this.saveStory(this.story[284].tit, this.story[284].con, this.story[284].ta);
this.saveStory(this.story[285].tit, this.story[285].con, this.story[285].ta);
this.saveStory(this.story[286].tit, this.story[286].con, this.story[286].ta);


    
  }
}
