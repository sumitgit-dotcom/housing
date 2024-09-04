
export class PropertySearch {
    constructor(page) {
      this.page = page;
    }
  
    async gotoSearchPage() {
      await this.page.goto ('https://housing.com/rent/search-P20spv4dno3f2z884');
    }
  
    async viewFirstProperty() {
      
      await this.page.click('.listingCardWrapper a'); 
    }
  
    async contactOwner() {
      
      await this.page.click('text=Contact Owner'); 
    }
  
    async verifyContactForm() {
      
      await expect(this.page.getByPlaceholder('Your name')).toBeVisible(); 
    }
  }
  