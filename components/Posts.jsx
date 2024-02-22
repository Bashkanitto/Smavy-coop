import { client } from '@/sanity/lib/client';

export async function getStaticProps() {
    const query = '*[_type == "post"]';
    const posts = await client.fetch(query);

    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}

export function Posts({ posts }) {
    return (
        <div>
            <h1>Посты</h1>
            <ul>
                {posts && posts.map(post => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

