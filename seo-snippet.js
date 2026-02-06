// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.pedestalsignaturegifts.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.pedestalsignaturegifts.com/","title_tag":"Unique gift items & custom T-shirts | Pedestal Signature Gifts","meta_description":"Discover unique gift items, custom T-shirts, hoodies, caps and memorabilia with artistic illustrations, cultural and spiritual themes at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/newsletter","title_tag":"Custom T-shirts & unique gift items | Pedestal Signature Gifts","meta_description":"Subscribe for offers on custom T-shirts, bags, posters and more. Explore unique gift items, inspirational gifts and memorabilia collections at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/blog-terms","title_tag":"Blog terms for inspirational gifts | Pedestal Signature Gifts","meta_description":"Read blog terms of use for Practically Positive Unlimited. Guidelines for inspirational gifts content, cultural and spiritual themes at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/policies-intro","title_tag":"Custom T-shirts & policies | Pedestal Signature Gifts","meta_description":"View terms, privacy, exchanges and design guidelines for custom T-shirts, unique gift items and memorabilia collections at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/blog","title_tag":"Inspirational gifts & cultural themes | Pedestal Signature Gifts","meta_description":"Explore Practically Positive Unlimited blog with motivational posts and spiritual themes that inspire meaningful, inspirational gifts at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/books-by-james-lloyd","title_tag":"Inspirational gifts & books | Pedestal Signature Gifts","meta_description":"Shop books by James Lloyd featuring spiritual themes and inspiring stories that pair perfectly with inspirational gifts from Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/gallery","title_tag":"Artistic illustrations & cultural themes | Pedestal Signature Gifts","meta_description":"Browse galleries of artistic illustrations, patriotic, cultural and spiritual themes for custom T-shirts, posters and unique gift items at Pedestal Signature Gifts."},{"page_url":"https://www.pedestalsignaturegifts.com/order-platform","title_tag":"Create your own custom T-shirts | Pedestal Signature Gifts","meta_description":"Use the order platform to create your own custom T-shirts, bags, mugs and posters with artistic illustrations and inspirational gifts at Pedestal Signature Gifts."}],"keywords":["Pedestal Signature Gifts","unique gift items","custom T-shirts","artistic illustrations","inspirational gifts","memorabilia collections","create your own","cultural themes","spiritual themes"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pedestalsignaturegifts.com/#organization",
  "url": "https://www.pedestalsignaturegifts.com/",
  "name": "Pedestal Signature Gifts & Memorabilia",
  "description": "Pedestal Signature Gifts & Memorabilia provides custom T-shirts, sweatshirts, hoodies, caps, bags, posters, mugs and other unique gift items featuring artistic illustrations and thought-provoking messages from 'The Proff', plus inspirational patriotic, cultural and spiritual themes and custom design options.",
  "telephone": "+1-561-657-3931",
  "email": "pedestalgifts@gmail.com",
  "logo": "https://static.wixstatic.com/media/9e6787_51ecab78cb4443d794d5edb3ba2697c0~mv2.png/v1/fill/w_600,h_466,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PROFF%20Head%20Shot%20Only%2C%20New%20D-Signs%20Illustration%2C%203rd%20Resized%20Image%2C%20050824.png",
  "image": [
    "https://static.wixstatic.com/media/9e6787_51ecab78cb4443d794d5edb3ba2697c0~mv2.png/v1/fill/w_600,h_466,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PROFF%20Head%20Shot%20Only%2C%20New%20D-Signs%20Illustration%2C%203rd%20Resized%20Image%2C%20050824.png",
    "https://static.wixstatic.com/media/9e6787_f1bae2865ecc45149820b3b625926735~mv2.png/v1/fill/w_614,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WIX%20Media%20Sunset%20Image%2C%20Revised%20Jagged%20Border%20for%20Home%20Page%2C%20Transparent%20BKG%20-%20Copy.png"
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.twitter.com",
    "https://www.linkedin.com"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-561-657-3931",
      "contactType": "customer service",
      "email": "pedestalgifts@gmail.com",
      "availableLanguage": [
        "en"
      ]
    }
  ],
  "department": [
    {
      "@type": "Store",
      "name": "Custom Apparel & Accessories",
      "description": "Customized T-shirts, sweatshirts, hoodies, caps, tote bags, posters, and mugs featuring gallery designs or customer-submitted artwork and messages.",
      "url": "https://www.pedestalsignaturegifts.com/order-platform"
    },
    {
      "@type": "BookStore",
      "name": "Books by James Lloyd",
      "description": "Christian fiction and inspirational books by James Lloyd, including Keys, Portraits of Trials & Truth, The Orphan, Keys-Extending the Hands of Grace, and Eclipsed by Fate, available in paperback and EPUB formats.",
      "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pedestal Signature Gifts Product Catalog",
    "url": "https://www.pedestalsignaturegifts.com/order-platform",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Apparel",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom T-Shirt",
              "category": "Apparel",
              "description": "100% cotton custom T-shirts with featured gallery images, Proff's Pearls messages, or customer-submitted designs.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Sweatshirt",
              "category": "Apparel",
              "description": "Cotton/polyester blend sweatshirts with inspirational and thematic designs from the galleries.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Hoodie",
              "category": "Apparel",
              "description": "Custom hoodies featuring artistic illustrations and Proff's Pearls messages.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Caps",
              "category": "Apparel",
              "description": "Printed and embroidered baseball caps and trucker caps with Pedestal logo and themed captions.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Accessories & Gifts",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Tote Bags",
              "category": "Bags",
              "description": "Custom statement tote bags with featured images and Proff's Pearls.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Mugs",
              "category": "Drinkware",
              "description": "Ceramic mugs with inspirational designs, available in multiple sizes.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom Posters",
              "category": "Home Decor",
              "description": "Matte or satin posters with patriotic, cultural, and spiritual themes from the Inspirations Gallery.",
              "url": "https://www.pedestalsignaturegifts.com/order-platform"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Books by James Lloyd",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Book",
              "name": "Keys, Portraits of Trials & Truth",
              "bookFormat": [
                "https://schema.org/Paperback",
                "https://schema.org/EBook"
              ],
              "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Book",
              "name": "The Orphan",
              "bookFormat": [
                "https://schema.org/Paperback",
                "https://schema.org/EBook"
              ],
              "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Book",
              "name": "Keys-Extending the Hands of Grace",
              "bookFormat": [
                "https://schema.org/Paperback",
                "https://schema.org/EBook"
              ],
              "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Book",
              "name": "Eclipsed by Fate",
              "bookFormat": [
                "https://schema.org/Paperback",
                "https://schema.org/EBook"
              ],
              "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd"
            }
          }
        ]
      }
    ]
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": "https://www.pedestalsignaturegifts.com/#newsletter",
      "url": "https://www.pedestalsignaturegifts.com/newsletter",
      "name": "Newsletter",
      "description": "Pedestal Signature Gifts newsletter featuring Proff's Picks, special discounts on custom T-shirts, sweatshirts, caps, hoodies, posters, bags and more, plus book news and announcements.",
      "isPartOf": {
        "@id": "https://www.pedestalsignaturegifts.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pedestalsignaturegifts.com/#ppu-blog",
      "url": "https://www.pedestalsignaturegifts.com/blog",
      "name": "Practically Positive Unlimited Blog",
      "description": "Motivational, instructional and socio-political blog posts by James Lloyd promoting positive thinking, resiliency, and faith-based perspectives.",
      "isPartOf": {
        "@id": "https://www.pedestalsignaturegifts.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pedestalsignaturegifts.com/#books",
      "url": "https://www.pedestalsignaturegifts.com/books-by-james-lloyd",
      "name": "Books by James Lloyd",
      "description": "Order platform for Christian fiction titles and inspirational works by James Lloyd, including paperback and EPUB formats.",
      "isPartOf": {
        "@id": "https://www.pedestalsignaturegifts.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pedestalsignaturegifts.com/#order-platform",
      "url": "https://www.pedestalsignaturegifts.com/order-platform",
      "name": "Order Platform",
      "description": "Custom order platform for Pedestal Signature Gifts & Memorabilia products, including apparel, caps, mugs, bags, and posters.",
      "isPartOf": {
        "@id": "https://www.pedestalsignaturegifts.com/#organization"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.pedestalsignaturegifts.com/#galleries",
      "url": "https://www.pedestalsignaturegifts.com/gallery",
      "name": "Galleries",
      "description": "Featured Images, Proff's Pearls and Inspirations galleries showcasing the designs available for custom products.",
      "isPartOf": {
        "@id": "https://www.pedestalsignaturegifts.com/#organization"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
