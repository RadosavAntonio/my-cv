javascript:(function() {
    html = document.getElementsByTagName(`html`)[0];
    html.dir = html.getAttribute(`dir`) === "rtl" ? "ltr":"rtl";
})()