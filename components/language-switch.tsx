import React, { useState } from 'react'
import {Dropdown, 
        DropdownTrigger,
        DropdownMenu,
        DropdownItem, 
        } from "@nextui-org/dropdown";
import { IoLanguage } from "react-icons/io5";
import { Button } from '@nextui-org/button';
import {Selection} from "@react-types/shared";
import { siteConfig } from '@/config/site';

export const LanguageSwitch:React.FC = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set([siteConfig.supportedLanguages[0].langCode]));

  return (
    <Dropdown>
    <DropdownTrigger>
      <Button 
        variant="light" 
        className="capitalize"
        isIconOnly
        radius='full'

      >
        <IoLanguage size={22} className=" opacity-60"/>
      </Button>
    </DropdownTrigger>
    <DropdownMenu 
      aria-label="Single selection example"
      variant="flat"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {
        siteConfig.supportedLanguages.map((item)=>{
          const {langName, langCode} = item
          return(
            <DropdownItem key={langCode}>{langName}</DropdownItem>
          )
        })
      }
    </DropdownMenu>
  </Dropdown>
  )
}