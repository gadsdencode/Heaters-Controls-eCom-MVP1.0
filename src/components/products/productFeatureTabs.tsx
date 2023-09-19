import '@astrojs/react'
import type { JSX } from "react/jsx-runtime";

interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
  data: Map<string,string>
}

export default function ProductAccordion({
  images,
  data
}: Props) {

  const tabs: JSX.Element[] = [];
  let i = 0;

  Object.entries(data).map(([title, value], i) => {    
    const tabId = "tab" + i;
    
    tabs.push(
      <div
        key={tabId}
        className="tab-pane active show"
        id={tabId}
        role="tabpanel"
        aria-labelledby="profile" // Make sure this references a valid ID
      >
        <div className="row mt-5">
          <div className="col-12 col-lg-6 mb-lg-0 mb-4 pe-10">
            <h5 className="mt-5 mb-4">{title}</h5>
            <p>{value}</p>
          </div>
        
          <div className="col-12 col-lg-6 mb-lg-0 mb-4">
            <img className="w-100 rounded-3" src={images[0].src} alt={images[0].alt} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="accordion mt-5" id="accordionEcommerce">
        {tabs}
      </div>
    </>
  );
}