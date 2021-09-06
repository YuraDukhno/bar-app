import React from "react";
import { useTranslation } from "react-i18next";

export default function Tips() {
  const { t } = useTranslation();

  return <div>{t("description.Tips")}</div>;
}
