const id = window.location.href.split('/').pop();
let href = "/eis/lahendamine/" + id + "/correct-" + id + "?yv_id=&lang=et";
const openCorrectDialog = () => top.window.open_dlg({dialog_id: 'correct', title: 'lebo', iframe_url: href, force: true, autosize: true});
is_reponse_dirty = false
openCorrectDialog();
