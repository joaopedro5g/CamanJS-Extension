function addImage(canvas,src,options){
    Caman(canvas, src, function () {
        this.brightness(options.brightness ? options.brightness : 0).render();
        this.contrast(options.contrast ? options.contrast : 0).render();
    });
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    setTimeout(function(){
        console.log(options.title.fontSize);
        ctx.font = `${options.title.fontSize ? options.title.fontSize : 20}px ${options.title.fontFamily ? options.title.fontFamily : 'Arial'}`;
        ctx.fillText(options.title.text ? options.title.text : 'Add title here', options.title.positionX ? options.title.positionX : 200, options.title.positionY ? options.title.positionY : 200);
        ctx.font = `${options.subtitle.fontSize ? options.subtitle.fontSize : 10}px ${options.subtitle.fontFamily ? options.subtitle.fontFamily : 'Arial'}`;
        ctx.fillText(options.subtitle.text ? options.subtitle.text : 'Add subtitle here', options.subtitle.positionX ? options.subtitle.positionX : 200, options.subtitle.positionY ? options.subtitle.positionY : 200);
    },500);
}
function download(imageName) {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute("download",imageName);
}