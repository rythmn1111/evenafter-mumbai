import MemberCard from "./MemberCard";
import type { Person } from "@/data/speakers";

export default function MemberGrid({
  members,
  nameClassName,
}: {
  members: Person[];
  nameClassName?: string;
}) {
  const total = members.length;
  const remainder = total % 8;
  const fullRowCount = remainder === 0 ? total : total - remainder;

  return (
    <div className="flex justify-center">
      <div
        className="
            px-4 sm:px-8 lg:px-12
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-8
            justify-items-center
            gap-6 sm:gap-8 md:gap-10
            mb-12
            mx-auto
            max-w-[1600px]
          "
      >
        <div className="contents lg:hidden">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              nameClassName={nameClassName}
            />
          ))}
        </div>

        <div className="hidden lg:contents">
          {members.slice(0, fullRowCount).map((member, index) => (
            <MemberCard
              key={index}
              member={member}
              nameClassName={nameClassName}
            />
          ))}
        </div>

        {remainder !== 0 && (
          <div
            className="
                hidden lg:grid
                lg:col-span-8
                grid-flow-col
                auto-cols-max
                justify-center
                gap-6 sm:gap-8 md:gap-10
              "
          >
            {members.slice(fullRowCount).map((member, index) => (
              <MemberCard
                key={index}
                member={member}
                nameClassName={nameClassName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
