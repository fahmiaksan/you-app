import { ContentCardProps } from "@/app/type";
import React from "react";
export default function ContentCard({ label, value }: ContentCardProps) {
  return (
    <p className="text-slate-500">{label}: <span className="text-white">{value}</span></p>
  )
};
