import type { StructureMapCopy } from "@/content/structure-map";

type StructureMapProps = {
  copy: StructureMapCopy;
};

export function StructureMap({ copy }: StructureMapProps) {
  return (
    <article className="structure-map-panel">
      <div className="structure-map-head">
        <span className="eyebrow">{copy.title}</span>
        <h3>{copy.title}</h3>
        <p>{copy.intro}</p>
      </div>

      <div aria-label={copy.alt} className="structure-map-rail" role="img">
        {copy.layers.map((layer) => (
          <section className="structure-map-tier" key={layer.title}>
            <span className="structure-map-tier-title">{layer.title}</span>
            <div className="structure-map-tier-items">
              {layer.items.map((item) => (
                <span className="structure-map-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="structure-map-note">{copy.note}</p>
    </article>
  );
}
