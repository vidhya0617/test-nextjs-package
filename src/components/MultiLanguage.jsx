import React, { useState } from "react";
import { useRouter } from "next/router";

function MultiLanguage() {
  const router = useRouter();
  const { locale, asPath } = useRouter();

  const activeLanguages = [
    { lang: "English", code: "en-in" },
    { lang: "हिन्दी", code: "hi-in" },
    { lang: "मराठी", code: "mr-in" },
  ];
  const language = locale || "en-in";

  const [selectedLang, setSelectedLang] = useState(
    activeLanguages[activeLanguages.findIndex((x) => x.code === language)]?.code
  );

  const changeLanguage = (lng) => {
    if (selectedLang !== lng.code) {
      setSelectedLang(lng.code);
      router.push(asPath, asPath, { locale: lng.code });
    }
  };

  React.useEffect(() => {
    if (locale) {
      setSelectedLang(locale);
    }
  }, [locale]);

  return (
    <ul>
      {activeLanguages.map((lng) => (
        <li key={lng.code} onClick={() => changeLanguage(lng)}>
          <p
            style={{
              color: lng.code === selectedLang ? "red" : "blue",
            }}
          >
            {lng.lang}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MultiLanguage;
