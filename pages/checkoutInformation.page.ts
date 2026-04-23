  import { BasePage } from './base.page';
  
  export class CheckoutInformationPage extends BasePage {
  private readonly firstname = this.page.getByRole('textbox', { name: 'First Name' });
  private readonly lastname = this.page.getByRole('textbox', { name: 'Last Name' });
  private readonly zipcode = this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
  private readonly continuebutton = this.page.getByRole('button', { name: 'Continue' });
  async proceedcheckout_information(firstname: string, lastname: string, zipcode: string) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.zipcode.fill(zipcode);
    await this.continuebutton.click();
  }
}