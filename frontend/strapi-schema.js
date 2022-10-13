module.exports = {
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
};
