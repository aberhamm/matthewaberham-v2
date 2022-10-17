const config = require('./src/config');
require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: 'Matthew Aberham - Solutions Architect and Web Developer',
        description:
            'Helping people and brands reach their goals by designing & building user-centric digital products and interactive experiences',
        siteUrl: 'https://matthewaberham.com', // No trailing slash allowed!
        image: '/og.png', // Path to your image you placed in the 'static' folder
        twitterUsername: '@aberhamm',
    },
    plugins: [
        `gatsby-plugin-preload-fonts`,
        // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline
        `gatsby-plugin-offline`,
        {
            // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
            resolve: `gatsby-plugin-manifest`,
            // https://web.dev/add-manifest/
            options: {
                name: 'Matthew Aberham',
                start_url: '/',
                background_color: config.colors.white,
                theme_color: config.colors.white,
                display: 'minimal-ui',
                icon: 'src/images/logo.png',
            },
        },
        {
            // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`,
            },
        },
        {
            // Parses MDX files
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                        },
                    },
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-images
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 700,
                            linkImagesToOriginal: true,
                            quality: 90,
                            tracedSVG: { color: config.colors.blue },
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-45547052-2',
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
                accessToken: process.env.STRAPI_TOKEN,
                skipFileDownloads: true,
                collectionTypes: [
                    {
                        singularName: 'job',
                    },
                ],
                singleTypes: [
                    {
                        singularName: 'about',
                        queryParams: {
                            populate: {
                                title: '*',
                                content: '*',
                                image: '*',
                            },
                        },
                    },
                    {
                        singularName: 'contact-section',
                        queryParams: {
                            populate: {
                                headline: '*',
                                subline: '*',
                                content: '*',
                            },
                        },
                    },
                    {
                        singularName: 'global',
                        queryParams: {
                            populate: {
                                favicon: '*',
                                defaultSeo: {
                                    populate: '*',
                                },
                            },
                        },
                    },
                    {
                        singularName: 'hero',
                        queryParams: {
                            populate: {
                                intro: '*',
                                heading: '*',
                                body: '*',
                            },
                        },
                    },
                ],
            },
        },
    ],
};
