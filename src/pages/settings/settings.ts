import { Component } from '@angular/core';
import {IonicPage, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }

  onToggle(toggleEvent: Toggle) {
    console.log(toggleEvent);
    this.settingsService.setFavQuotesBackground(toggleEvent.checked)
    // this.settingsService.setFavQuotesBackground(toggleEvent.checked ? 'altQuoteBackground' : 'quoteBackground');
  }

  isAltFavQuoteBackground() {
    return this.settingsService.isAltFavQuoteBackground();
  }

}
