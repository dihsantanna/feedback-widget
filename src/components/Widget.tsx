import React from 'react'
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import WidgetForm from './WidgetForm';
import './Widget.css';

export default function Widget() {
  return (
    <Popover className="widget-container">
      <Popover.Panel><WidgetForm /></Popover.Panel>
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
