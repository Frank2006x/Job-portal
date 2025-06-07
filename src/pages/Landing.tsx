import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import faq from "../data/faq.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="gradient-title text-4xl py-4 tracking-tight font-extrabold flex flex-col justify-center items-center sm:text-7xl lg:text-8xl">
          Find Your Dream Job<span> And get hired </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl ">
          Find your dream job or the ideal candidate — all in one place
        </p>
      </section>
      <div className="flex gap-7 justify-center">
        <Link to="/job-listing">
          <Button variant={"blue"} size={"xl"}>
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-jobs">
          <Button variant={"red"} size={"xl"}>
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        className="w-full  py-10 "
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map((element) => (
            <CarouselItem key={element.id} className="basis-1/3 sm:basis-1/6">
              <img
                src={element.path}
                alt={element.name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img src="banner.jpeg" alt="banner" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-blackBlue">
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs,track applications, and more
          </CardContent>
        </Card>
        <Card className="bg-blackBlue">
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs ,manage applications, adn find the best candidates.
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible>
        {faq.map((element, index) => (
          <AccordionItem key={index} value={`items${index + 1}`}>
            <AccordionTrigger>{element.question}</AccordionTrigger>
            <AccordionContent>{element.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default Landing;
