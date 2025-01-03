import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import Container from "../../components/ui/container";
import { blogData } from "../../utils/constants";

function BlogDescription() {
  const { slug } = useParams();

  const blogDetails = blogData.find((blog) => blog.slug === slug);
  const { title, content, category, author, role, img } = blogDetails;

  const paths = [
    { label: "Home >", href: "/" },
    { label: "Blogs >", href: "/blogs" },
    { label: title, href: "" },
  ];

  return (
    <Container>
      <Breadcrumb items={paths} />

      <main className="pt-14">
        <section className="pb-6 md:pb-12">
          <div className="flex flex-col items-center gap-6">
            <span className="rounded-full px-3 py-1.5 bg-gray-200 text-black text-sm">
              {category}
            </span>

            <h2 className="text-2xl text-center">{title}</h2>

            <p className="flex items-center gap-2.5 text-sm">
              5 mins read
              <span className="rounded-full size-1 bg-gray-200"></span>{" "}
              Published on 4 Jan 2023
            </p>

            <img
              src={img}
              alt="blog title"
              className="w-[80%] aspect-video object-cover mt-6 rounded-xl"
            />
          </div>
        </section>

        <div className="pb-16 w-[90%] lg:max-w-4xl 2xl:max-w-5xl 2xl:w-[60rem] mx-auto">
          <div className=" border-b border-white/10 text-lg" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
      </main>
    </Container>
  );
}

export default BlogDescription;
