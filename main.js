((_imageContainer)=>{
    var _focusElement = _imageContainer.querySelector('div.focus');
    var _blurElement = _imageContainer.querySelector('div.blur');
    _imageContainer.onmousemove= (e)=>{
        _focusElement.style.setProperty('clip-path', 'circle(60px at '+ (e.screenX-30)+'px '+(e.screenY-30)+'px)');
    }

})( document.querySelector('div.image-container'))