type RootStackParamList = {
  home: undefined;
  "review-detail": undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
