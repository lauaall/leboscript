# leboscript
lebo script
et saada kõik vastused eis.ekk.edu.ee ülesandel
pastei script chrome consolei ja vajuta enter

*kui script esimesel korral ei toota siis refreshi lehekylge ja proovi uuesti*
###oneliner:
```
const id = window.location.href.split('/').pop(), href = "/eis/lahendamine/" + id + "/correct-" + id + "?yv_id=&lang=et", openCorrectDialog = () => top.window.open_dlg({dialog_id: 'correct', title: 'lebo', iframe_url: href, force: true, autosize: false});is_reponse_dirty = false, openCorrectDialog();
```
