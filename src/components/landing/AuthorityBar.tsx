import { useCountUp } from "../../hooks/useCountUp";

interface MetricProps {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
}

function Metric({ end, suffix, label, prefix = "" }: MetricProps) {
  const { count, ref } = useCountUp(end, 2200);

  return (
    <div className="flex flex-col items-center text-center" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </span>
      <span className="mt-1.5 text-sm font-medium text-white/60 sm:text-base">
        {label}
      </span>
    </div>
  );
}

export function AuthorityBar() {
  return (
    <section className="relative bg-navy py-12 sm:py-16 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          <Metric end={500} suffix="+" label="Projetos Entregues" />
          <Metric end={12} suffix="M+" label="Economizados" prefix="R$ " />
          <Metric end={10} suffix="+" label="Anos de Experiência" />
          <Metric end={100} suffix="%" label="Regularizado CREA" />
        </div>
      </div>
    </section>
  );
}
