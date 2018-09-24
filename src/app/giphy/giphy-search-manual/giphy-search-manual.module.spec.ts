import { GiphySearchManualModule } from './giphy-search-manual.module';

describe('GiphySearchManualModule', () => {
  let giphySearchManualModule: GiphySearchManualModule;

  beforeEach(() => {
    giphySearchManualModule = new GiphySearchManualModule();
  });

  it('should create an instance', () => {
    expect(giphySearchManualModule).toBeTruthy();
  });
});
