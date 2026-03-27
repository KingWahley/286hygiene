"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonTap } from "../../../lib/animations";

const MotionLink = motion.create(Link);

export default function ServiceCard({
  service,
  className = "",
  imageClassName = "h-[16rem]",
  titleAs = "h2"
}) {
  const TitleTag = titleAs;

  return (
    <MotionLink
      href={service.href}
      scroll={false}
      whileHover={{ y: -4, scale: 1.01, boxShadow: "0 28px 60px rgba(43,115,133,0.16)" }}
      whileTap={buttonTap.scale}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/75 bg-white/88 p-4 shadow-[0_20px_45px_rgba(68,133,149,0.1)] backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b8768] focus-visible:ring-offset-4",
        className
      ].join(" ")}
    >
      <div className={["relative overflow-hidden rounded-[1.5rem]", imageClassName].join(" ")}>
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,35,59,0.06)_0%,_rgba(17,35,59,0.34)_100%)]" />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <TitleTag className="text-[1.75rem] font-extrabold leading-tight text-[#17233b]">
          {service.title}
        </TitleTag>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#6f858d]">
          {service.text}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e2ecec] pt-4">
          <span className="text-sm font-semibold text-[#0b8768]">
            Explore service details
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f7f2] text-[#0b8768] transition group-hover:bg-[#0b8768] group-hover:text-white">
            <ArrowRight
              className="h-4 w-4 transition group-hover:translate-x-0.5"
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
