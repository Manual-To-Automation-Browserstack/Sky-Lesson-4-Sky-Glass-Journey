import { Configure } from '../models/Configure';
import { CookieConsent } from "../models/CookieConsent";
import { test, expect } from '@playwright/test';

var testUrl = 'https://www.sky.com/glass/buy/personalise-sky-glass?irct=glassHome-glass-hero-sizes-medium';

test('Small Frame, Black, with Black speaker, 24 months', async({page}) => {
  const config = new Configure(page);
  const cookieConsent = new CookieConsent(page);

  await cookieConsent.navigate(testUrl);
  await cookieConsent.agree();

  await config.switchCountry(testUrl);

  await config.selectFrameSize('small');
  await config.selectPaymentOption('full');
  await delay(6000);
  await config.clickConfirmButton();
  await config.selectFrameColor('black');
  await config.selectSpeakerColor('black');
  await config.clickContinueButton();
});

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}