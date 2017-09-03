import { Onlinecores.Github.IoPage } from './app.po';

describe('onlinecores.github.io App', () => {
  let page: Onlinecores.Github.IoPage;

  beforeEach(() => {
    page = new Onlinecores.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
