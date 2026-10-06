export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/android") {
      return Response.redirect(
        "https://play.google.com/store/apps/details?id=com.martinfabian.micro_macro_tracker",
        302
      );
    }
    // CoachIn1 moved to its own domain; keep old links (also the ones in the app stores) working.
    if (url.pathname === "/coachin1" || url.pathname.startsWith("/coachin1/")) {
      const path = url.pathname.slice("/coachin1".length) || "/";
      return Response.redirect("https://coachin1.com" + path + url.search, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
