import 'script-loader!fg-loadcss';
import 'script-loader!fg-loadcss/src/cssrelpreload';

import objectFitImages from 'object-fit-images';
Array.from(document.querySelectorAll('picture')).forEach(function(el) {
    objectFitImages(el);
});
