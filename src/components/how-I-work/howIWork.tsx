import Section from "../section";
import line from "../../assets/images/howIWork/line.png";
import { howIWorkSteps } from "../../data/how-I-work";
import { motion } from "framer-motion";

const HowIWork = () => {
  return (
    <Section
      title="How I Think and Build"
      highlight="Build"
      showDivider={false}
      className="h-100"
    >
      {/* Visual Timeline */}
      {/* <div className="max-w-sm">
      <span className="text-secondary">
        I approach every project with a product mindset — understanding user
        problems deeply, building scalable and intuitive solutions, and shipping
        early to validate with real feedback. With AI accelerating research and
        iteration, I focus on delivering measurable impact, not just code.
      </span>
      </div> */}

      <div className="relative my-0">
        <motion.img
          src={line}
          alt="How I work timeline"
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {howIWorkSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.id}>
              <div
                className={`absolute bg-white p-2 border border-zinc-200 rounded-full -translate-x-1/2 transform ${step.floatingPosition}`}
              >
                <Icon className="text-secondary" size={20} />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  y: 80,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                  delay: index * 0.2,
                }}
                className={`absolute ${step.textPosition} max-w-[15rem]`}
              >
                <div>
                  <img
                    src={step.image}
                    alt="How I work step icon"
                    className="float-left mr-3 mb-2 w-25 h-40"
                  />

                  <div>
                    <h3 className="mb-2 font-semibold text-zinc-800">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="clear-both" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HowIWork;
