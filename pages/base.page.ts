import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  // Hàm dùng chung cho mọi trang
  async navigate(path: string) {
await this.page.goto(`https://www.saucedemo.com${path}`);
}
}