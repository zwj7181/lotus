import React from 'react';
import Button from '@/components/Button';

export default function() {
  return (
    <div>
      <h1>button按钮</h1>
      <h2>Contained Buttons（实心按钮）</h2>
      <Button type="primary">button</Button>

      <h2>Text Buttons（文本按钮）</h2>
      <Button>button</Button>

      <h2>Outlined Buttons（描边按钮）</h2>
      <Button>button</Button>
    </div>
  );
}
