import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody/TableBody";
export default function Table({ characters }) {
  return (
    <div>
      <TableHeader />
      <TableBody characters={characters} />
    </div>
  );
}
