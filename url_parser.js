class UrlParser {
  constructor(route) {
    this.route = route;
  }

  getUrl() {
    return window ? window.location : null;
  }

  setLocation(newLocation) {
    history.pushState(, "page 2", "bar.html");
  }

  parseUrl() {
    const url = this.getUrl();
    const { pathname, search, hash } = url;
    if(pathname){
      let pathParams = pathname.split('/');
    }

    console.log(pathname, search, hash)
  }


}

const defaultLocation = "/6/api/listings/3?sort=desc&limit=10";
const urlTemplate = "/:version/api/:collecton/:id";
let parser = new UrlParser(urlTemplate);
parser.setLocation(defaultLocation);
console.log(parser.parseUrl());
