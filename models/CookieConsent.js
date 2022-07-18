class CookieConsent {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
      this.agreeButton = page.frameLocator("#sp_message_iframe_474555").locator("text=Agree");
    }

    async navigate(pageUrl) {
      await this.page.goto(pageUrl);
    }

    async agree() {
      await this.agreeButton.click();
    }
  }
  module.exports = { CookieConsent };