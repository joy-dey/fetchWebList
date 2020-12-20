(()=>{
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.key === 'i') {
            alert('The Website Was Last Modified on ' + document.lastModified);
        }
        if (e.key === 'F12') {
            e.preventDefault();
        }
    })
    document.oncontextmenu = function() {
        return false;
    };
})();