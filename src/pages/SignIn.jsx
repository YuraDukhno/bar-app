import React from "react";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();

  return <div>{t("description.Sign In")}</div>;
}
