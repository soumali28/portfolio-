const TopDesign = () => {
  return (
    <div
      className="top-0 right-0 left-0 absolute w-full pointer-events-none"
      style={{
        height: "200px",
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(20,20,20,0.6) 0%,
            rgba(20,20,20,0.4) 25%,
            rgba(20,20,20,0.2) 50%,
            rgba(20,20,20,0) 70%
          ),
          linear-gradient(to right, #c2c1c0 1px, transparent 1px),
          linear-gradient(to bottom, #c2c1c0 1px, transparent 1px)
        `,
        backgroundSize: `
          100% 100%,
          70px 50px,
          70px 50px
        `,
        backgroundPosition: `
          top,
          30px 25px,
          30px 25px
        `,
        opacity: 0.2,
        filter: "blur(0.6px)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      }}
    />
  );
};

export default TopDesign;
