import { BarsRover3Page } from './app.po';

describe('bars-rover3 App', () => {
  let page: BarsRover3Page;

  beforeEach(() => {
    page = new BarsRover3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
