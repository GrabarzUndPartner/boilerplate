'use strict';

import Controller from 'gp-module-base/Controller';
import DomModel from 'gp-module-base/DomModel';
import Viewport from 'gp-module-viewport/Viewport';

export default Controller.extend({
    modelConstructor: DomModel.extend({
        session: {
            viewport: {
                type: 'object',
                default: function() {
                    return null;
                }
            }
        }
    }),

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);

        this.onMeasure = onMeasure.bind(this);
        this.onInit = onInit.bind(this);
        this.onResize = onResize.bind(this);
        this.onScroll = onScroll.bind(this);

        this.model.viewport = new Viewport(this.el, this.el.querySelector('article'));
        this.model.viewport
            .on(this.model.viewport.EVENT_TYPES.MEASURE, this.onMeasure)
            .on(this.model.viewport.EVENT_TYPES.INIT, this.onInit)
            .on(this.model.viewport.EVENT_TYPES.RESIZE, this.onResize)
            .on(this.model.viewport.EVENT_TYPES.SCROLL, this.onScroll);
    }
});

function onMeasure() {
    this.model.viewport.offset.subtractLocal(this.model.viewport.offset);
}

function onInit() {}

function onResize() {}

function onScroll() {
    // console.log('SCROLL', this.model.viewport.scrollY, this.model.viewport.bounds.min.y);
}
