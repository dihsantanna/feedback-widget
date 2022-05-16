import React from 'react'
import  { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export default function CloseButton() {
  return (
    <Popover.Button
      className="cl-btn"
      title="Fechar formulário de feedback"
    >
      <X weight="bold" className="x-btn" />
    </Popover.Button>
  )
}
