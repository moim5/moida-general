let scrollY;

function showBackdrop() {
    const backdrop = document.querySelector(".backdrop");
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (backdrop) {
        backdrop.classList.add("active");

        scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
}

function hideBackdrop() {
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) {
        backdrop.classList.remove("active");

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
        document.body.style.paddingRight = "";
    }
}