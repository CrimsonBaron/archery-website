import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { IoLanguage } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Selection } from "@react-types/shared";

import { siteConfig } from "@/config/site";

const LanguageSwitch: React.FC = function LanguageSwichtComponent() {
  const [selected, setSelected] = React.useState<Selection>(
    new Set([siteConfig.supportedLanguages[0].langCode]),
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly className="capitalize" radius="full" variant="light">
          <IoLanguage className=" opacity-60" size={22} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selected}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setSelected}
      >
        {siteConfig.supportedLanguages.map((item) => {
          const { langName, langCode } = item;

          return <DropdownItem key={langCode}>{langName}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitch;
