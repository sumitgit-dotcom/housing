
import { test, expect } from '@playwright/test';
import { PropertySearch } from '../../pages/PropertySearch';

test('View Property and Contact Owner on Housing.com', async ({ page }) => {
  const propertySearch = new PropertySearch(page);

  
  await propertySearch.gotoSearchPage();

 
  await propertySearch.viewFirstProperty();

  
  await propertySearch.contactOwner();

  
  await propertySearch.verifyContactForm();
});
