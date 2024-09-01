import React from "react";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { MdArrowOutward } from "react-icons/md";

const BlogCard: React.FC = function blogCardComponent() {
  return (
    <div className="w-full h-fit p-2">
      <Image
        alt="Card background"
        className="object-cover rounded-2xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
      />
      <Spacer y={5} />
      <div className="flex flex-row">
        <div className="font-bold text-lg flex-1 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <MdArrowOutward size={30} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem et ut
        fugit dignissimos. Officiis consectetur corrupti nisi ipsum aliquid
        assumenda facilis cum mollitia cupiditate similique? Minus nostrum alias
        in.
      </p>
    </div>
  );
};

export default BlogCard;
