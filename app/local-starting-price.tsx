"use client";

import { useEffect, useState } from "react";

export default function LocalStartingPrice({ contact = false }: { contact?: boolean }) {
  const [price, setPrice] = useState("₹12,999");
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locales = [navigator.language, ...(navigator.languages || [])].join(",").toLowerCase();
    const isIndia = timeZone === "Asia/Kolkata" || timeZone === "Asia/Calcutta" || locales.includes("-in");

    if (!isIndia) {
      setPrice("$199");
      setCurrency("USD");
    }
  }, []);

  if (contact) return <span>WEBSITES FROM · {price} {currency}</span>;
  return <><strong>{price}</strong><small>{currency}</small></>;
}
