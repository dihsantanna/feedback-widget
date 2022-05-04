import React from 'react'
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export default function Widget() {
  return (
    <Popover className="widget-container">
      <Popover.Panel>Hello World</Popover.Panel>
      <Popover.Button className="button-chat group">
        <ChatTeardropDots className="icon-chat" />
        <span className="feedback">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
