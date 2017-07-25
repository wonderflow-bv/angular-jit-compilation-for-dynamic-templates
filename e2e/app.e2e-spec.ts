import { AppWithDynamicComponentPage } from './app.po';

describe('app-with-dynamic-component App', () => {
  let page: AppWithDynamicComponentPage;

  beforeEach(() => {
    page = new AppWithDynamicComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
