window.addEventListener('load', ev => {
    const winClass = '韻';
    const winSelector = `.${winClass}`;
    const activeClass = 'my-active';
    document.querySelectorAll(winSelector).forEach(elem => {
        const ns = Array.from(elem.classList).filter(x => x !== winClass);
        if (ns.length > 0) {
            elem.addEventListener('click', _ev => {
                const elemIsActive = elem.classList.contains(activeClass);
                document.querySelectorAll(winSelector).forEach(x => {
                    for (const n of ns) {
                        if (elemIsActive == false && x.classList.contains(n)) {
                            x.classList.add(activeClass);
                            break;
                        } else {
                            x.classList.remove(activeClass);
                        }
                    }
                });
            });
        }
    });
});
