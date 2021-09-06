import React from "react";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();

  return <div>{t("description.Sign Up")}</div>;
}
