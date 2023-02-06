# leboscript
lebo script
et saada kõik vastused eis.ekk.edu.ee ülesandel
pastei script chrome consolei ja vajuta enter
```
const id = window.location.href.split('/').pop();
let href = "/eis/lahendamine/" + id + "/correct-" + id + "?yv_id=&lang=et";
const openCorrectDialog = () => top.window.open_dlg({dialog_id: 'correct', title: 'lebo', iframe_url: href, force: true, autosize: true});
openCorrectDialog();
```
