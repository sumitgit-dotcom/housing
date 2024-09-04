
import { test, expect } from '@playwright/test';
import { RentProperty } from '../../pages/RentProperty';

test('Rent a Property Search on Housing.com', async ({ page }) => {
  const rentPropertyPage = new RentProperty(page);

  
  await rentPropertyPage.gotoHomePage();

  
  await rentPropertyPage.selectRentOption();

 
  await rentPropertyPage.enterLocation('Mumbai'); 

  
  await rentPropertyPage.selectFirstLocationSuggestion();

  
  await rentPropertyPage.searchProperties();

  
  await rentPropertyPage.verifyResults();
});
