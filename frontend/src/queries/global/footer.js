import { useStaticQuery, graphql } from 'gatsby';
export default () =>
    useStaticQuery(graphql`
        query {
            allStrapiJob(sort: { fields: startDate, order: DESC }) {
                nodes {
                    company
                    companyUrl
                    location
                    startDate(formatString: "MMMM YYYY")
                    title
                    endDate(formatString: "MMMM YYYY")
                    content {
                        data {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
            strapiAbout {
                id
                title
                content {
                    data {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
                image {
                    url
                    localFile {
                        publicURL
                    }
                }
            }
            strapiContactSection {
                headline
                subline
                content
            }
            strapiHero {
                id
                intro
                heading
                body {
                    data {
                        body
                        childMarkdownRemark {
                            html
                            rawMarkdownBody
                        }
                    }
                }
            }
        }
    `);
