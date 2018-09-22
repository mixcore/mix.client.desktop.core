import { Component } from '@angular/core';
import { ElectronService } from '../providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../environments/environment';

@Component({
  selector: 'app-portal-root',
  templateUrl: './app-portal.component.html',
  styleUrls: ['./app-portal.component.scss']
})
export class AppPortalComponent {
  constructor(public electronService: ElectronService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
