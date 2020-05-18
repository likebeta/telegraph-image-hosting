var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.arrayIteratorImpl = function (a) { var c = 0; return function () { return c < a.length ? { done: !1, value: a[c++] } : { done: !0 } } }; $jscomp.arrayIterator = function (a) { return { next: $jscomp.arrayIteratorImpl(a) } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, f) { a != Array.prototype && a != Object.prototype && (a[c] = f.value) }; $jscomp.getGlobal = function (a) { return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) };
$jscomp.SymbolClass = function (a, c) { this.$jscomp$symbol$id_ = a; $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: c }) }; $jscomp.SymbolClass.prototype.toString = function () { return this.$jscomp$symbol$id_ }; $jscomp.Symbol = function () { function a(f) { if (this instanceof a) throw new TypeError("Symbol is not a constructor"); return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (f || "") + "_" + c++, f) } var c = 0; return a }();
$jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.iterator; a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")); "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
$jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.asyncIterator; a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (a) { $jscomp.initSymbolIterator(); a = { next: a }; a[$jscomp.global.Symbol.iterator] = function () { return this }; return a };
$jscomp.iteratorFromArray = function (a, c) { $jscomp.initSymbolIterator(); a instanceof String && (a += ""); var f = 0, e = { next: function () { if (f < a.length) { var b = f++; return { value: c(b, a[b]), done: !1 } } e.next = function () { return { done: !0, value: void 0 } }; return e.next() } }; e[Symbol.iterator] = function () { return e }; return e };
$jscomp.polyfill = function (a, c, f, e) { if (c) { f = $jscomp.global; a = a.split("."); for (e = 0; e < a.length - 1; e++) { var b = a[e]; b in f || (f[b] = {}); f = f[b] } a = a[a.length - 1]; e = f[a]; c = c(e); c != e && null != c && $jscomp.defineProperty(f, a, { configurable: !0, writable: !0, value: c }) } }; $jscomp.polyfill("Array.prototype.keys", function (a) { return a ? a : function () { return $jscomp.iteratorFromArray(this, function (a) { return a }) } }, "es6", "es3");
const BASE_URL = window.location.origin;
$("#fih").fileinput({
    language: "en",
    theme: "fas",
    previewFileType: "image",
    uploadUrl: BASE_URL + "/v1/upload",
    uploadExtraData: function (a, b) {
        var c = [], e = [];
        $("#publicStorage input[name='apiType']:checked").each(function () { c.push($(this).val()) });
        $("#privateStorage input[name='privateStorage']:checked").each(function () { e.push($(this).val()) });
        return { apiType: c, privateStorage: e }
    },
    allowedFileExtensions: ["jpeg", "jpg", "png", "gif", "ico"],
    overwriteInitial: true,
    initialPreview: [],
    initialPreviewConfig: [],
    showClose: false,
    maxFileSize: 5120,
    maxFileCount: 10,
    uploadAsync: true,
    browseClass: "btn btn-secondary",
    browseLabel: "Select Image(s)",
    removeClass: "btn btn-danger",
    removeLabel: "Clear",
    uploadClass: "btn btn-info",
    uploadLabel: "Upload",
    dropZoneTitle: "Drag & drop files here ...<br>or<br>Copy & paste screenshots here ..."
})

$("#fih").on("fileuploaded", function (t, e, s, o) {
    e.response = {
        "code": 200,
        "msg": "success",
        "data": {
            "url": {
                "url": BASE_URL + e.response[0].src,
                // "distribute": BASE_URL + e.response[0].src,
                // "private": []
            }
        }
    }
    var a = (e.form, e.files, e.extra, e.response);
    if ("200" == a.code) {
        $("showurl").css("display") || a.data.url && $("#showurl").show();
        var r = a.data.url,
            o = 0;
        for (var i in r)
            if (1 == ++o) var n = '<tr><td class="fih-imageucode-cover" width="100px" rowspan="' + Object.getOwnPropertyNames(r).length + '"><img src="' + r[i] + '"/></td><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="' + r[i] + '"></td></tr>',
                l = '<tr><td class="fih-imageucode-cover" width="100px" rowspan="' + Object.getOwnPropertyNames(r).length + '"><img src="' + r[i] + '"/></td><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="&lt;img src=&quot;' + r[i] + '&quot;/&gt;"></td></tr>',
                p = '<tr><td class="fih-imageucode-cover" width="100px" rowspan="' + Object.getOwnPropertyNames(r).length + '"><img src="' + r[i] + '"/></td><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="[img]' + r[i] + '[/img]"></td></tr>',
                c = '<tr><td class="fih-imageucode-cover" width="100px" rowspan="' + Object.getOwnPropertyNames(r).length + '"><img src="' + r[i] + '"/></td><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="![](' + r[i] + ')"></td></tr>',
                d = '<tr><td class="fih-imageucode-cover" width="100px" rowspan="' + Object.getOwnPropertyNames(r).length + '"><img src="' + r[i] + '"/></td><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="[![' + r[i] + "](" + r[i] + ")](" + r[i] + ')"></td></tr>';
            else n = n + '<tr><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="' + r[i] + '"></td></tr>', l = l + '<tr><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="&lt;img src=&quot;' + r[i] + '&quot;/&gt;"></td></tr>', p = p + '<tr><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="[img]' + r[i] + '[/img]"></td></tr>', c = c + '<tr><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="![](' + r[i] + ')"></td></tr>', d = d + '<tr><td><span class="fih-imageucode-tip">' + i + '</span><input type="text" class="form-control" onfocus="this.select();" value="[![' + r[i] + "](" + r[i] + ")](" + r[i] + ')"></td></tr>';
        n += "</tr>", l += "</tr>", p += "</tr>", c += "</tr>", d += "</tr>", $("#urlcodes").append(n), $("#htmlcodes").append(l), $("#bbcodes").append(p), $("#markdowncodes").append(c), $("#markdowncodes2").append(d)
    } else spop({
        template: a.msg,
        autoclose: 3000,
        style: "error",
        position: "top-center"
    })
});

function changeFileSize(a) { return 0 == a ? "0 B" : 1024 > a ? Math.round(a) + " B" : 1048576 > a ? Math.round(a / 1024) + " KB" : 1073741824 > a ? Math.round(a / 1048576) + " MB" : 1099511627776 > a ? Math.round(a / 1073741824) + " GB" : Math.round(a / 1099511627776) + " TB" };
