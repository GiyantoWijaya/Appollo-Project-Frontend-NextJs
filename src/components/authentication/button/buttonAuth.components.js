'use client';

export default function Button(props) {
  return (
    <>
      <button type={props.typeName} className={props.class} onClick={props.handleCancel}>
        {props.isLoading && <span className="spinner-border spinner-border-sm mr-1"></span>}
        {props.title}
      </button>
    </>
  );
}
