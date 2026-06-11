/*
قناص روابط البث (أكوام وفاصل نت)
Developer: Telegram: @Abdulluh_X
*/

if ($request && $request.url) {
    var url = $request.url;
    // تصفية حزم البث الشائعة ميديا وامتدادات
    if (url.indexOf('.m3u8') !== -1 || url.indexOf('.mp4') !== -1 || url.indexOf('stream') !== -1 || url.indexOf('playlist') !== -1 || url.indexOf('/hls/') !== -1) {
        
        // إشعار فوري على الآيفون
        $notify("تم صيد رابط البث بنجاح! 🎬", "افتح سجل النظام لنسخه", url);
        
        // طباعة في السجل المخصص للسكربتات
        console.log("\n====== VIDEO STREAM URL ======\n" + url + "\n==============================\n");
    }
}
$done({});
