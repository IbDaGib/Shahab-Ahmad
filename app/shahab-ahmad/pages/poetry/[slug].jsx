import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import styles from '../../styles/Poetry.module.css';
import { request } from "../../lib/datocms";

export default function PoetryPage(props) {
    const { poemData } = props;
    //const poemData = data.poem;

    return (
        <div className={styles.container}>
            <div style={{ maxWidth: "600px", marginTop: "20px" }}>
                <Image data={poemData.coverImage.responsiveImage} />
                <h1>
                    {poemData.title}
                </h1>
                <p>
                    {poemData.publishDate}
                </p>
                <p>
                    <StructuredText data={poemData.content.value} />
                </p>
                <div style={{ marginTop: "50px" }}>
                    <Link href="/">
                        <p>⬅️&nbsp;&nbsp;Back to frontpage</p>
                    </Link>
                </div>
            </div>  
        </div>
    );
}

const PATHS_QUERY = `
query MyQuery {
    allPoems {
      slug
    }
  }
`;

export const getStaticPaths = async () => {
    const slugQuery = await request({
        query: PATHS_QUERY,
    });

    let paths = [];
    slugQuery.allPoems.map((p) => paths.push(`/poetry/${p.slug}`));

    return {
        paths,
        fallback: false,
    };
};

const POEM_QUERY = `
query MyQuery($slug: String) {
    poem(filter: {slug: {eq: $slug}}) {
      content {
        value
      }
      coverImage {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
      id
      publishDate
      slug
      title
    }
}
`;

export const getStaticProps = async ({ params }) => {
    const post = await request({
        query: POEM_QUERY,
        variables: { slug: params.slug },
    });

    return {
        props: {
            poemData: post.poem,
        },
    };
};