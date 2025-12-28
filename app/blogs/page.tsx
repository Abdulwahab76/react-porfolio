/* page.tsx */
import Link from "next/link";
import { client, BlogPostFields } from "@/lib/contentful";
import Image from "next/image";

const getBlogEntries = async (): Promise<any> => {
    const entries = await client.getEntries({ content_type: "blogs" });
    return entries;
};

export default async function BlogPosts() {

    const blogEntries = await getBlogEntries();
    console.log(blogEntries, 'blog=====');

    return (
        <main className="flex max-w-6xl w-full mx-auto px-4 flex-col  h-screen">
            <h1 className="text-4xl font-medium">Blogs</h1>

            {blogEntries.items.map((singlePost: any) => {
                const { slug, title, date, content, featuredImage, description } = singlePost.fields;


                return (
                    <div key={slug}>


                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                            {singlePost.fields.featuredImage && (
                                <Image
                                    src={`https:${singlePost.fields.featuredImage.fields.file.url}`}
                                    width={200}
                                    height={200}
                                    alt={singlePost.fields.title}
                                    className="w-full  rounded-t-lg"
                                />
                            )}
                            <div className="p-4">
                                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                    {title}
                                </h5>
                                <p className="text-slate-600 leading-normal font-light">
                                    {description}
                                </p>

                                <Link href={`/blogs/${slug}`}> <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                    Read more
                                </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                );
            })}
        </main >
    );
}