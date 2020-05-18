var clip = function (a) { var b = document.createRange(); b.selectNodeContents(a); a = window.getSelection(); a.removeAllRanges(); a.addRange(b) };
function uploadImageUrl(a) {
    Swal.fire({ type: "warning", title: "上传", text: "是否上传粘贴板链接图片？", confirmButtonText: "确定", showCancelButton: !0, cancelButtonText: "取消", focusCancel: !0 }).then(function (b) {
        b.value ? $.ajax({
            url: "api/index/imagePreview?url=" + a, cache: !1, xhrFields: { responseType: "blob" }, success: function (b) {
                var c = a.split("/").pop(); "" == c ? spop({ template: "非法链接，注意！仅支持图片链接", autoclose: 3000, style: "error" }) : (-1 == c.lastIndexOf(".") && (c += ".jpg"), b.name = c, c = [], c.push(b), 0 < c.length && (b = $("#fih"), $(".file-drop-zone-title").remove(),
                    b.fileinput("readFiles", c), spop({ template: "已添加到上传列表", autoclose: 3000, style: "success" })))
            }, error: function (a) { spop({ template: "非法链接，注意！仅支持图片链接", autoclose: 3000, style: "error" }) }
        }) : Swal.close()
    })
}
function uploadBlobFile(a) { var b = $("#fih"); Swal.fire({ type: "warning", title: "上传", text: "是否上传粘贴板图片？", confirmButtonText: "确定", showCancelButton: !0, cancelButtonText: "取消", focusCancel: !0 }).then(function (e) { e.value ? ($(".file-drop-zone-title").remove(), b.fileinput("readFiles", a), spop({ template: "已添加到上传列表", autoclose: 3000, style: "success" })) : Swal.close() }) }
function generateFileId(a) { if (!a) return null; var b = String(a.relativePath || a.webkitRelativePath || $h.getFileName(a) || null); return b ? a.size + "_" + b.replace(/\s/img, "_") : null }
document.addEventListener("paste", function (a) { if (a.clipboardData || a.originalEvent) { var b = a.clipboardData || a.originalEvent.clipboardData; if (b.items) { b = b.items; var e = b.length, c = null; a.preventDefault(); a = []; for (var d = 0; d < e; d++)-1 !== b[d].type.indexOf("image") ? (c = b[d].getAsFile(), a.push(c), 0 < a.length && uploadBlobFile(a)) : "text/plain" == b[d].type && b[d].getAsString(function (a) { uploadImageUrl(a) }) } } });
