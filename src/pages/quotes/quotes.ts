import { Component, OnInit } from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteCategory: {category: string, quotes: Quote[] , icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {}

  ngOnInit() {
    this.quoteCategory = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log("Cancelled!")
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(selectedQuote: Quote) {
    this.quotesService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }

  // Requires elvis operator (?) in template
  // ionViewDidLoad(){
  //   this.quoteCategory = this.navParams.data;
  // }

}
