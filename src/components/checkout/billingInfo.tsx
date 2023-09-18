import React from "react";

interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" title={''} value="" defaultChecked />
        <label className="custom-control-label">Same as shipping information</label>
      </div>
    </>
  );
}