export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/android") {
      return Response.redirect(
        "https://play.google.com/store/apps/details?id=com.martinfabian.micro_macro_tracker",
        302
      );
    }
    return env.ASSETS.fetch(request);
  },
};
