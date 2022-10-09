import React from "react";

export type sidebarItem = {
  title: string;
  icon?: string;
  link?: string;
};

export type sidebarData = sidebarItem & {
  children?: sidebarItem[];
};
