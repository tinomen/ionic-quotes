export class SettingsService {
  private settings = { altQquoteBackground: false };

  setFavQuotesBackground(checked: boolean) {
    this.settings.altQquoteBackground = checked;
  }

  isAltFavQuoteBackground() {
    return this.settings.altQquoteBackground;
  }
}
