import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ContentFromCMS from "../../components/content-from-cms";
import Container from "../../components/ui/container";

function BlogDescription() {
  const paths = [
    { label: "Home >", href: "/" },
    { label: "Blogs >", href: "/blogs" },
    { label: "Title 1", href: "" },
  ];

  const params = useParams();

  return (
    <Container>
      <Breadcrumb items={paths} />

      <main className="pt-10">
        <section className="pb-6 md:pb-12">
          <div className="flex flex-col items-center gap-6">
            <span className="rounded-full px-3 py-1.5 bg-gray-200 text-black text-sm">
              {"Productivity"}
            </span>

            <h2 className="text-2xl text-center">
              Good design is pleasing to the eye,{" "}
              <span className="sm:block">great design is invisible.</span>
            </h2>

            <p className="flex items-center gap-2.5 text-sm">
              5 mins read
              <span className="rounded-full size-1 bg-gray-200"></span>{" "}
              Published on 4 Jan 2023
            </p>

            <img
              src="/ui.png"
              alt="blog title"
              className="w-[80%] aspect-video object-cover mt-8 rounded-xl"
            />
          </div>
        </section>

        <div className="pb-16 w-[90%] lg:max-w-4xl 2xl:max-w-5xl 2xl:w-[60rem] mx-auto">
          <div className=" border-b border-white/10">
            <ContentFromCMS />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default BlogDescription;
