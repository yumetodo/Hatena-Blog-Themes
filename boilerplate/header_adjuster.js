(function() {
    'use strict';

    /**
     * @brief get propaty value as string, remove'px' and parseInt
     * @param dec {CSSStyleDeclaration}
     * @param propatyName {string}
     */
    const extractPx = function(dec, propatyName) {
        return parseInt(dec.getPropertyValue(propatyName).replace(/([0-9]+)px/, '$1'), 10);
    };
    /**
     * @brief convert to string and append 'px'
     * @param n {number}
     */
    const setPx = function(n) {
        return (0 === n) ? '0' : n + 'px';
    };
    /**
     * @brief adjust margin and padding of #blog-title
     */
    const adjustHeader = function() {
        const ratio = 0.20;
        const minMarginBottom = 3;

        const header = document.getElementById('blog-title');
        const computedHeader = window.getComputedStyle(header);
        const currentTotalHeaderHeight = header.offsetHeight
                                       + extractPx(computedHeader, 'margin-top')
                                       + extractPx(computedHeader, 'margin-bottom');
        const expectTotalHeaderHeight = ratio * document.body.offsetWidth;
        if (currentTotalHeaderHeight != expectTotalHeaderHeight) {
            const margin2x = expectTotalHeaderHeight - header.offsetHeight;
            const margin = margin2x / 2;
            header.style.marginTop = setPx((margin < minMarginBottom) ? Math.max(margin2x, 0) : margin);
            header.style.marginBottom = setPx((margin < minMarginBottom) ? minMarginBottom : margin);
            if (margin < minMarginBottom) {
                const headerPureHeight = extractPx(computedHeader, 'height');
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
