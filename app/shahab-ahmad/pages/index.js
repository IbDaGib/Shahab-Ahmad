import Head from "next/head";
import Link from "next/link";
import Image from "../components/Image/Image";
import { getAllPoems } from "../lib/Poems";
import styles from "../styles/Home.module.css";

export default function Home() {
  const poems = getAllPoems();
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
      <Image src={data.coverImage} alt={data.title} layout="fill" />
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
      <div style={{ fontWeight: "bold" }}>{data.author}</div>
    </div>
  );
};
  