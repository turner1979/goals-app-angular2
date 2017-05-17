import { GoalsAppAngular2Page } from './app.po';

describe('goals-app-angular2 App', () => {
  let page: GoalsAppAngular2Page;

  beforeEach(() => {
    page = new GoalsAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
