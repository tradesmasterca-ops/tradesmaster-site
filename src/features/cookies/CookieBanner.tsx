// src/features/cookies/CookieBanner.tsx
import React, { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export function CookieBanner(): React.JSX.Element | null {
  useEffect(() => {
    // Prevent double-init in React StrictMode (dev)
    const w = window as unknown as { __tm_cc_inited?: boolean };
    if (w.__tm_cc_inited) return;
    w.__tm_cc_inited = true;

    const base = import.meta.env.BASE_URL;
    const privacyHref = `${base}privacy`;
    const cookiesHref = `${base}cookies`;

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies, but the helpful kind.",
              description:
                "We use essential cookies for basic site functionality and optional analytics cookies to improve the site. You control the knobs.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject optional",
              showPreferencesBtn: "Manage preferences",
              footer: `<a href="${privacyHref}">Privacy</a> • <a href="${cookiesHref}">Cookies</a>`,
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject optional",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Essential cookies",
                  description:
                    "Required for the site to function properly. Always on.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics cookies",
                  description:
                    "Helps us understand what’s working so we can improve the site. Optional.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More info",
                  description: `Read our <a href="${privacyHref}">Privacy Policy</a> and <a href="${cookiesHref}">Cookie Policy</a>.`,
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
