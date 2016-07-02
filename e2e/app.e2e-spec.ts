import { AngularfireTestPage } from './app.po';

describe('angularfire-test App', function() {
  let page: AngularfireTestPage;

  beforeEach(() => {
    page = new AngularfireTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
