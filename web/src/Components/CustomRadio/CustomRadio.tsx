import React, { useRef } from 'react';
import './CustomRadio.scss';

interface CRProps {
  text: string;
  onChange: any;
  selected: any;
  value: string | number;
  id: string;
}

function CustomRadio({ text, onChange, selected, value, id }: CRProps) {
  const innerCircle = useRef<HTMLDivElement | any>();
  const ex = () => {
    onChange(value);
    innerCircle.current.style.animationName = 'randomFakeAnimation'
    setTimeout(() => {
      innerCircle.current.style.animation = 'none';
      innerCircle.current.style.animation = '';
    }, 10);
  };

  return (
    <div
      className="modern-radio-container"
      onClick={ex}
      id={id}
    >
      <div className={`radio-outer-circle ${value !== selected && "unselected"}`}>
        <div className={`radio-inner-circle ${value !== selected && "unselected-circle"}`} ref={innerCircle} />
      </div>
      <div className={`helper-text ${value !== selected && "unselected"}`}>
        {text}
      </div>
    </div>
  );
}

export default CustomRadio