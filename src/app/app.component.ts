import { Component, ViewChildren, QueryList, OnDestroy } from '@angular/core';

import { Platform , IonRouterOutlet, AlertController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonSubscription: any;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }
  showSplash = true;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backButtonEvent();
      /////////// splash
      this.platform.ready().then(() => {
        
              this.statusBar.styleDefault();
              this.splashScreen.hide();  // <-- hide static image
        
              timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
            });
    });
  }

  backButtonEvent() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === '/home'
        ) {
          this.presentAlertConfirm();
        }
      });
    });
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'هل تريد الخروج',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }


  // Called when view is left
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // Unregister the custom back button action for this page
    this.backButtonSubscription.unsubscribe();
  }




}
