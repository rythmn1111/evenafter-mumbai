import Image from "next/image";

import type { Person } from "@/data/speakers";

function MemberAvatar({ member }: { member: Person }) {
  return (
    <div
      className={`
        w-[150px] h-[150px]
        sm:w-40 sm:h-40
        lg:w-[150px] lg:h-[150px]
        rounded-4xl
        border-[5px] border-[#EBEBEB]
        ${member.bgColor ?? "bg-[#E2231A]"}
        overflow-visible
        relative
      `}
    >
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={185}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-cover rounded-3xl ${member.imageScale || "h-[118%]"}`}
        style={{ objectPosition: "center 30%", borderBottomLeftRadius: "28px" }}
      />
    </div>
  );
}

export default function MemberCard({
  member,
  nameClassName = "text-[#0A0A0A]",
}: {
  member: Person;
  nameClassName?: string;
}) {
  return (
    <div className="flex flex-col items-center w-[150px] sm:w-40 lg:w-[150px]">
      <div className="relative w-[150px] sm:w-40 lg:w-[150px] mb-3 pt-1 group">
        {member.xLink ? (
          <a
            href={member.xLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group"
          >
            <MemberAvatar member={member} />
          </a>
        ) : (
          <div className="cursor-default group">
            <MemberAvatar member={member} />
          </div>
        )}
      </div>
      <h3
        className={`text-[16px] leading-6 tracking-[-0.31px] ${nameClassName} text-center mb-1`}
      >
        {member.name}
      </h3>
    </div>
  );
}
