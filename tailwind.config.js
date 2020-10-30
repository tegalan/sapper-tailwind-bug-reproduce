const production = process.env.NODE_ENV !== 'development'

// console.log('production:',production)

module.exports = {
    future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    },
    purge: {
        content: [
            './src/**/*.svelte',
            './src/**/*.html',
        ],
        css: ['./static/**/*.css'],
        enabled: production
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
