const { expect } = require('@playwright/test');

class Configure {
    
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;

      this.countrySwitchSelector = page.locator("id=mast-f-country-switcher");
      this.ukSelector = page.locator("[value=gb]");

      // Selectors for Frame Sizes
      this.smallSelector = page.locator("data-test-id=configure-size-selection-43");
      this.mediumSelector = page.locator("data-test-id=configure-size-selection-55");
      this.largeSelector = page.locator("data-test-id=configure-size-selection-65");

      // Selector for View more payment options
      this.viewPaymentOptionsSelector = page.locator("data-test-id=configure-more-payment-options");
      this.monthly48Selector = page.locator("data-test-id=configure-choose-plan-CCA_48M_649_10UFP-selection");
      this.monthly24Selector = page.locator("data-test-id=configure-choose-plan-CCA_24M_649_20UFP-selection");
      this.payInFullSelector = page.locator("data-test-id=configure-choose-upfront-selection");
      this.confirmPaymentTypeSelector = page.locator("data-test-id=configure-payment-confirm-button");
      //this.confirmPaymentTypeSelector = page.locator('button:has-text("Confirm")');

      // Selectors for the frame colors
      this.frameSelectorBlack = page.locator("data-test-id=configure-frame-selection-LLAMA_BLACK");
      this.frameSelectorBlue = page.locator("data-test-id=configure-frame-selection-LLAMA_BLUE");
      this.frameSelectorGreen = page.locator("data-test-id=configure-frame-selection-LLAMA_GREEN");
      this.frameSelectorPink = page.locator("data-test-id=configure-frame-selection-LLAMA_PINK");
      this.frameSelectorWhite = page.locator("data-test-id=configure-frame-selection-LLAMA_WHITE");

      // Selectors for the speaker colors
      this.speakerSelectorBlack = page.locator("data-test-id=configure-speaker-selection-LLAMA_BLACK");
      this.speakerSelectorBlue = page.locator("data-test-id=configure-speaker-selection-LLAMA_BLUE");
      this.speakerSelectorGreen = page.locator("data-test-id=configure-speaker-selection-LLAMA_GREEN");
      this.speakerSelectorPink = page.locator("data-test-id=configure-speaker-selection-LLAMA_PINK");
      this.speakerSelectorWhite = page.locator("data-test-id=configure-speaker-selection-LLAMA_WHITE");

      // Selector for the continue button
      this.continueSelector = page.locator("data-test-id=configure-continue");
    }

    async switchCountry(pageUrl) {
      //await this.countrySwitchSelector.click();
      //await this.ukSelector.click();
      await this.countrySwitchSelector.selectOption({value: 'gb'});
      await this.page.goto(pageUrl);
    }

    async selectFrameSize(frameSize) {
        switch(frameSize) {
          case 'small':
            await this.smallSelector.click();
            break;
          case 'medium':
            await this.mediumSelector.click();
            break;
          case 'large':
            await this.largeSelector.click();
            break;
          default:
            throw new Error('Unidentified frame size has been specifired');
        }
    }

    async selectFrameColor(frameColor) {
      await this.frameSelectorBlack.waitToBeDisplayed
      switch(frameColor) {
        case 'black':
          await this.frameSelectorBlack.click();
          break;
        case 'blue':
          await this.frameSelectorBlue.click();
          break;
        case 'green':
          await this.frameSelectorGreen.click();
          break;
        case 'pink':
          await this.frameSelectorPink.click();
          break;
        case 'white':
          await this.frameSelectorWhite.click();
          break;
        default:
          throw new Error('Unidentified frame color has been specified');
      }
    }

    async selectSpeakerColor(speakerColor) {
      switch(speakerColor) {
        case 'black':
          await this.speakerSelectorBlack.click();
          break;
        case 'blue':
          await this.speakerSelectorBlue.click();
          break;
        case 'green':
          await this.speakerSelectorGreen.click();
          break;
        case 'pink':
          await this.speakerSelectorPink.click();
          break;
        case 'white':
          await this.speakerSelectorWhite.click();
          break;
        default:
          throw new Error('Unidentified speaker color has been specified');
      }
    }

    async selectPaymentOption(paymentTerm) {
      await this.viewPaymentOptionsSelector.click();

      switch(paymentTerm) {
        case '48':
          await this.monthly24Selector.click();
          await this.monthly48Selector.click();
          break;
        case '24':
          await this.monthly24Selector.click();
          break;
        case 'full':
          await this.payInFullSelector.click();
          break;
        default:
          throw new Error('Unidentified payment term has been specified');
      }
    }

    async clickConfirmButton() {
      await this.confirmPaymentTypeSelector.click();
    }

    async clickContinueButton() {
      await this.continueSelector.click();
    }

    get confirmButton() { return this.page.locator("data-test-id=configure-payment-confirm-button")}
  }

  module.exports = { Configure };