interface ZStackProps {
  slots: any[];
}

export const ZStack = (props: ZStackProps) => {
  const { slots } = props;

  return (
    <div className="relative">
      {slots.map((slot, index) => {
        return (
          <div
            key={index}
            className="absolute"
            style={{ zIndex: 1000 - index * 50 }}
          >
            <slot.Component />
          </div>
        );
      })}
    </div>
  );
};
