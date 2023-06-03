import { cx } from "class-variance-authority";
import { useOrganisation, useSwitchOrganisation, useUser } from "../auth";

interface OrganisationSelectScreenProps {
  onSelect: VoidFunction;
}

export const OrganisationSelectScreen = (
  props: OrganisationSelectScreenProps
) => {
  const { user } = useUser();
  const { organisation } = useOrganisation();
  const { trigger } = useSwitchOrganisation();

  if (user) {
    return (
      <div className="">
        <div>
          <span className="font-bold text-gray-900/80 text-xl">
            Your organisations
          </span>
        </div>
        <div className="">
          {user.memberships.map((m) => {
            return (
              <div key={m.organisationId} className="py-2">
                <button
                  className={cx(
                    m.organisation.id === organisation?.id ? "" : "opacity-60",
                    "w-full h-[60px] px-4 border-[1px] border-black rounded-xl text-left",
                    "flex justify-between items-center"
                  )}
                  onClick={() =>
                    trigger({ organisationId: m.organisation.publicId }).then(
                      () => {
                        props.onSelect();
                      }
                    )
                  }
                >
                  <span className="h-full py-2">
                    <span className="block font-semibold">
                      {m.organisation.name}
                    </span>
                    <span className="block text-xs">200 members</span>
                  </span>
                  <span>{m.role.toLocaleLowerCase()}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
