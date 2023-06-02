import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Poetry.module.css";
import { request } from '../lib/datocms';
import { Image } from 'react-datocms';

const POETRYPAGE_QUERY = `
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
    query: POETRYPAGE_QUERY,
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
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <Image data={data.coverImage.responsiveImage} />
      <h2>
        <Link href={`/poetry/${data.slug}`}>
          <p>{data.title}</p>
        </Link>
      </h2>
      <div>
        {data.publishDate}
      </div>
      <p>
        {data.excerpt}
      </p>
    </div>
  );
};
  