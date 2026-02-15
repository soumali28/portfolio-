import Section from "../section";
import line from "../../assets/images/howIWork/line.png";
import { howIWorkSteps } from "../../data/how-I-work";

const HowIWork = () => {
  return (
    <Section
      title="How I Think and Build"
      highlight="Build"
      showDivider={false}
    >
      {/* Visual Timeline */}
      <div className="relative my-12">
        <img src={line} alt="How I work timeline" />

        {howIWorkSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className={`absolute bg-white p-2 border border-zinc-200 rounded-full -translate-x-1/2 transform ${step.floatingPosition}`}
            >
              <Icon className="text-secondary" size={20} />
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        {howIWorkSteps.map((step) => (
          <div key={step.id} className="space-y-2">
            <img src={step.image} alt="How I work step icon"  className="float-start mr-3"/>
            <div>
              <h3 className="font-semibold text-zinc-800">{step.title}</h3>

              <p className="text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowIWork;
