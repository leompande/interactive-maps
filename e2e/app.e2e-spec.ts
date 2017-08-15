import { InteractiveMapsPage } from './app.po';

describe('interactive-maps App', () => {
  let page: InteractiveMapsPage;

  beforeEach(() => {
    page = new InteractiveMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
