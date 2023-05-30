import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
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

export default function Home(props) {
  const { data } = props;
  const poems = data.allPoems;
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Shahab Ahmad</title>
      </Head>
      <div>
        <h1>Shahab Ahmad</h1>
      </div>
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
  