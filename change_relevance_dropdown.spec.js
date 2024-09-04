
import { test, expect } from '@playwright/test';

test.describe('Housing.com Relevance Dropdown', () => {

  test('Change relevance and verify results', async ({ page }) => {
    
    
    await page.goto('https://housing.com/rent/search-P20spv4dno3f2z884');

    
    await page.waitForSelector('select#sortby'); 

   
    await page.selectOption('select#sortby', { label: 'Price Low to High' });

    
    await page.waitForTimeout(3000); 
    
   
    const selectedValue = await page.$eval('select#sortby', el => el.value);
    expect(selectedValue).toBe('plth'); 
    
    
    
  });
});
