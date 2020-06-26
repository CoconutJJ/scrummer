/**
 * This Babel config file is only for the Jest Testing Suite. In order to support
 * Typescript, Jest uses Babel to transpile first.
 * 
 * Deleting this file or modifying anything in this file should only affect
 * the testing suite.
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript'
    ],
};