
export class RentProperty {
    constructor(page) {
      this.page = page;
    }
  
    async gotoHomePage() {
      await this.page.goto('https://housing.com');
    }
  
    async selectRentOption() {
      await this.page.click('text=Rent'); 
    }
  
    async enterLocation(location) {
      await this.page.fill('input[placeholder="Search for city, locality, project or landmark"]', location); 
    }
  
    async selectFirstLocationSuggestion() {
      await this.page.click('.location-suggestion:first-child'); 
    }
  
    async searchProperties() {
      await this.page.click('text=Search'); 
    }
  
    async verifyResults() {
      await expect(this.page.locator('.result-list-item')).toBeVisible(); 
    }
  }
  