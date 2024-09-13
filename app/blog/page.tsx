import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";

import { subtitle, title } from "@/components/primitives";
import BlogCard from "@/components/blog-card";

export default function BlogPage() {
  return (
    <>
      <div className="w-full h-[40rem] flex flex-col p-4">
        <Card isFooterBlurred className="border-none w-full h-full" radius="lg">
          <Image
            alt="Woman listing to music"
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute rounded-xl bottom-1 w-[calc(100%_-_32px)] h-[calc(40%_-_16px)] shadow-small ml-3 mb-3 z-10">
            <div className="w-full h-full flex flex-col p-6">
              <h2 className={`${subtitle()} text-white`}>Featured</h2>
              <h1 className={`${title({ size: "sm" })} text-white`}>Lorem</h1>
              <Spacer y={5} />
              <p className="text-white">descritption</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Spacer y={10} />
      <div className="w-full flex flex-row p-4">
        <h2 className={subtitle()}>Recent blog posts</h2>
        <div className="flex-1">
          <Link
            className={buttonStyles({
              color: "primary",
              variant: "flat",
            })}
            href="/blog/all"
            target="_self"
          >
            View all posts
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:grid grid-cols-3 grid-rows-3 gap-8 w-full p-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}
