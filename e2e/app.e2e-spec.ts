import { ContainerPage } from './app.po';

describe('container App', () => {
  let page: ContainerPage;

  beforeEach(() => {
    page = new ContainerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
