import { ComputeServiceClientPage } from './app.po';

describe('compute-service-client App', () => {
  let page: ComputeServiceClientPage;

  beforeEach(() => {
    page = new ComputeServiceClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
