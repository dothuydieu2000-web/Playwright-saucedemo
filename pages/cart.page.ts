import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly checkoutButton = this.page.locator('#checkout');

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async proceedToRemove(productName: string) {
    await this.page
      .locator('.cart_item', { hasText: productName })
      .locator('button:has-text("Remove")')
      .click();
  }
}