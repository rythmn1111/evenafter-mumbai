import MemberGrid from "./MemberGrid";
import { volunteers } from "@/data/volunteers";
import { extraVolunteers } from "@/data/team";

function ExtraNames({
  members,
}: {
  members: { name: string; xLink?: string }[];
}) {
  return (
    <p className="text-black text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.5px] uppercase text-center">
      AND{" "}
      {members.map((member, index) => {
        const isLast = index === members.length - 1;
        const isSecondLast = index === members.length - 2;

        return (
          <span key={index}>
            {member.xLink ? (
              <a href={member.xLink} target="_blank" rel="noopener noreferrer">
                {member.name}
              </a>
            ) : (
              member.name
            )}
            {!isLast && <>{isSecondLast ? " AND " : ", "}</>}
          </span>
        );
      })}
    </p>
  );
}

export default function Volunteers() {
  return (
    <section
      id="conference-speakers"
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-black text-4xl pb-3 sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
        Volunteers
      </h2>

      <MemberGrid members={volunteers} nameClassName="text-[#0f0f0f]" />

      {extraVolunteers.length > 0 && (
        <div className="mt-0 flex justify-center px-4">
          <ExtraNames members={extraVolunteers} />
        </div>
      )}
    </section>
  );
}
