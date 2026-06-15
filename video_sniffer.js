/*
قناص روابط البث العربي
Developer: Telegram: @Abdulluh_X
*/

if ($request && $request.url) {
    var url = $request.url;
    if (url.indexOf('.m3u8') !== -1 || url.indexOf('.mp4') !== -1 || url.indexOf('stream') !== -1 || url.indexOf('playlist') !== -1 || url.indexOf('/hls/') !== -1) {
        
        $notify("تم صيد رابط البث بنجاح! 🎬", "افتح سجل النظام لنسخه", url);
        console.log("\n====== VIDEO STREAM URL ======\n" + url + "\n==============================\n");
    }
}
$done({});
