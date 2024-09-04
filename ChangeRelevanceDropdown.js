
export class ChangeRelevanceDropdown {
    constructor(page) {
      this.page = page;
    }
  
    
    async goToRentPage() {
      await this.page.goto('https://housing.com/rent/search-P20spv4dno3f2z884');
    }
  
    
    async selectRelevanceOption(optionLabel) {
      await this.page.waitForSelector('select#sortby', { timeout: 5000 });
      await this.page.selectOption('select#sortby', { label: optionLabel });
    }
  
    
    async waitForReload() {
      await this.page.waitForTimeout(3000); 
    }
  
    []
    async verifySelectedOption(optionLabel) {
      const selectedOption = await this.page.$eval('select#sortby', el => el.options[el.selectedIndex].textContent.trim());
      if (selectedOption !== optionLabel) {
        throw new Error(`Expected selected option to be "${optionLabel}", but got "${selectedOption}".`);
      }
    }
  }
  