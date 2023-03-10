import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Button, Input } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> { }

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // add your logic here for what you want to do with the value
    // use inputRef.current?.value to get the value
    console.log(inputRef.current?.value);
  };


  return (
    <div>
      <h3>Input a value</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '300px',
        gap: '10px'
      }}>
        <Input type='number' ref={inputRef} />
        <Button onClick={onButtonClick}>Send value</Button>
      </div>
    </div>
  );
};
