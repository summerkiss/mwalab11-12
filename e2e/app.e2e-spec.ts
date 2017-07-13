import { TestangulPage } from './app.po';

describe('testangul App', () => {
  let page: TestangulPage;

  beforeEach(() => {
    page = new TestangulPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
