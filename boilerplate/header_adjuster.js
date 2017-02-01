(function() {
    'use strict';

    /**
     * @param propatyValue {string}
     */
    const extractPx = function(propatyValue) {
        return parseInt(propatyValue.replace(/([0-9]+)px/, '$1'), 10);
    };
    /**
     * @param n {number}
     */
    const setPx = function(n) {
        return (0 === n) ? '0' : n + 'px';
    };
    const adjustHeader = function() {
        const ratio = 0.20;
        const minMarginBottom = 3;

        const header = document.getElementById('blog-title');
        const headerMarginTop = extractPx(window.getComputedStyle(header).getPropertyValue('margin-top'));
        const headerMarginBottom = extractPx(window.getComputedStyle(header).getPropertyValue('margin-bottom'));
        const currentTotalHeaderHeight = header.offsetHeight + headerMarginTop + headerMarginBottom;
        const expectTotalHeaderHeight = ratio * document.body.offsetWidth;
        if (currentTotalHeaderHeight != expectTotalHeaderHeight) {
            const margin2x = expectTotalHeaderHeight - header.offsetHeight;
            const margin = margin2x / 2;
            header.style.marginTop = setPx((margin < minMarginBottom) ? Math.max(margin2x, 0) : margin);
            header.style.marginBottom = setPx((margin < minMarginBottom) ? minMarginBottom : margin);
            if (margin < minMarginBottom) {
                const headerPureHeight = extractPx(window.getComputedStyle(header).getPropertyValue('height'));
                const padding = Math.max(expectTotalHeaderHeight - headerPureHeight, 0);
                header.style.paddingTop = setPx(padding / 2);
                header.style.paddingBottom = setPx(padding / 2);
            }
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        adjustHeader();
    });
    {
        let resizeTimer;
        window.addEventListener('resize', function() {
            if (resizeTimer !== false) {
                clearTimeout(resizeTimer);
            }
            resizeTimer = setTimeout(function() {
                adjustHeader();
            }, 0.1);
        });
    }
}());
