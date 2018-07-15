'use strict';

module.exports = {
    plugins: [
        {
            cleanupAttrs: true
        },
        {
            removeDoctype: true
        },
        {
            removeXMLProcInst: true
        },
        {
            removeComments: true
        },
        {
            removeMetadata: true
        },
        {
            removeTitle: true
        },
        {
            removeDesc: true
        },
        {
            removeUselessDefs: false
        },
        {
            removeEditorsNSData: true
        },
        {
            removeEmptyAttrs: true
        },
        {
            removeHiddenElems: true
        },
        {
            removeEmptyText: true
        },
        {
            removeEmptyContainers: true
        },
        {
            removeViewBox: false
        },
        {
            cleanUpEnableBackground: true
        },
        {
            convertStyleToAttrs: true
        },
        {
            convertColors: true
        },
        {
            convertPathData: true
        },
        {
            convertTransform: true
        },
        {
            removeUnknownsAndDefaults: true
        },
        {
            removeNonInheritableGroupAttrs: true
        },
        {
            removeUselessStrokeAndFill: true
        },
        {
            removeUnusedNS: true
        },
        {
            cleanupIDs: false
        },
        {
            cleanupNumericValues: true
        },
        {
            moveElemsAttrsToGroup: true
        },
        {
            moveGroupAttrsToElems: true
        },
        {
            collapseGroups: true
        },
        {
            removeRasterImages: false
        },
        {
            mergePaths: true
        },
        {
            convertShapeToPath: false
        },
        {
            sortAttrs: true
        },
        {
            transformsWithOnePath: false
        },
        {
            removeDimensions: true
        },
        {
            removeAttrs: {
                attrs: '(stroke|fill)'
            }
        }
    ]
};
