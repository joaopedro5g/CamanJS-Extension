function addImage(canvas,src,text,options){
    Caman(canvas, src, function () {
        this.brightness(options.brightness ? options.brightness : 0).render();
        this.contrast(options.contrast ? options.contrast : 0).render();
    });
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    setTimeout(function(){
        ctx.font = "30px Georgia";
        ctx.fillText(text.title ? text.title : 'Add title here', 200, 150);
        ctx.font = "20px Georgia";
        ctx.fillText(text.subtitle ? text.subtitle : 'Add subtitle here', 210, 200);
    },500);
}
function download(imageName) {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute("download",imageName);
    //download.setAttribute("download","archive.png");
}