import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Container from "./ui/container";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-gray-100 flex justify-center">
      <div className="flex flex-col gap-14">
        <div className="text-center">
          <h2 className="uppercase font-semibold text-blue tracking-wide mb-2">
            {t("testimonial-subtitle")}
          </h2>
          <h1 className="uppercase font-bold text-3xl">
            {t("testimonial-title")}
          </h1>
        </div>

        <Container>
          <Carousel className="max-w-full">
            <CarouselContent className=" rounded-lg">
              {testimonials.map(
                ({ review, company, author, role, authorImg }) => (
                  <CarouselItem
                    key={review}
                    className="basis-1/2 pl-4 min-h-full"
                  >
                    <div className="p-10 bg-white h-full flex flex-col rounded-lg items-center gap-8">
                      <div className="flex items-center gap-2">
                        <img src="/banner/zoomerr.png" alt="" />
                        <h2>{company}</h2>
                      </div>
                      <p className="text-center">{review}</p>
                      <div className="flex flex-col items-center gap-1 mt-auto">
                        <img
                          src={authorImg}
                          alt={author}
                          className="size-[50px] object-cover rounded-full"
                        />
                        <h2 className="font-medium mt-2">{author}</h2>
                        <p className="text-gray-600">{role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

const testimonials = [
  {
    company: "Zoomerr",
    review:
      "The AI solutions provided by this company transformed our customer service process entirely. The chatbot integration saved us time and enhanced customer satisfaction.",
    author: "Sarah Johnson",
    role: "Customer Support Manager",
    authorImg: "/blog/author.webp",
  },
  {
    company: "SmartFinder",
    review:
      "Their predictive analytics tools helped us identify key market trends, boosting our sales by 35% in just six months.",
    author: "Rajesh Kumar",
    role: "Sales Director",
    authorImg: "/blog/author2.webp",
  },
  {
    company: "TechPro",
    review:
      "We were able to reduce our operational costs by 20% thanks to the automation tools provided by this company.",
    author: "Emily Turner",
    role: "Operations Manager",
    authorImg: "/blog/author3.jpg",
  },
];

export default Testimonials;
