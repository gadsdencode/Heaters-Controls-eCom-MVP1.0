import React, { type JSXElementConstructor } from 'react';

interface Props {
  data: Map<string, string>,
  uniqueId: string
}

export default function ProductAccordion({
  data,
  uniqueId
}: Props) {

  const accordion: JSX.Element[] = Object.entries(data).map(([title, value], i) => {
    const id = uniqueId + "heading" + i;
    const target = "#" + uniqueId + "collapse" + i;
  
    if (i !== 0) {
      return (
        <div className="accordion-item" key={i}>
          <h5 className="accordion-header" id={id}>
            <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={target.slice(1)}>
              {title}
              <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
              <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
            </button>
          </h5>
          <div id={target.slice(1)} className="accordion-collapse collapse" aria-labelledby={id} data-bs-parent="#accordionEcommerce">
            <div className="accordion-body text-body text-sm opacity-8">
              {value}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="accordion-item" key={i}>
          <h5 className="accordion-header" id={id}>
            <button className="accordion-button border-bottom font-weight-bold collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="true" aria-controls={target.slice(1)}>
              {title}
              <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
              <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
            </button>
          </h5>
          <div id={target.slice(1)} className="accordion-collapse collapse show" aria-labelledby={id} data-bs-parent="#accordionEcommerce">
            <div className="accordion-body text-body text-sm opacity-8">
              {value}
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className="accordion mt-5" id="accordionEcommerce">
        {accordion}
      </div>
    </>
  );
}
