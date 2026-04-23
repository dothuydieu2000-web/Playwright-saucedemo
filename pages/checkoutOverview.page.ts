import { BasePage } from './base.page';

export class CheckoutOverviewPage extends BasePage {
  readonly finishButton = this.page.getByRole('button', { name: 'Finish' });

  async proceedToCheckout_overviewfinish() {
    await this.finishButton.click();
  }
  readonly cancelButton = this.page.getByRole('button', { name: 'Cancel' });

  async proceedToCheckout_overviewcancel() {
    await this.cancelButton.click();
  }

 
}