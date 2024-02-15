import React from "react";
import { useData } from '../hooks/dataHooks.jsx';
import { CardPage } from '../components/cardPage.jsx';

export function DataPage({ data }) {
  const items = useData(data);
  return <CardPage items={items} />;
}