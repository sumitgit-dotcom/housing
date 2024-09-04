
export class SearchLocation {
  constructor(page) {
    this.page = page;
  }

  async goToRentPage() {
    await this.page.goto('https://housing.com/rent/search-P20spv4dno3f2z884');
  }

  
  async enterLocation(location) {
    await this.page.click('input[placeholder="Search for city, locality, project or landmark"]');
    await this.page.fill('input[placeholder="Search for city, locality, project or landmark"]', location);
  }

  
  async selectFirstLocationSuggestion() {
    await this.page.waitForSelector('.location-suggestion:first-child', { timeout: 5000 });
    await this.page.click('.location-suggestion:first-child');
  }

  
  async searchProperties() {
    await this.page.click('button:has-text("Search")');
  }

  
  async verifySearchResults(location) {
    await this.page.waitForSelector('text=' + location);
    await expect(this.page).toHaveText(location);
  }
}
