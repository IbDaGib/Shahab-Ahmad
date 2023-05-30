import Link from "next/link";
import Image from "../../components/Image/Image";
import { getAllSlugs, getPoemData } from "../../lib/Poems";
import styles from '../../styles/PoetryPost.module.css';

export default function PoetryPage(props) {
    const { poemData } = props;
    return (
        <div className={styles.container}>
            <div style={{ maxWidth: "600px", marginTop: "20px" }}>
                <Image src={poemData.coverImage} alt={poemData.title} layout="fill" />
                <h1>
                    {poemData.title}
                </h1>
                <p>
                    {poemData.author} / {poemData.publishDate}
                </p>
                <p>
                    {poemData.content}
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

export const getStaticPaths = () => {
    const paths = getAllSlugs();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = ({ params }) => {
    const poemData = getPoemData(params.slug);
    return {
        props: {
            poemData,
        },
    };
};