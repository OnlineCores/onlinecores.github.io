import { Onlinecores.Github.IoPage } from './app.po';

describe('onlinecores.github.io App', () => {
  let page: Onlinecores.Github.IoPage;

  beforeEach(() => {
    page = new Onlinecores.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
