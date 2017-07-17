import { JukeboxPage } from './app.po';

describe('jukebox App', () => {
  let page: JukeboxPage;

  beforeEach(() => {
    page = new JukeboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
