import { ReelrPage } from './app.po';

describe('reelr App', () => {
  let page: ReelrPage;

  beforeEach(() => {
    page = new ReelrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
