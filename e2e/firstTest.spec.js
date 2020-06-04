describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('First test', async () => {
    //https://github.com/facebook/react-native/issues/25581
    await expect(element(by.label('Welcome'))).toBeVisible;
  });
});
