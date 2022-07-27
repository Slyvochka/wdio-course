import BlogPage from '../pages/blog-page';

describe('Open Blog Page', () => {
  it('get the list of all resent posts & assert the text length of each list item > 10 characters', async () => {
    await BlogPage.open();
    const recentPosts = await BlogPage.recentPosts;

    // Loop through the list and assert the text length is greater than 10
    for (let i = 0; i < recentPosts.length; i++) {
      let item = await recentPosts[i].getText();
      await expect(item.length).toBeGreaterThan(12); // Jest assertions
      //  if (item.length > 10) {
      //    listItem.push(item);
      //  }
    }

    // Assert the total length of the list is 5
    await expect(recentPosts).toBeElementsArrayOfSize(5);
    // or  await expect(recentPosts).toHaveLength(5);   // default built-in Jest macher
  });
});
