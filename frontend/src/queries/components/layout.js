import { useStaticQuery, graphql } from 'gatsby';
export default () =>
    useStaticQuery(graphql`
        query {
            strapiFooter {
                attribution
                link
            }
        }
    `);
