export default {
  async fetch(request, env, ctx) {
    return new Response("Worker działa poprawnie!", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
// test deploy
