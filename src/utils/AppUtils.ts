export const loadPageData = (location, getRoute) => {
  const path = location.pathname.replace(/\/$/, "");
  const data: productDetailsTypes["data"] =
    (location.state as any)?.data ?? getRoute(path)?.data ?? null;
  return data;
};
