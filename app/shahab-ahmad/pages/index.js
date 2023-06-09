import Head from "next/head";
import Link from "next/link";
import styles from "../styles/PoetryPage.module.css";
import { request } from '../lib/datocms';
import { Image } from 'react-datocms';

const HOMEPAGE_QUERY = `
query MyQuery {
  allPoems {
    title
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
    excerpt
    id
    publishDate
    slug
  }
}`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Poetry(props) {
  const { data } = props;
  const poems = data.allPoems;
  console.log(data);
  return (
    <div className={styles.container}>
    <Head>
      <title>Poetry - My Photography Website</title>
    </Head>
    <div>
      {poems.map((p) => (
        <PoemPreview key={p.id} data={p} />
      ))}
    </div>
  </div>
  );
}

const PoemPreview = (props) => {
  const { data } = props;
  return (
    <div className={styles["poem-preview"]}>
    <div className={styles["image-wrapper"]}>
      <Image data={data.coverImage.responsiveImage} />
      <div className={styles["excerpt-overlay"]}>
        <h2>
          <Link href={`/poetry/${data.slug}`}>
            <p>{data.title}</p>
          </Link>
        </h2>
        <div className={styles["publish-date"]}>{data.publishDate}</div>
        <p className={styles["excerpt"]}>{data.excerpt}</p>
      </div>
    </div>
  </div>
  );
};
  