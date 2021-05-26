const SectionTitle: React.FC = ({ children }) => {
  return (
    <h1 className="relative z-0 font-primary font-semibold text-5xl inline-block">
      {children}
      <div className="absolute -z-1 inset-x-0 -mt-2 rounded-xl h-2 bg-yellow-300" />
    </h1>
  );
};

export default SectionTitle;
