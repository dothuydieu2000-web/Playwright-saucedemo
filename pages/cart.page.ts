import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly checkoutButton = this.page.getByRole('button', { name: 'Checkout' });

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async proceedToRemove(productName: string) {
    await this.page
      .locator('.cart_item', { hasText: productName })
      .getByRole('button', { name: 'Remove' })
      .click();
  }
}