import { Tilt } from "../motion-primitives/tilt";
import CardFlip from "../kokonutui/card-flip";

const BusinessCard = () => {
  return (
    <Tilt rotationFactor={8} isRevese>
      <CardFlip
        size="business"
        title="Rasidin Hatta"
        subtitle="Full Stack Developer"
        description="I build practical HR tools, SQL workflows, report automation, and responsive web systems."
        features={["Full-stack Apps", "SQL Server", "HR Reports", "Windows Tools"]}
        actionLabel="Project"
        actionHref="/projects"
      />
    </Tilt>
  );
};

export default BusinessCard;
