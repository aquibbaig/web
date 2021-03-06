export const trim = (text, pruneLength) => {
  if (!text) return "";
  if (text.trim().length > pruneLength) {
    return text.substr(0, pruneLength) + "...";
  }
  return text;
};

export const urlParser = (url) => {
  return url.replaceAll("-", " ");
};

const menu = [
  {
    name: "Aquib Baig",
    route: "/",
  },
  {
    name: "Work",
    route: "/work",
  },
  {
    name: "Journal",
    route: "/journal",
  },
];

export const isCurrentPage = (route, pathName) => {
  if (pathName.charAt(pathName.length - 1) === "/") {
    pathName = pathName.slice(0, pathName.length - 1);
  }
  const pathcrumbs = pathName.split("/");
  const finalPath = `/${pathcrumbs[pathcrumbs.length - 1]}`;

  if (route.endsWith(finalPath)) return false;

  return true;
};

export const getBreadcrumbsFromPath = (pathName) => {
  let arr = [
    {
      name: "Aquib Baig",
      route: "/",
    },
  ];
  if (pathName.charAt(pathName.length - 1) === "/") {
    pathName = pathName.slice(0, pathName.length - 1);
  }
  let accumulator = "";
  pathName.split("/").forEach((val, idx) => {
    accumulator += `/${val}`;
    if (val !== "") {
      arr.push({
        name: urlParser(val.charAt(0).toUpperCase() + val.slice(1)),
        route: accumulator.slice(1),
      });
    }
  });
  return arr;
};
