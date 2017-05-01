import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  quotesBackground: string;

  constructor(private quotesService: QuotesService,
              private settingsService: SettingsService,
              private modalCtrl: ModalController) {}

  loadQuotes() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  ionViewWillEnter() {
    this.loadQuotes();
    this.quotesBackground = this.settingsService.isAltFavQuoteBackground() ? 'altQuoteBackground' : 'quoteBackground'
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((removeFav: boolean) => {
      if(removeFav) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.loadQuotes();
  }

}
