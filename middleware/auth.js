export default function({app, route, redirect}){
	if (route.path !== "/signin" && route.path !== "/signup") {
    if (!app.$fire.auth.currentUser) {
      return redirect("/signin");
    }
  } else if (route.path === "/signin") {
    if (!app.$fire.auth.currentUser) {
    } else {
      return redirect("/");
    }
  }
}