import React from "react";
import { useTranslation } from "react-i18next";

export default function Staff() {
  const { t } = useTranslation();

  return <div>{t("description.Staff")}</div>;
}
