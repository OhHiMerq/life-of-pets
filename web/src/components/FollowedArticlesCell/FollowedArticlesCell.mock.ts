// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  followedArticles: [
    { id: 42, body: 'what', userId: 2 },
    { id: 43, body: 'where', userId: 1 },
    { id: 44, body: 'when', userId: 1 },
  ],
  follow: [{ id: 1, followerId: 1, followsId: 2 }],
})
