(function () {
    'use strict'

    const dialog = {
        close: function () {
            location.href = "index.html"
        },
        init: function () {
            document.querySelector("main").addEventListener('click', (event) => {
                this.close()
            })
            document.addEventListener('keydown', (event) => {
                if(event.keyCode === 27) {
                    this.close()
                }
            })
        }
    }

    dialog.init()
}())