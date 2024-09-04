
class SearchLocation {
    constructor(I) {
      this.I = I;
    }
  
    async goToRentPage() {
      
      this.I.amOnPage('/rent/search-P20spv4dno3f2z884');
    }
  
    async enterLocation(location) {
      
      this.I.click('input[placeholder="Search for city, locality, project or landmark"]');
      this.I.fillField('input[placeholder="Search for city, locality, project or landmark"]', location);
    }
  
    async selectFirstLocationSuggestion() {
      
      this.I.waitForElement('.location-suggestion:first-child', 5);
      this.I.click('.location-suggestion:first-child');
    }
  
    async searchProperties() {
      
      this.I.click('button:has-text("Search")');
    }
  
    async verifySearchResults(location) {
      
      this.I.see(location);
    }
  }
  
  module.exports = new SearchLocation();
  