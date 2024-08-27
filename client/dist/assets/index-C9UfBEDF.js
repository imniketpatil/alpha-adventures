import {
  r as de,
  d as me,
  p as xe,
  a as y,
  b as x,
  u as w,
  j as e,
  L as H,
  N as L,
  i as he,
  C as ue,
  c as ge,
  e as pe,
  f as fe,
  g as be,
  h as je,
  k as ye,
  l as ve,
  m as we,
  n as E,
  o as Ne,
  S as q,
  q as _,
  P as f,
  F as ke,
  s as Te,
  B as Se,
  t as Ae,
  R as Ce,
  T as De,
  v as Le,
  w as Ie,
  x as Ee,
  y as Pe,
  z as Be,
  A as Fe,
  D as U,
  E as O,
  G,
  H as $e,
  I as We,
  J as Oe,
  K as I,
  Q as qe,
  M as Me,
  O as Ue,
  U as He,
} from "./vendor-Ckq2NfaE.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) c(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && c(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function c(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = l(r);
    fetch(r.href, o);
  }
})();
const Re = (t) => ({
    courses: "",
    trekDateId: "",
    trekTypeId: "",
    addDateId: (s) => {
      t((l) => ({ trekDateId: s }));
    },
    addTrekTypeId: (s) => {
      t((l) => ({ trekTypeId: s }));
    },
    addCourse: (s) => {
      t((l) => ({ courses: s }));
    },
  }),
  b = de(me(xe(Re, { name: "courses" }))),
  v = "https://backend-alpha-adventures.onrender.com/api/v1",
  _e = async () =>
    (await y.get(`${v}/trek/get-treks-name`, { withCredentials: !0 })).data
      .data,
  Ge = "/images/Adpilot-8_24_2024.jpeg",
  P = ({ type: t }) => {
    const [s, l] = x.useState(!1),
      [c, r] = x.useState(!1),
      [o, a] = x.useState(!0),
      [i, m] = x.useState(0),
      [n, d] = x.useState(!1),
      g = () => {
        l(!s);
      },
      u = () => {
        r(!c);
      };
    x.useEffect(() => {
      const h = () => {
        const p = window.scrollY;
        d(p > 50), a(i > p || p < 300), m(p);
      };
      return (
        window.addEventListener("scroll", h),
        () => {
          window.removeEventListener("scroll", h);
        }
      );
    }, [i]);
    const N = b((h) => h.addCourse),
      k = b((h) => h.addDateId),
      {
        data: T = [],
        error: F,
        isLoading: $,
        refetch: W,
      } = w({ queryKey: ["TrekName"], queryFn: _e }),
      D = (h, p) => {
        N(h), k(p);
      };
    return e.jsx("nav", {
      className: `flex font-body rounded-b w-full items-center overflow-hidden z-50 sm:px-4 py-6 px-2 transition-all duration-300 ease-in-out ${
        n || t === "list"
          ? `bg-slate-800 text-slate-200 fixed top-0 ${
              o && t === "list"
                ? "transition-all duration-300 ease-in-out block"
                : "transition-all duration-300 ease-in-out hidden"
            }`
          : `bg-transparent fixed ${
              o
                ? "transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out hidden"
            }`
      }`,
      children: e.jsxs("div", {
        className:
          "container flex flex-wrap justify-between items-center mx-auto",
        children: [
          e.jsx(H, {
            to: "/",
            className: "flex items-center",
            children: e.jsx("img", {
              src: Ge,
              alt: "Alpha Adventures Logo",
              className:
                "h-10 w-10 lg:h-20 lg:w-20 hover:mix-blend-luminosity bg-white rounded-full",
            }),
          }),
          e.jsx("div", {
            className: "flex items-center",
            children: e.jsxs("button", {
              id: "menu-toggle",
              type: "button",
              onClick: g,
              className:
                "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
              children: [
                e.jsx("span", {
                  className: "sr-only",
                  children: "Open main menu",
                }),
                e.jsx("svg", {
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16m-7 6h7",
                  }),
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: `w-full lg:block lg:w-auto ${s ? "relative" : "hidden"}`,
            id: "mobile-menu",
            children: e.jsxs("ul", {
              className:
                "flex flex-col mt-4  bg-gray-800 lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 gap-2 lg:gap-0 text-lg lg:text-lg lg:font-medium lg:items-center",
              children: [
                e.jsxs("li", {
                  children: [
                    e.jsxs("button", {
                      id: "dropdownNavbarLink",
                      onClick: u,
                      className:
                        "flex items-center w-full justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-400   dark:text-white",
                      children: [
                        "Treks",
                        " ",
                        e.jsx("svg", {
                          className: "w-2.5 h-2.5 ms-2.5",
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 10 6",
                          children: e.jsx("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "m1 1 4 4 4-4",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      id: "dropdownNavbar",
                      className: `z-10 font-normal md:w-[60%] lg:w-44 w-[90%]  divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 ${
                        c ? "fixed" : "hidden"
                      }`,
                      children: e.jsx("ul", {
                        className:
                          "absolute py-2 pr-4 pl-3 w-full rounded text-sm bg-gray-900 lg:-left-16 text-gray-700 dark:text-gray-400",
                        "aria-labelledby": "dropdownLargeButton",
                        children: T.map((h) =>
                          e.jsx(
                            "li",
                            {
                              className: "py-2 pr-4 pl-3 lg:p-0 ",
                              children: e.jsx(L, {
                                to: "/trekdetails",
                                children: e.jsx("div", {
                                  className:
                                    "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                  onClick: () => D(h._id, h.dates[0]),
                                  children: h.trekName,
                                }),
                              }),
                            },
                            h._id
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                e.jsx("li", {
                  children: e.jsx(L, {
                    to: "/",
                    className: ({ isActive: h }) =>
                      `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                        h ? "lg:bg-transparent text-white" : "text-slate-200"
                      } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none  hover:text-blue-400  `,
                    "aria-current": "page",
                    children: "HOME",
                  }),
                }),
                e.jsx("li", {
                  children: e.jsx(L, {
                    to: "/about",
                    className: ({ isActive: h }) =>
                      `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                        h ? "lg:bg-transparent text-white" : "text-slate-200"
                      } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`,
                    "aria-current": "page",
                    children: "ABOUT US",
                  }),
                }),
                e.jsx("li", {
                  children: e.jsx(L, {
                    to: "/shop",
                    className: ({ isActive: h }) =>
                      `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                        h ? "lg:bg-transparent text-white" : "text-slate-200"
                      } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`,
                    "aria-current": "page",
                    children: "Shop",
                  }),
                }),
                e.jsx("li", {
                  children: e.jsx(L, {
                    to: "/faqs",
                    className: ({ isActive: h }) =>
                      `block py-2 pr-4 pl-3 lg:p-0 rounded ${
                        h ? "lg:bg-transparent text-white" : "text-slate-200"
                      } transition duration-400 ease-in-out relative border-none bg-transparent cursor-pointer focus:outline-none hover:text-blue-400`,
                    "aria-current": "page",
                    children: "FAQ's",
                  }),
                }),
                e.jsx("li", {
                  className:
                    "border-b-[.5px] border-gray-200 lg:border-0 text-md ",
                  children: e.jsxs("a", {
                    href: "https://wa.me/+919403449240",
                    target: "_black",
                    className:
                      "outline-none relative inline-flex items-center justify-center leading-normal no-underline py-2 pr-4 pl-3 text-slate-100 font-sans font-bold uppercase hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-md",
                    children: [
                      "Get In Touch",
                      e.jsxs("svg", {
                        className:
                          "icon icon-tabler icon-tabler-arrow-up-right",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          e.jsx("path", { d: "M17 7l-10 10" }),
                          e.jsx("path", { d: "M8 7l9 0l0 9" }),
                        ],
                      }),
                      e.jsx("span", {
                        className:
                          "outline-none absolute bottom-0 left-0 w-full h-0.5 bg-neutral-200 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ze = "/images/pexels-photo-746386.jpeg";
function Qe() {
  return (
    x.useEffect(() => {
      const t = new he(".element", {
        strings: ["Alpha Adventures."],
        typeSpeed: 500,
      });
      return () => {
        t.destroy();
      };
    }, []),
    b((t) => t.addCourse),
    b((t) => t.addDateId),
    x.useState(null),
    x.useState(null),
    e.jsxs("div", {
      className:
        "h-[60vh] lg:h-[70vh] w-full bg-center bg-cover bg-no-repeat bg-transparent bg-slate-400 flex flex-col gap-6 items-center justify-center font-body z-0",
      style: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url(${ze})`,
      },
      children: [
        e.jsxs("h1", {
          className:
            "text-4xl lg:text-5xl text-white font-semibold text-center",
          children: [
            "We are",
            " ",
            e.jsx("span", {
              className:
                "element text-4xl lg:text-5xl text-yellow-500 text-center",
              children: "Alpha Adventures",
            }),
          ],
        }),
        e.jsx("h1", {
          className: "text-white text-2xl font-normal text-center",
          children: "Your Adventure Travel Partner.",
        }),
      ],
    })
  );
}
const Ke = "/images/AALogo-removebg.png",
  B = () =>
    e.jsx("div", {
      className: "flex items-end w-full min-h-content bg-white font-body",
      children: e.jsxs("footer", {
        className: "w-full text-gray-700 bg-gray-100 body-font",
        children: [
          e.jsxs("div", {
            className:
              "container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-center lg:justify-center md:flex-row md:flex-no-wrap",
            children: [
              e.jsxs("div", {
                className:
                  "flex-shrink-0 w-64 mx-auto text-center lg:mx-0 md:text-center mb-10 lg:mb-0",
                children: [
                  e.jsx(H, {
                    to: "/",
                    className:
                      "flex items-center justify-center font-medium text-gray-900 title-font md:justify-center",
                    children: e.jsx("img", {
                      src: Ke,
                      alt: "AA Logo",
                      className: "h-20",
                    }),
                  }),
                  e.jsx("p", {
                    className: "mt-2 text-md text-gray-500",
                    children: "Raw, Wild, Untamed",
                  }),
                  e.jsx("div", {
                    className: "mt-4",
                    children: e.jsxs("span", {
                      className:
                        "inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start",
                      children: [
                        e.jsx("a", {
                          className:
                            "text-gray-500 cursor-pointer hover:text-gray-700",
                          href: "https://www.facebook.com/alphadventure2018/about",
                          target: "_blank",
                          children: e.jsx("svg", {
                            fill: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                            }),
                          }),
                        }),
                        e.jsx("a", {
                          className:
                            "ml-3 text-gray-500 cursor-pointer hover:text-gray-700",
                          href: "https://wa.me/your-number",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: e.jsx("svg", {
                            fill: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                            }),
                          }),
                        }),
                        e.jsx("a", {
                          className:
                            "ml-3 text-gray-500 cursor-pointer hover:text-gray-700",
                          href: "https://www.instagram.com/alphaadventures.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                          target: "_blank",
                          children: e.jsxs("svg", {
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: [
                              e.jsx("rect", {
                                width: "20",
                                height: "20",
                                x: "2",
                                y: "2",
                                rx: "5",
                                ry: "5",
                              }),
                              e.jsx("path", {
                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("a", {
                          className:
                            "ml-3 text-gray-500 cursor-pointer hover:text-gray-700",
                          href: "https://in.linkedin.com/company/alpha-adventures-travel-community",
                          target: "_blank",
                          children: e.jsxs("svg", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "0",
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: [
                              e.jsx("path", {
                                stroke: "none",
                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                              }),
                              e.jsx("circle", {
                                cx: "4",
                                cy: "4",
                                r: "2",
                                stroke: "none",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left justify-center ",
                children: [
                  e.jsxs("div", {
                    className: "w-full px-4 lg:w-1/4 md:w-1/2",
                    children: [
                      e.jsx("h2", {
                        className:
                          "mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font",
                        children: "About",
                      }),
                      e.jsxs("nav", {
                        className: "mb-10 list-none",
                        children: [
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Company",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Careers",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Blog",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "w-full px-4 lg:w-1/4 md:w-1/2",
                    children: [
                      e.jsx("h2", {
                        className:
                          "mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font",
                        children: "Support",
                      }),
                      e.jsxs("nav", {
                        className: "mb-10 list-none",
                        children: [
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Contact Support",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Help Resources",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Release Updates",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "w-full px-4 lg:w-1/4 md:w-1/2",
                    children: [
                      e.jsx("h2", {
                        className:
                          "mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font",
                        children: "Platform",
                      }),
                      e.jsxs("nav", {
                        className: "mb-10 list-none",
                        children: [
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Terms & Privacy",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Pricing",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "FAQ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "w-full px-4 lg:w-1/4 md:w-1/2",
                    children: [
                      e.jsx("h2", {
                        className:
                          "mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font",
                        children: "Contact",
                      }),
                      e.jsxs("nav", {
                        className: "mb-10 list-none",
                        children: [
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Send a Message",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "Request a Quote",
                            }),
                          }),
                          e.jsx("li", {
                            className: "mt-3",
                            children: e.jsx("a", {
                              className:
                                "text-gray-500 cursor-pointer hover:text-gray-900",
                              children: "+123-456-7890",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "bg-gray-300",
            children: e.jsx("div", {
              className: "container px-5 py-4 mx-auto",
              children: e.jsx("p", {
                className: "text-sm text-gray-700 capitalize xl:text-center",
                children: "© 2020 All rights reserved",
              }),
            }),
          }),
        ],
      }),
    });
function Ye() {
  const t = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
      are integrated into our daily work lives and help us to
      remember our customers always come first, the last
      thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/4g1D9cv/imgslider1.png",
      title: "Some of the best work that was done!",
      content: `Our core values are at the heart of all that we do. They
        are integrated into our daily work lives and help us to
        remember our customers always come first, the last
        thank you should always come from us.`,
      name: "Anna Smith",
      profession: "Senior Web Designer",
    },
  ];
  return e.jsxs("div", {
    className: "bg-slate-100 bg-opacity-90 font-body",
    children: [
      e.jsxs("div", {
        className:
          "flex items-center justify-between h-content w-content absolute z-0",
        children: [
          e.jsx("div", { className: "w-1/3 bg-white h-full" }),
          e.jsx("div", { className: "w-4/6 ml-16 bg-gray-100 h-full" }),
        ],
      }),
      e.jsx("div", {
        className:
          "xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-30",
        children: e.jsxs(ue, {
          naturalSlideWidth: 100,
          isIntrinsicHeight: !0,
          totalSlides: t.length,
          children: [
            e.jsxs("h1", {
              className:
                "text-5xl font-bold xl:block hidden leading-tight text-gray-800",
              children: [
                "What Trekkers are",
                e.jsx("br", {}),
                "saying",
                e.jsx("br", {}),
                "About Us",
              ],
            }),
            e.jsx("h1", {
              className:
                "text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800",
              children: "What Trekkers are saying About Us",
            }),
            e.jsx(ge, {
              children: t.map((s, l) =>
                e.jsx(
                  pe,
                  {
                    index: l,
                    tabIndex: "null",
                    children: e.jsx("div", {
                      className: "flex w-full",
                      children: e.jsxs("div", {
                        className: "mt-14 md:flex",
                        children: [
                          e.jsxs("div", {
                            className: "relative lg:w-1/2 sm:w-96 xl:h-96 h-80",
                            children: [
                              e.jsx("img", {
                                src: s.imgSrc,
                                alt: "image of profile",
                                className:
                                  "w-full h-full flex-shrink-0 object-fit object-cover rounded",
                              }),
                              e.jsx("div", {
                                className:
                                  "w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full",
                                children: e.jsx("img", {
                                  src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg",
                                  alt: "commas",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h1", {
                                    className:
                                      "text-2xl font-semibold xl:leading-loose text-gray-800",
                                    children: s.title,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-base font-medium leading-6 mt-4 text-gray-600",
                                    children: s.content,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "md:mt-0 mt-8",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-base font-medium leading-4 text-gray-800",
                                    children: s.name,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-base leading-4 mt-2 mb-4 text-gray-600",
                                    children: s.profession,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  s.id
                )
              ),
            }),
            e.jsxs("div", {
              className: "flex items-center mt-8 ",
              children: [
                e.jsx(fe, {
                  className: "cursor-pointer ",
                  role: "button",
                  "aria-label": "previous slide",
                  children: e.jsx("img", {
                    className: "h-6 w-6",
                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg",
                    alt: "previous",
                  }),
                }),
                e.jsx(be, {
                  role: "button",
                  "aria-label": "next slide",
                  className: "cursor-pointer ml-2",
                  children: e.jsx("img", {
                    className: "h-12 w-12",
                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg",
                    alt: "next",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const z = () => {
    const t = [
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Leslie Alexander",
        title: "Co-Founder / CEO",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ];
    return e.jsx("div", {
      className: "bg-white py-24 sm:py-32 font-body",
      children: e.jsxs("div", {
        className:
          "mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "max-w-2xl",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                children: "Meet our leadership",
              }),
              e.jsx("p", {
                className: "mt-6 text-lg leading-8 text-gray-600",
                children:
                  "Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.",
              }),
            ],
          }),
          e.jsx("ul", {
            role: "list",
            className:
              "grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2",
            children: t.map((s, l) =>
              e.jsx(
                "li",
                {
                  children: e.jsxs("div", {
                    className: "flex items-center gap-x-6",
                    children: [
                      e.jsx("img", {
                        className: "h-16 w-16 rounded-full",
                        src: s.imageUrl,
                        alt: s.name,
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-base font-semibold leading-7 tracking-tight text-gray-900",
                            children: s.name,
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm font-semibold leading-6 text-indigo-600",
                            children: s.title,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                l
              )
            ),
          }),
        ],
      }),
    });
  },
  Je = "/images/bed.jpeg",
  Ze = "/images/Meal.jpeg",
  Ve = "/images/Bus.png",
  Xe = "/images/Travel.jpeg",
  et = () => {
    const t = [
        {
          id: 1,
          image: Je,
          title: "Stays",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: e.jsx(je, {}),
        },
        {
          id: 2,
          image: Ze,
          title: "Meals",
          description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
          icon: e.jsx(ye, {}),
        },
        {
          id: 3,
          image: Ve,
          title: "Transport",
          description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
          icon: e.jsx(ve, {}),
        },
        {
          id: 4,
          image: Xe,
          title: "Guide",
          description:
            "Curabitur aliquam, augue sed scelerisque ultricies, nunc sapien varius sapien, a bibendum magna velit vitae odio.",
          icon: e.jsx(we, {}),
        },
      ],
      [s, l] = x.useState(t[0].image),
      [c, r] = x.useState(1),
      o = (a) => {
        r(a);
        const i = t.find((m) => m.id === a);
        i && l(i.image);
      };
    return e.jsx("div", {
      className: "overflow-hidden bg-slate-100 py-24 font-body sm:py-20",
      children: e.jsx("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: e.jsxs("div", {
          className:
            "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",
          children: [
            e.jsx("div", {
              className: "lg:pr-8 lg:pt-4",
              children: e.jsxs("div", {
                className: "lg:max-w-lg",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-base font-semibold leading-7 text-indigo-600",
                    children: "Explore Beyond Limits, Embrace the Journey",
                  }),
                  e.jsx("p", {
                    className:
                      "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                    children: "Why Trek With Us",
                  }),
                  e.jsx("dl", {
                    className:
                      "mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none ",
                    children: t.map((a) =>
                      e.jsxs(
                        "div",
                        {
                          className: `relative pl-9 p-2 hover:cursor-pointer ${
                            c === a.id
                              ? "shadow-custom py-6    bg-white rounded-lg"
                              : ""
                          }`,
                          onClick: () => o(a.id),
                          children: [
                            e.jsxs("dt", {
                              className:
                                " flex items-center font-semibold text-gray-900",
                              children: [
                                e.jsx("div", {
                                  className: `absolute ${
                                    c === a.id ? "left-2 top-6" : "left-2 top-2"
                                  } text-indigo-600`,
                                  children: a.icon,
                                }),
                                a.title,
                              ],
                            }),
                            e.jsxs("dd", {
                              className: "inline",
                              children: [" ", a.description],
                            }),
                          ],
                        },
                        a.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "flex items-center justify-center",
              children: e.jsx("img", {
                src: s,
                alt: "Selected Perk",
                className: "max-w-full h-auto rounded-lg shadow-lg",
              }),
            }),
          ],
        }),
      }),
    });
  },
  tt = "/images/image.png",
  st = () => {
    const t = E();
    return e.jsx("div", {
      className: "bg-white font-body",
      children: e.jsx("div", {
        className: "mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:px-8  ",
        children: e.jsxs("div", {
          className:
            "relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ",
          children: [
            e.jsxs("svg", {
              viewBox: "0 0 1024 1024",
              className:
                "absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0",
              "aria-hidden": "true",
              children: [
                e.jsx("circle", {
                  cx: "512",
                  cy: "512",
                  r: "512",
                  fill: "url(#759c1415-0410-454c-8f7c-9a820de03641)",
                  fillOpacity: "0.7",
                }),
                e.jsx("defs", {
                  children: e.jsxs("radialGradient", {
                    id: "759c1415-0410-454c-8f7c-9a820de03641",
                    children: [
                      e.jsx("stop", { stopColor: "#7775D6" }),
                      e.jsx("stop", { offset: "1", stopColor: "#E935C1" }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left md:pb-16 pb-20 ",
              children: [
                e.jsxs("h2", {
                  className:
                    "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                  children: [
                    "Take A Break.",
                    e.jsx("br", {}),
                    "Book Your Next Adventure Trek Now !!!",
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mt-10 flex items-center justify-center gap-x-6 lg:justify-start",
                  children: [
                    e.jsx("a", {
                      href: "https://wa.me/+919403449240",
                      target: "_black",
                      className:
                        "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:cursor-pointer hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                      children: "Contact Us",
                    }),
                    e.jsxs("span", {
                      className:
                        "text-sm font-semibold leading-6 text-white hover:cursor-pointer",
                      onClick: () => t("/about"),
                      children: [
                        "Know more About Us ",
                        e.jsx("span", { "aria-hidden": "true", children: "→" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "relative mt-16 h-80 lg:mt-0 hidden lg:block",
              children: e.jsx("img", {
                className:
                  "absolute left-0 top-0 w-[57rem] max-w-none  roundedl-md  bg-white/5 ring-1 ring-white/10",
                src: tt,
                alt: "App screenshot",
                width: "1824",
                height: "1080",
              }),
            }),
          ],
        }),
      }),
    });
  },
  at = "/images/yvwpa2zrzzg09olibtm4.svg",
  rt = "/images/4187094_16528_xcmkpj.svg",
  lt = "/images/SuccessfullTreks_y59kgf.svg",
  Q = () => {
    const t = [
        { img: at, label: "Years of Experience", value: 6 },
        { img: rt, label: "Happy Trekkers", value: 5e3 },
        { img: lt, label: "Successful Treks", value: 100 },
      ],
      [s, l] = x.useState(t.map(() => 0));
    return (
      x.useEffect(() => {
        const c = () => {
          const r = document.getElementById("achievements");
          if (r) {
            const o = r.getBoundingClientRect().top,
              a = r.getBoundingClientRect().bottom,
              i = window.innerHeight;
            if (o < i && a > 0) {
              const m = setInterval(() => {
                l((n) =>
                  n.map((d, g) => (d < t[g].value ? d + 2 : t[g].value))
                );
              }, 2);
              return () => clearInterval(m);
            }
          }
        };
        return (
          window.addEventListener("scroll", c),
          () => window.removeEventListener("scroll", c)
        );
      }, [t]),
      e.jsx("div", {
        id: "achievements",
        className: "bg-white py-4 sm:py-8 sm:pb-16  font-body",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8 w-full text-center",
          children: [
            e.jsx("h1", {
              className: "text-5xl font-bold mb-10 text-slate-700",
              children: "Alpha Adventures By the Numbers",
            }),
            e.jsx("dl", {
              className:
                "grid grid-cols-1 gap-x-4 gap-y-8 text-center lg:grid-cols-3",
              children: t.map((c, r) =>
                e.jsxs(
                  "div",
                  {
                    className: "mx-auto flex max-w-xs flex-col gap-y-4",
                    children: [
                      e.jsx("div", {
                        className: "flex justify-center items-center",
                        children: e.jsx("img", {
                          className: "h h-60 w-60 ",
                          src: c.img,
                          alt: "",
                        }),
                      }),
                      e.jsx("div", {
                        children: e.jsx("dt", {
                          className: "text-2xl leading-7 text-gray-600",
                          children: c.label,
                        }),
                      }),
                      e.jsx("div", {
                        children: e.jsxs("dd", {
                          className:
                            "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl",
                          children: [s[r], "+"],
                        }),
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
          ],
        }),
      })
    );
  };
function nt() {
  const [t, s] = x.useState(!1);
  x.useEffect(() => {
    const c = () => {
      const r = window.scrollY;
      s(r > 50);
    };
    return (
      window.addEventListener("scroll", c),
      () => {
        window.removeEventListener("scroll", c);
      }
    );
  }, []);
  const l = () => {
    window.scrollTo(0, 0);
  };
  return e.jsx("div", {
    className: `bg-slate-800 h-16 font-body w-16 md:h-20 md:w-20 rounded-full right-8 bottom-28 md:bottom-40 md:right-12  flex items-center justify-center fixed hover:cursor-pointer transition-all duration-300 ease-in-out ${
      t ? "opacity-100 visible" : "opacity-0 invisible"
    }`,
    onClick: l,
    children: e.jsx(Ne, { style: { color: "white", fontSize: "3rem" } }),
  });
}
const it = async () =>
  (
    await y.get(`${v}/trek/slider-all-treks-sortbydate`, {
      withCredentials: !0,
    })
  ).data.data;
function ot({ upcommingtrekslist: t }) {
  const s = b((a) => a.addCourse),
    l = b((a) => a.addDateId),
    c = E(),
    r = {
      infinite: !1,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1e3, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    },
    o = (a, i) => {
      a && i && (s(a), l(i), c("/trekdetails"));
    };
  return e.jsx("div", {
    className: "w-full",
    children: e.jsx("div", {
      className: "w-[98%] m-auto",
      children:
        t.length === 0
          ? e.jsx("p", { children: "No treks available at the moment." })
          : e.jsx(q, {
              ...r,
              children: t.map((a, i) => {
                const [m, n] = x.useState(!0);
                return e.jsxs(
                  "div",
                  {
                    className:
                      "bg-slate-200  shadow-lg rounded-xl hover:cursor-pointer ",
                    children: [
                      e.jsxs("div", {
                        className:
                          "h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden",
                        children: [
                          m &&
                            e.jsx("div", {
                              className:
                                "spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75",
                              children: e.jsx("span", {
                                children: "Loading...",
                              }),
                            }),
                          e.jsx("img", {
                            src: a.images[0],
                            alt: a.trekName,
                            className: `object-cover h-full w-full ${
                              m ? "hidden" : ""
                            }`,
                            onLoad: () => n(!1),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "info flex flex-col items-center px-6 py-2 md:py-6 md:px-6",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-2xl font-bold text-indigo-600 mb-0 md:mb-2",
                            children: a.trekName,
                          }),
                          e.jsx("h3", {
                            className:
                              "text-lg font-medium text-gray-700 mb-0 md:mb-4",
                            children: a.trekTitle,
                          }),
                          e.jsxs("div", {
                            className: "w-full text-gray-600 mb-0 md:mb-4",
                            children: [
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Type:",
                                  }),
                                  " ",
                                  a.trekType,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Location:",
                                  }),
                                  " ",
                                  a.trekLocation,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Suitable Age:",
                                  }),
                                  " ",
                                  a.suitableForAge,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Trek Start Date:",
                                  }),
                                  " ",
                                  new Date(a.startDate).toLocaleDateString(
                                    "en-GB"
                                  ),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Duration:",
                                      }),
                                      " ",
                                      a.dateDifference,
                                      " days",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Difficulty:",
                                      }),
                                      " ",
                                      a.trekDifficulty.charAt(0).toUpperCase() +
                                        a.trekDifficulty.slice(1),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            className: "button",
                            onClick: () => o(a._id, a.trekDateId),
                            children: [
                              "Get Trek",
                              e.jsxs("span", {
                                className: "button-span",
                                children: [" ", "─ Information & Dates"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  i
                );
              }),
            }),
    }),
  });
}
function j() {
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      role: "status",
      children: [
        e.jsxs("svg", {
          "aria-hidden": "true",
          className:
            "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            e.jsx("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor",
            }),
            e.jsx("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill",
            }),
          ],
        }),
        e.jsx("span", { className: "sr-only", children: "Loading..." }),
      ],
    }),
  });
}
function ct() {
  const {
    data: t = [],
    error: s,
    isLoading: l,
    refetch: c,
  } = w({ queryKey: ["UpcomingTrekList"], queryFn: it });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex flex-col",
        children: e.jsx("div", {
          className:
            "flex flex-wrap sm:flex-row flex-col py-2 mb-6 mt-0 items-center justify-center",
          children: e.jsx("h1", {
            className:
              "md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body",
            children: "Upcoming Treks",
          }),
        }),
      }),
      e.jsx("div", {
        className: "ml-10",
        children: e.jsx("button", {
          type: "button",
          className:
            " border border-blue-700  bg-blue-500 ring-4 outline-none text-white ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ",
          children: "Upcomming Treks",
        }),
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14",
        children: l ? e.jsx(j, {}) : e.jsx(ot, { upcommingtrekslist: t }),
      }),
    ],
  });
}
const dt = async () =>
    (
      await y.get(`${v}/trek/slider-all-treks-sortbypricedesc`, {
        withCredentials: !0,
      })
    ).data.data,
  mt = async () =>
    (
      await y.get(`${v}/trek/slider-all-treks-sortbypriceasc`, {
        withCredentials: !0,
      })
    ).data.data;
function xt({ trekbasedonprice: t }) {
  const s = b((a) => a.addCourse),
    l = b((a) => a.addDateId),
    c = E(),
    r = {
      infinite: !1,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1e3, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    },
    o = (a, i) => {
      a && i && (s(a), l(i), c("/trekdetails"));
    };
  return e.jsx("div", {
    className: "w-full",
    children: e.jsx("div", {
      className: "w-[98%] m-auto",
      children:
        t.length === 0
          ? e.jsx("p", { children: "No treks available at the moment." })
          : e.jsx(q, {
              ...r,
              children: t.map((a, i) => {
                const [m, n] = x.useState(!0);
                return e.jsxs(
                  "div",
                  {
                    className:
                      "bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer",
                    children: [
                      e.jsxs("div", {
                        className:
                          "h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden",
                        children: [
                          m &&
                            e.jsx("div", {
                              className:
                                "spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75",
                              children: e.jsx("span", {
                                children: "Loading...",
                              }),
                            }),
                          e.jsx("img", {
                            src: a.images[0],
                            alt: a.trekName,
                            className: `object-cover h-full w-full ${
                              m ? "hidden" : ""
                            }`,
                            onLoad: () => n(!1),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col items-center px-6 py-2 md:py-6 md:px-6",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-2xl font-bold text-indigo-600 mb-0 md:mb-2",
                            children: a.trekName,
                          }),
                          e.jsx("h3", {
                            className:
                              "text-lg font-medium text-gray-700 mb-0 md:mb-4",
                            children: a.trekTitle,
                          }),
                          e.jsxs("div", {
                            className: "w-full text-gray-600 mb-0 md:mb-4",
                            children: [
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Type:",
                                  }),
                                  " ",
                                  a.trekType,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Location:",
                                  }),
                                  " ",
                                  a.trekLocation,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Suitable Age:",
                                  }),
                                  " ",
                                  a.suitableForAge,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Trek Start Date:",
                                  }),
                                  " ",
                                  new Date(a.startDate).toLocaleDateString(
                                    "en-GB"
                                  ),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Duration:",
                                      }),
                                      " ",
                                      a.dateDifference,
                                      " days",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Difficulty:",
                                      }),
                                      " ",
                                      a.trekDifficulty.charAt(0).toUpperCase() +
                                        a.trekDifficulty.slice(1),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            className: "button",
                            onClick: () => o(a._id, a.trekDateId),
                            children: [
                              "Get Trek",
                              e.jsxs("span", {
                                className: "button-span",
                                children: [" ", "─ Information & Dates"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  i
                );
              }),
            }),
    }),
  });
}
function ht() {
  const [t, s] = x.useState("PricingHighToLow"),
    { data: l = [], isLoading: c } = w({
      queryKey: [t === "PricingHighToLow" ? "HighPriceTrek" : "LowPriceTrek"],
      queryFn: t === "PricingHighToLow" ? dt : mt,
    });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex flex-col",
        children: e.jsx("div", {
          className:
            "flex flex-wrap sm:flex-row flex-col py-1 mb-6 items-center justify-center",
          children: e.jsx("h1", {
            className:
              "md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body",
            children: "Treks Based On Pricing",
          }),
        }),
      }),
      e.jsxs("div", {
        className: "ml-10",
        children: [
          e.jsx("button", {
            type: "button",
            onClick: () => s("PricingHighToLow"),
            className: `${
              t === "PricingHighToLow"
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
            children: "Pricing High To Low",
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => s("PricingLowToHigh"),
            className: `${
              t === "PricingLowToHigh"
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
            children: "Pricing Low To High",
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14",
        children: c ? e.jsx(j, {}) : e.jsx(xt, { trekbasedonprice: l }),
      }),
    ],
  });
}
const ut = async () =>
    (await y.get(`${v}/trek/slider-treks-with-easy`, { withCredentials: !0 }))
      .data.data,
  gt = async () =>
    (
      await y.get(`${v}/trek/slider-treks-with-modrate`, {
        withCredentials: !0,
      })
    ).data.data,
  pt = async () =>
    (
      await y.get(`${v}/trek/slider-treks-with-difficult`, {
        withCredentials: !0,
      })
    ).data.data;
function ft({ trekbasedondifficulty: t }) {
  const s = b((n) => n.addCourse),
    l = b((n) => n.addDateId),
    c = E(),
    [r, o] = x.useState(t.map(() => !0)),
    a = (n) => {
      o((d) => {
        const g = [...d];
        return (g[n] = !1), g;
      });
    },
    i = {
      infinite: !1,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1e3, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    },
    m = (n, d) => {
      n && d && (s(n), l(d), c("/trekdetails"));
    };
  return e.jsx("div", {
    className: "w-full",
    children: e.jsx("div", {
      className: "w-[98%] m-auto",
      children:
        t.length === 0
          ? e.jsx("p", {
              className: "ml-2 ",
              children: "No treks available at the moment.",
            })
          : e.jsx(q, {
              ...i,
              children: t.map((n, d) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer ",
                    children: [
                      e.jsxs("div", {
                        className:
                          "h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden",
                        children: [
                          r[d] &&
                            e.jsx("div", {
                              className:
                                "spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75",
                              children: e.jsx("span", {
                                children: "Loading...",
                              }),
                            }),
                          e.jsx("img", {
                            src: n.images[0],
                            alt: n.trekName,
                            className: `object-cover h-full w-full ${
                              r[d] ? "hidden" : ""
                            }`,
                            onLoad: () => a(d),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col items-center px-6 py-2 md:py-6 md:px-6",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-2xl font-bold text-indigo-600 mb-0 md:mb-2",
                            children: n.trekName,
                          }),
                          e.jsx("h3", {
                            className:
                              "text-lg font-medium text-gray-700 mb-0 md:mb-4",
                            children: n.trekTitle,
                          }),
                          e.jsxs("div", {
                            className: "w-full text-gray-600 mb-0 md:mb-4",
                            children: [
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Type:",
                                  }),
                                  " ",
                                  n.trekType,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Location:",
                                  }),
                                  " ",
                                  n.trekLocation,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Suitable Age:",
                                  }),
                                  " ",
                                  n.suitableForAge,
                                ],
                              }),
                              e.jsxs("p", {
                                className: "mb-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Trek Start Date:",
                                  }),
                                  " ",
                                  new Date(n.startDate).toLocaleDateString(
                                    "en-GB"
                                  ),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Duration:",
                                      }),
                                      " ",
                                      n.dateDifference,
                                      " days",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "Difficulty:",
                                      }),
                                      " ",
                                      n.trekDifficulty.charAt(0).toUpperCase() +
                                        n.trekDifficulty.slice(1),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            className: "button",
                            onClick: () => m(n._id, n.trekDateId),
                            children: [
                              "Get Trek",
                              e.jsx("span", {
                                className: "button-span",
                                children: " ─ Information & Dates",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  d
                )
              ),
            }),
    }),
  });
}
function bt() {
  const [t, s] = x.useState("Easy"),
    { data: l = [], isLoading: c } = w({
      queryKey: [t],
      queryFn: t === "Easy" ? ut : t === "Moderate" ? gt : pt,
    }),
    r = (o) => {
      s(o);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex flex-col",
        children: e.jsx("div", {
          className:
            "flex flex-wrap sm:flex-row flex-col py-1 mb-6 items-center justify-center",
          children: e.jsx("h1", {
            className:
              "md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body",
            children: "Treks Based On Difficulty",
          }),
        }),
      }),
      e.jsxs("div", {
        className: "ml-10",
        children: [
          e.jsx("button", {
            type: "button",
            onClick: () => r("Easy"),
            className: `${
              t === "Easy"
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
            children: "Easy Treks",
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => r("Moderate"),
            className: `${
              t === "Moderate"
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
            children: "Moderate Treks",
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => r("Hard"),
            className: `${
              t === "Hard"
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
            children: "Difficult Treks",
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14",
        children: c ? e.jsx(j, {}) : e.jsx(ft, { trekbasedondifficulty: l }),
      }),
    ],
  });
}
function jt({ TreksForTrekType: t }) {
  const s = b((n) => n.addCourse),
    l = b((n) => n.addDateId);
  E();
  const [c, r] = x.useState(t.map(() => !0)),
    o = (n) => {
      r((d) => {
        const g = [...d];
        return (g[n] = !1), g;
      });
    },
    a = (n) => {
      r((d) => {
        const g = [...d];
        return (g[n] = !1), g;
      });
    },
    i = {
      infinite: !1,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1e3, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    },
    m = (n, d) => {
      n && d && (s(n), l(d));
    };
  return e.jsx("div", {
    className: "w-full",
    children: e.jsx("div", {
      className: "w-[98%] m-auto",
      children:
        (t == null ? void 0 : t.length) === 0
          ? e.jsx("p", { children: "No treks available at the moment." })
          : e.jsx(q, {
              ...i,
              children:
                t == null
                  ? void 0
                  : t.map((n, d) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer ",
                          children: [
                            e.jsxs("div", {
                              className:
                                "h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden",
                              children: [
                                c[d] &&
                                  e.jsx("div", {
                                    className:
                                      "spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75",
                                    children: e.jsx("span", {
                                      children: "Loading...",
                                    }),
                                  }),
                                e.jsx("img", {
                                  src: n.images[0],
                                  alt: n.trekName,
                                  className: `object-cover h-full w-full ${
                                    c[d] ? "hidden" : ""
                                  }`,
                                  onLoad: () => o(d),
                                  onError: () => a(d),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center px-6 py-2 md:py-6 md:px-6",
                              children: [
                                e.jsx("h2", {
                                  className:
                                    "text-2xl font-bold text-indigo-600 mb-0 md:mb-2",
                                  children: n.trekName,
                                }),
                                e.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-gray-700 mb-0 md:mb-4",
                                  children: n.trekTitle,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "w-full text-gray-600 mb-0 md:mb-4",
                                  children: [
                                    e.jsxs("p", {
                                      className: "mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: "Type:",
                                        }),
                                        " ",
                                        n.trekType,
                                      ],
                                    }),
                                    e.jsxs("p", {
                                      className: "mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: "Location:",
                                        }),
                                        " ",
                                        n.trekLocation,
                                      ],
                                    }),
                                    e.jsxs("p", {
                                      className: "mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: "Suitable Age:",
                                        }),
                                        " ",
                                        n.suitableForAge,
                                      ],
                                    }),
                                    e.jsxs("p", {
                                      className: "mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: "Trek Start Date:",
                                        }),
                                        " ",
                                        new Date(
                                          n.startDate
                                        ).toLocaleDateString("en-GB"),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex justify-between",
                                      children: [
                                        e.jsxs("p", {
                                          className: "mb-2",
                                          children: [
                                            e.jsx("span", {
                                              className: "font-semibold",
                                              children: "Duration:",
                                            }),
                                            " ",
                                            n.dateDifference,
                                            " days",
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          className: "mb-2",
                                          children: [
                                            e.jsx("span", {
                                              className: "font-semibold",
                                              children: "Difficulty:",
                                            }),
                                            " ",
                                            n.trekDifficulty
                                              .charAt(0)
                                              .toUpperCase() +
                                              n.trekDifficulty.slice(1),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(H, {
                                  to: "/trekdetails",
                                  children: e.jsxs("button", {
                                    className: "button",
                                    onClick: () => m(n._id, n.trekDateId),
                                    children: [
                                      "Get Trek",
                                      e.jsxs("span", {
                                        className: "button-span",
                                        children: [
                                          " ",
                                          "─ Information & Dates",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        d
                      )
                    ),
            }),
    }),
  });
}
const yt = async () =>
    (await y.get(`${v}/trektype/getalltrektypes`, { withCredentials: !0 })).data
      .data,
  vt = async ({ id: t }) => {
    try {
      return (
        await y.get(`${v}/trek/getTrekTypeTreksForClient/${t}`, {
          withCredentials: !0,
        })
      ).data.data;
    } catch (s) {
      throw (
        (console.error("Error fetching Treks For Trek Type:", s),
        new Error("Failed to fetch Treks For Trek Type."))
      );
    }
  };
function wt() {
  const t = b((u) => u.addTrekTypeId),
    s = b((u) => u.trekTypeId),
    {
      data: l = [],
      error: c,
      isLoading: r,
      refetch: o,
    } = w({ queryKey: ["TrekTypeButtons"], queryFn: yt }),
    [a, i] = x.useState(null);
  x.useEffect(() => {
    if (l.length > 0 && !a) {
      const u = l[0]._id;
      i(u), t(u);
    }
  }, [l, a, t]);
  const {
      data: m = [],
      error: n,
      isLoading: d,
    } = w({
      queryKey: ["TreksForTrekType", s],
      queryFn: async () => {
        try {
          return await vt({ id: s });
        } catch (u) {
          throw (
            (console.error("Error fetching Treks For Trek Type Using Id:", u),
            new Error("Failed to fetch Treks For Trek Type Using Id."))
          );
        }
      },
      enabled: !!s,
    }),
    g = (u) => {
      i(u), t(u);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex flex-col",
        children: e.jsx("div", {
          className:
            "flex flex-wrap sm:flex-row flex-col py-2 mb-6 mt-0 items-center justify-center",
          children: e.jsx("h1", {
            className:
              "md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body",
            children: "Treks Based on Trek Type",
          }),
        }),
      }),
      e.jsx("div", {
        className: "ml-10",
        children: l.map((u) =>
          e.jsx(
            "button",
            {
              type: "button",
              className: `${
                a === u._id
                  ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                  : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
              } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`,
              onClick: () => g(u._id),
              children: u.name,
            },
            u._id
          )
        ),
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14",
        children: r || d ? e.jsx(j, {}) : e.jsx(jt, { TreksForTrekType: m }),
      }),
    ],
  });
}
const Nt = () =>
    e.jsx("section", {
      className: "text-black bg-white body-font lg:mt-0  font-body",
      children: e.jsxs("div", {
        className: "container px-2 pt-8 pb-8 lg:pb-12 lg:pt-8 mx-auto",
        children: [e.jsx(ct, {}), e.jsx(wt, {}), e.jsx(ht, {}), e.jsx(bt, {})],
      }),
    }),
  kt = "/images/Whatsapp.png";
function Tt() {
  return e.jsxs("a", {
    href: "https://wa.me/+919403449240?text=Hey%20Alpha%20Adventures%2C%20I%27m%20looking%20to%20book%20a%20Trek",
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      " h-16 w-16 md:h-20 md:w-20 rounded-full right-8 bottom-8 md:bottom-12 md:right-11 hover:cursor-pointer flex items-center justify-center fixed group hover:scale-110 transition-transform duration-300",
    children: [
      e.jsx("img", { src: kt, alt: "WhatsApp", className: "h-16 md:h-20" }),
      e.jsxs("div", {
        className:
          "absolute right-20 bottom-2 hidden group-hover:flex flex-col items-center justify-center px-3 py-2 bg-white shadow-lg rounded-lg text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-32",
        children: [
          e.jsx("p", {
            className: "text-sm font-bold",
            children: "Book A Trek!",
          }),
          e.jsx("p", {
            className: "text-xs font-semibold",
            children: "Contact Us Now!",
          }),
        ],
      }),
    ],
  });
}
function St() {
  return (
    x.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(P, {}),
        e.jsx(Qe, {}),
        e.jsx(Nt, {}),
        e.jsx(et, {}),
        e.jsx(st, {}),
        e.jsx(Q, {}),
        e.jsx(Ye, {}),
        e.jsx(z, {}),
        e.jsx(B, {}),
        e.jsx(nt, {}),
        e.jsx(Tt, {}),
      ],
    })
  );
}
function M() {
  return e.jsx("div", { className: "mt-20 lg:mt-32" });
}
const At = "/images/pexels-photo-2105416.png";
function Ct() {
  const t = [
      { label: "Years of Experience", value: 6 },
      { label: "Happy Trekkers", value: 5e3 },
      { label: "Successfully Treks", value: 100 },
    ],
    [s, l] = x.useState(t.map(() => 0));
  return (
    x.useEffect(() => {
      const c = setInterval(() => {
        l((r) => r.map((o, a) => (o < t[a].value ? o + 30 : t[a].value)));
      }, 10);
      return () => clearInterval(c);
    }, [t]),
    e.jsxs("div", {
      className:
        "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 font-normal font-body",
      children: [
        e.jsx("img", {
          src: At,
          alt: "",
          className:
            "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-80",
        }),
        e.jsx("div", {
          className:
            "hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl",
          "aria-hidden": "true",
          children: e.jsx("div", {
            className:
              "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20",
            style: {
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            },
          }),
        }),
        e.jsx("div", {
          className:
            "absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu",
          "aria-hidden": "true",
          children: e.jsx("div", {
            className:
              "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20",
            style: {
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            },
          }),
        }),
        e.jsxs("div", {
          className: "mx-auto max-w-7xl px-6 lg:px-8 font-normal",
          children: [
            e.jsxs("div", {
              className: "mx-auto max-w-2xl lg:mx-0",
              children: [
                e.jsx("h2", {
                  className:
                    "text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl",
                  children: "Alpha Adventures.",
                }),
                e.jsxs("p", {
                  className: "mt-6 text-xl leading-8 font-normal text-white",
                  children: [
                    "Welcome to",
                    " ",
                    e.jsx("span", {
                      className: "text-slate-900 font-normal",
                      children: "Alpha Adventures",
                    }),
                    ", your premier adventure travel partner based in",
                    " ",
                    e.jsx("span", {
                      className: "text-slate-900 font-normal",
                      children: "The Heart of Nagpur.",
                    }),
                    " ",
                    "With over",
                    " ",
                    e.jsx("span", {
                      className: "text-slate-900 font-normal",
                      children: " 6 Years ",
                    }),
                    " of unparalleled experience, we specialize in curating unforgettable trekking experiences for adventure enthusiasts. Our commitment to safety, excitement, and exploration has garnered the trust and smiles of over",
                    " ",
                    e.jsxs("span", {
                      className: "text-slate-900 font-normal",
                      children: [" ", "5,000 Happy Trekkers", " "],
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none font-normal",
              children: [
                e.jsxs("div", {
                  className:
                    "grid grid-cols-1 gap-x-8 gap-y-6 text-lg  leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10",
                  children: [
                    e.jsxs("span", {
                      href: "#",
                      className: "hover:cursor-pointer",
                      children: [
                        "Learn More About Our Treks ",
                        e.jsx("span", { "aria-hidden": "true", children: "→" }),
                      ],
                    }),
                    e.jsxs("span", {
                      href: "#",
                      className: "hover:cursor-pointer",
                      children: [
                        "Meet our Leaders ",
                        e.jsx("span", { "aria-hidden": "true", children: "→" }),
                      ],
                    }),
                    e.jsxs("span", {
                      href: "#",
                      className: "hover:cursor-pointer",
                      children: [
                        "Meet our Guides ",
                        e.jsx("span", { "aria-hidden": "true", children: "→" }),
                      ],
                    }),
                  ],
                }),
                e.jsx("dl", {
                  id: "achievements",
                  className:
                    "mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4",
                  children: t.map((c, r) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex flex-col-reverse font-normal",
                        children: [
                          e.jsx("dt", {
                            className: "text-lg leading-7 text-gray-100",
                            children: c.label,
                          }),
                          e.jsxs("dd", {
                            className:
                              "text-2xl font-bold leading-9 tracking-tight text-white",
                            children: [s[r], "+"],
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const Dt = [
    {
      title: "About Us",
      text: e.jsxs(e.Fragment, {
        children: [
          "Founded on February 6, 2018, Alpha Adventures was born from a profound love for nature and a desire to share the awe-inspiring beauty of the world with others.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Our journey began in December 2017, after an unforgettable trek to Chandrashila and the Tunganath Shiva Temple - the highest Shiva temple in the world. This transformative experience ignited our passion and set us on a mission to create an adventure travel company dedicated to exploring the great outdoors while preserving its pristine beauty.",
        ],
      }),
      imageUrl:
        "https://images.pexels.com/photos/7163372/pexels-photo-7163372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Our Vision",
      text: `
      At Alpha Adventures, we believe in living harmoniously with nature,
      fostering a deep connection, love, and respect for the wild. Our
      vision is to cultivate a community that values and protects the
      environment, ensuring that future generations can also bask in the
      glory of untouched landscapes and thriving wildlife.
    `,
      imageUrl:
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Our Mission",
      text: `
      We are driven by the desire to inspire, motivate, and educate.
      Our mission is to empower individuals to explore beyond their
      horizons, discover their potential, and embrace a healthier,
      more active lifestyle.
    `,
      imageUrl:
        "https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  Lt = [
    {
      title: "We aim to:",
      points: [
        {
          heading: "Develop a Deep Connection with Nature",
          text: "Encourage love and compassion for the environment and its inhabitants. Promote Eco-friendly Practices: Advocate for nature conservation and sustainable living to combat global environmental challenges.",
        },
        {
          heading: "Promote Eco-friendly Practices:",
          text: "Advocate for nature conservation and sustainable living to combat global environmental challenges.",
        },
        {
          heading: "Encourage Health and Fitness",
          text: "Inspire people to stay active, take up travel, and ignite their passion for self-improvement.",
        },
        {
          heading: "Provide Unforgettable Experiences",
          text: "Deliver quality tours that create lasting memories and foster a lifelong appreciation for the natural world.",
        },
      ],
      imageUrl:
        "https://images.pexels.com/photos/2424236/pexels-photo-2424236.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
function It() {
  return e.jsx("section", {
    className: "text-gray-700 bg-white body-font lg:mt-0 mt-5 font-body",
    children: e.jsxs("div", {
      className: "container px-5 py-10 mx-auto flex flex-col gap-5 md:gap-10",
      children: [
        Dt.map((t, s) =>
          e.jsxs(
            "div",
            {
              className: `flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col md:flex-row ${
                s % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`,
              children: [
                e.jsxs("div", {
                  className: "flex flex-col gap-8 w-full h-auto",
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-start font-semibold text-4xl mt-10 text-gray-700",
                      children: t.title,
                    }),
                    e.jsx("p", {
                      className: "text-xl lg:text-2xl font-light mb-10",
                      children: t.text,
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "w-full h-auto",
                  children: e.jsx("img", {
                    className:
                      "object-cover object-center w-full h-full md:h-auto",
                    src: t.imageUrl,
                    alt: `${t.title} Image`,
                  }),
                }),
              ],
            },
            s
          )
        ),
        e.jsx("div", {
          className: "container px-5 mx-auto flex flex-col gap-10 md:gap-20",
          children: Lt.map((t, s) =>
            e.jsxs(
              "div",
              {
                className: `flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col ${
                  s % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`,
                children: [
                  e.jsxs("div", {
                    className: "flex flex-col gap-8 w-full h-auto",
                    children: [
                      e.jsx("h1", {
                        className:
                          "text-start font-semibold text-4xl text-gray-700",
                        children: t.title,
                      }),
                      e.jsx("ul", {
                        className:
                          "text-xl lg:text-2xl font-light mb-10 flex flex-col gap-4",
                        children: t.points.map((l, c) =>
                          e.jsxs(
                            "li",
                            {
                              className: "flex flex-col gap-2",
                              children: [
                                e.jsx("span", {
                                  className: "font-medium",
                                  children: l.heading,
                                }),
                                e.jsx("span", { children: l.text }),
                              ],
                            },
                            c
                          )
                        ),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "w-full h-auto",
                    children: e.jsx("img", {
                      className:
                        "object-cover object-center w-full h-full md:h-auto",
                      src: t.imageUrl,
                      alt: `${t.title} Image`,
                    }),
                  }),
                ],
              },
              s
            )
          ),
        }),
        e.jsxs(
          "div",
          {
            className:
              "flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col md:flex-row",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-8 w-full h-auto",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-start font-semibold text-4xl mt-10 text-gray-700",
                    children: "Our Commitment",
                  }),
                  e.jsxs("p", {
                    className: "text-xl lg:text-2xl font-light mb-10",
                    children: [
                      "We are committed to seeing our country become a beacon of fitness, responsibility, and care for wildlife and nature. From the majestic Himalayas to the lush Western Ghats, the serene Eastern Ghats, the rugged Satpura and Vindhya Ranges, and the ancient Aravalis, our guided tours are designed to showcase the beauty of India's diverse landscapes while promoting environmental stewardship.",
                      e.jsx("br", {}),
                      e.jsx("br", {}),
                      "We take pride in organizing eco-conscious adventures that leave a minimal footprint and a positive impact on the communities and ecosystems we explore.",
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "w-full h-auto",
                children: e.jsx("img", {
                  className:
                    "object-cover object-center w-full h-full md:h-auto",
                  src: "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg",
                  alt: "Image Error",
                }),
              }),
            ],
          },
          ""
        ),
      ],
    }),
  });
}
function Et() {
  return e.jsx("div", {
    className: "px-5 pb-5 font-body flex flex-col gap-5 md:gap-10 bg-slate-100",
    children: e.jsxs("div", {
      className:
        "flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-10 flex-col",
      children: [
        e.jsx("div", {
          className:
            "flex flex-col gap-8 w-full h-auto items-center justify-center",
          children: e.jsx("h1", {
            className: "text-start font-bold text-4xl mt-10 text-gray-700",
            children: "Our Instagram Community",
          }),
        }),
        e.jsx("div", {
          className: "w-full flex items-center justify-center",
          children: e.jsxs("div", {
            className: "relative w-full pb-[56.25%] h-0",
            children: [
              " ",
              e.jsx("iframe", {
                className: "absolute top-0 left-0 w-full h-full",
                src: "https://www.instagram.com/alphaadventures.in/embed/",
                frameBorder: "0",
                allowFullScreen: !0,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Pt() {
  return (
    x.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(M, {}),
        e.jsx(P, { type: "list" }),
        e.jsx(Ct, {}),
        e.jsx(It, {}),
        e.jsx(Q, {}),
        e.jsx(Et, {}),
        e.jsx(z, {}),
        e.jsx(B, {}),
      ],
    })
  );
}
const Bt = () => {
  const [t, s] = x.useState(null),
    l = (r) => {
      s(t === r ? null : r);
    },
    c = [
      {
        question: "How to Book a Trek/Trip with Us?",
        answer: e.jsxs(e.Fragment, {
          children: [
            e.jsxs("strong", {
              children: [
                "Booking a trek or trip with Alpha Adventures is simple and straightforward. ",
                e.jsx("br", {}),
                "Follow these steps to secure your spot on an unforgettable adventure:",
              ],
            }),
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "1. Choose a Trek/Trip: " }),
            "Select the trek or trip that excites you from our offerings.",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "2. Select the Batch Dates:" }),
            " Choose the batch dates that fit your schedule. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", {
              children: "3. Consult with Our Destination Experts: ",
            }),
            "Discuss any questions or concerns with our experts to ensure you're fully prepared. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "4. Complete the Payment Process:" }),
            " Finalize your booking by completing the payment. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "5. Receive Email Confirmation: " }),
            "After payment, you'll receive an email confirmation with all the details.",
          ],
        }),
      },
      {
        question: "What Are the Inclusions in the Fees?",
        answer: e.jsxs(e.Fragment, {
          children: [
            e.jsx("strong", {
              children:
                "Each trek/trip is designed uniquely and may include different components in the fees. Generally, your trek/trip cost includes:",
            }),
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "1. Train and Local Travel: " }),
            "Travel from specific locations, depending on availability.",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "2. Accommodation:" }),
            " Comfortable stays in tents, homestays, or hotels. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "3. All Meals: " }),
            "Simple, nutritious, and vegetarian meals throughout the trek/trip. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", {
              children: "4. Expert Trek Leaders and Support Team:",
            }),
            " Experienced guides and support staff to enhance your experience. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "5. Trekking and Safety Equipment: " }),
            "Essential gear for a safe and enjoyable trek. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "6. Permits and Entry Fees: " }),
            "All necessary permits and entry fees are covered.",
          ],
        }),
        icon: _,
      },
      {
        question: "What Are the Exclusions?",
        answer: e.jsxs(e.Fragment, {
          children: [
            e.jsx("strong", {
              children:
                "The following are generally not included in the trek/trip fees:",
            }),
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "1. Meals During Transit:" }),
            " Meals while traveling to the trek's starting point. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "2. Cost of Adventure Activities:" }),
            " Additional activities like rappelling, ziplining, or water sports. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "3. Personal Travel Accessories:" }),
            " Items like backpacks, shoes, and clothing.",
          ],
        }),
      },
      {
        question: "Do You Offer Any Discounts?",
        answer:
          "We typically do not offer discounts or promotions. However, if your group size exceeds 10 people, you can discuss potential discounts with our destination experts.",
      },
      {
        question: "I Paid But Didn’t Receive a Confirmation",
        answer:
          "If you've made a payment but haven't received a confirmation email, please contact our destination experts via call or WhatsApp. They will quickly resolve any issues and ensure your booking is confirmed.",
      },
      {
        question: "Can I Pay an Advance Amount to Book a Trek/Trip?",
        answer:
          "Yes, you can secure your booking by paying a specific advance amount. This amount will reserve your slot for the trek/trip.",
      },
      {
        question: "Can I Join Solo?",
        answer:
          "Absolutely! Traveling solo with Alpha Adventures offers a unique opportunity for self-discovery, making new friends, and connecting with nature. Our trek leaders and tour managers will ensure you feel included and never left out of the group.",
      },
      {
        question: "Are Your Treks/Trips Safe for Women?",
        answer: e.jsxs(e.Fragment, {
          children: [
            e.jsx("strong", {
              children:
                "Women's safety is of utmost importance to us at Alpha Adventures. We take several steps to ensure the safety of our female trekkers:",
            }),
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "1. Pre-Trek WhatsApp Group: " }),
            " Before the trek begins, we create a WhatsApp group for all registered participants, allowing everyone to get acquainted even before meeting in person. ",
            e.jsx("br", {}),
            " ",
            e.jsx("br", {}),
            e.jsx("strong", { children: "2. Separate Accommodations: " }),
            "Male and female trekkers stay in separate rooms or tents to ensure comfort and privacy. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", {
              children: "3. Inquiries About Group Composition: ",
            }),
            "If you're concerned about the number of female participants in the group, you can ask our destination expert for details. If you're uncomfortable, you can switch to another group or upcoming trek/trip.",
            " ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "4. Professional Trek Leaders: " }),
            " While we do not guarantee a female trek leader, all our trek leaders are trained in professional and appropriate behavior. We have a feedback mechanism and over-the-call support to address any concerns. ",
            e.jsx("br", {}),
            e.jsx("br", {}),
            e.jsx("strong", { children: "5. Sharing Contact Information: " }),
            "You can share the contact details of your destination expert or trek leader with your family members. They can communicate your whereabouts and act as a communication bridge in case of an emergency.",
          ],
        }),
      },
    ];
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className:
        "lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 md:mt-20 py-12 px-4 font-body",
      children: [
        e.jsx("h1", {
          className:
            "text-center  lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold",
          children: "FAQ's",
        }),
        e.jsx("div", {
          className:
            "lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto",
          children: e.jsxs("div", {
            className: "flex justify-between md:flex-row flex-col",
            children: [
              e.jsxs("div", {
                className: "md:mb-0 mb-8 md:text-left text-center",
                children: [
                  e.jsx("h2", {
                    className:
                      "font-medium  text-xl leading-5 text-gray-800 lg:mb-2 mb-4",
                    children: "Questions",
                  }),
                  e.jsxs("p", {
                    className:
                      "font-normal text-sm lg:text-md leading-5 text-gray-600 md:w-full md:ml-0 w-11/12 mx-auto md:font-semibold ",
                    children: [
                      "If you don’t find your answer,",
                      e.jsx("br", {}),
                      " Please contact us, ",
                      e.jsx("br", {}),
                      "We’ll be more than happy to assist you.",
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex justify-center items-center",
                children: e.jsx("div", {
                  className:
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-slate-200 md:justify-center justify-center items-center px-4 py-3 w-full ",
                  children: e.jsxs("a", {
                    href: "https://wa.me/919403110937?text=Hey%21%20We%20are%20Alpha%20Adventures%2C%20your%20adventure%20travel%20partner.%20How%20can%20we%20assist%20you%3F",
                    target: "_black",
                    className:
                      " outline-none relative inline-flex items-center justify-center leading-normal no-underline  py-2 pr-4 pl-3  text-slate-700 font-sans font-bold text-sm uppercase hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group lg:text-lg",
                    children: [
                      "Get In Touch",
                      e.jsxs("svg", {
                        className:
                          "icon icon-tabler icon-tabler-arrow-up-right",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          e.jsx("path", { d: "M17 7l-10 10" }),
                          e.jsx("path", { d: "M8 7l9 0l0 9" }),
                        ],
                      }),
                      e.jsx("span", {
                        className:
                          " outline-none absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "lg:w-8/12 w-full mx-auto",
          children: [
            c.map((r, o) =>
              e.jsxs(
                "div",
                {
                  onClick: () => l(o),
                  children: [
                    e.jsx("hr", {
                      className: "w-full lg:mt-10 md:mt-12 md:mb-8 my-8",
                    }),
                    e.jsxs("div", {
                      className: "w-full md:px-6 hover:cursor-pointer",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-center w-full",
                          children: [
                            e.jsx("div", {
                              children: e.jsxs("p", {
                                className:
                                  "flex justify-center items-center  font-medium text-md lg:text-lg leading-6 text-gray-800",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 font-semibold text-gray-800",
                                    children: ["Q", o + 1, "."],
                                  }),
                                  r.question,
                                ],
                              }),
                            }),
                            e.jsx("button", {
                              "aria-label": "toggler",
                              className:
                                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
                              onClick: () => l(o),
                              children: e.jsx(_, {
                                className: `h-6 w-6 text-slate-900 transform transition-transform duration-300 ${
                                  t === o ? "rotate-180" : ""
                                }`,
                                "aria-hidden": "true",
                              }),
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: `faq-answer ${
                            t === o ? "open" : ""
                          } mt-6 w-full`,
                          children: e.jsx("p", {
                            className:
                              "text-md lg:text-xl leading-6 text-gray-600 font-normal",
                            children: r.answer,
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                o
              )
            ),
            e.jsx("hr", { className: "w-full lg:mt-10 my-8" }),
          ],
        }),
      ],
    }),
  });
};
function Ft() {
  return (
    x.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(M, {}),
        e.jsx(P, { type: "list" }),
        e.jsx(Bt, {}),
        e.jsx(B, {}),
      ],
    })
  );
}
const $t = ({ isOpen: t, onClose: s, product: l }) =>
    !t || !l
      ? null
      : e.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center font-body overflow-y-auto",
          children: [
            e.jsx("div", {
              className:
                "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity",
              "aria-hidden": "true",
              onClick: s,
            }),
            e.jsxs("div", {
              className:
                "relative bg-white rounded-lg shadow-lg transform transition-all sm:max-w-2xl sm:w-full",
              children: [
                e.jsx("div", {
                  className: "px-6 py-5",
                  children: e.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: e.jsxs("div", {
                      className: "w-full text-center sm:text-left",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-2xl font-bold leading-6 text-gray-900 mb-4",
                          children: l.name,
                        }),
                        e.jsx("div", {
                          className: "mb-4 flex justify-center items-center",
                          children: e.jsx("img", {
                            src: l.imageSrc,
                            alt: l.imageAlt,
                            className:
                              "rounded-lg max-h-[500px] w-full object-contain",
                          }),
                        }),
                        e.jsx("div", {
                          className: "mb-4",
                          children: e.jsxs("p", {
                            className: "text-lg font-semibold text-gray-700",
                            children: [
                              "Price:",
                              " ",
                              e.jsxs("span", {
                                className: "text-indigo-600",
                                children: ["Rs ", l.price],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx("div", {
                  className: "px-6 py-3 bg-gray-50 flex justify-end",
                  children: e.jsx("button", {
                    onClick: s,
                    className:
                      "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors",
                    children: "Close",
                  }),
                }),
              ],
            }),
          ],
        }),
  Wt = "/images/RUB-50RED.jpg",
  Ot = "/images/RUB-50BLUE.jpg",
  qt = "/images/OD-4BLACK.jpg",
  Mt = "/images/OD-1BLACK.jpg",
  Ut = "/images/OD-1BROWN.jpg",
  Ht = [
    {
      name: "RUB-50 RED",
      price: "1799",
      imageSrc: Wt,
      imageAlt: "RUB-50 RED Shoe",
      ProductDetails:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      AnkleLength: "High Ankle (Prevents Ankle Twist)",
      Weight: "450 Grams (each)",
      Sole: "Anti-skid rubber gum sole",
      Properties: "Water-resistant",
    },
    {
      name: "RUB-50 BLUE",
      price: "1799",
      imageSrc: Ot,
      imageAlt: "RUB-50 BLUE",
      ProductDetails:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      AnkleLength: "High Ankle (Prevents Ankle Twist)",
      Weight: "450 Grams (each)",
      Sole: "Anti-skid rubber gum sole",
      Properties: "Water-resistant",
    },
    {
      name: "OD-4 BLACK",
      price: "1799",
      imageSrc: qt,
      imageAlt: "OD-4 BLACK",
      ProductDetails:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      AnkleLength: "High Ankle (Prevents Ankle Twist)",
      Weight: "450 Grams (each)",
      Sole: "Anti-skid rubber gum sole",
      Properties: "Water-resistant",
    },
    {
      name: "OD-1 BLACK",
      price: "1299",
      imageSrc: Mt,
      imageAlt: "OD-1 BLACK",
      ProductDetails:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      AnkleLength: "High Ankle (Prevents Ankle Twist)",
      Weight: "450 Grams (each)",
      Sole: "Anti-skid rubber gum sole",
      Properties: "Water-resistant",
    },
    {
      name: "OD-1 BROWN",
      price: "1299",
      imageSrc: Ut,
      imageAlt: "OD-1 BROWN",
      ProductDetails:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      AnkleLength: "High Ankle (Prevents Ankle Twist)",
      Weight: "450 Grams (each)",
      Sole: "Anti-skid rubber gum sole",
      Properties: "Water-resistant",
    },
  ],
  Rt = () => {
    const [t, s] = x.useState(!1),
      [l, c] = x.useState(null),
      r = (i) => {
        c(i), s(!0);
      },
      o = () => {
        c(null), s(!1);
      },
      a = (i) => {
        const m = `Hey Alpha Adventures, I'm interested in the ${i}. Can you provide more details?`,
          d = `https://wa.me/+919403449240?text=${encodeURIComponent(m)}`;
        window.open(d, "_blank");
      };
    return e.jsxs("div", {
      className: "bg-gray-100 font-body min-h-screen",
      children: [
        e.jsxs("div", {
          className: "container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
          children: [
            e.jsx("h2", {
              className: "text-3xl font-bold text-center text-gray-800 mb-8",
              children: "Explore Our Shoes Collection",
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8",
              children: Ht.map((i, m) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "group cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform",
                    children: [
                      e.jsx("div", {
                        className:
                          "aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200",
                        onClick: () => r(i),
                        children: e.jsx("img", {
                          src: i.imageSrc,
                          alt: i.imageAlt,
                          className:
                            "object-cover object-center group-hover:opacity-75 transition-opacity duration-300",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "mt-4 text-center",
                        children: [
                          e.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: i.name,
                          }),
                          e.jsxs("p", {
                            className: "mt-1 text-sm text-gray-700",
                            children: ["Rs ", i.price],
                          }),
                          e.jsx("p", {
                            className: "mt-2 text-sm text-gray-500",
                            children: i.ProductDetails,
                          }),
                          e.jsxs("ul", {
                            className: "mt-4 text-sm text-gray-600 space-y-1",
                            children: [
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children: "Ankle Length:",
                                  }),
                                  " ",
                                  i.AnkleLength,
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", { children: "Weight:" }),
                                  " ",
                                  i.Weight,
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", { children: "Sole:" }),
                                  " ",
                                  i.Sole,
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", { children: "Properties:" }),
                                  " ",
                                  i.Properties,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        className:
                          "mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300",
                        onClick: () => a(i.name),
                        children: "Order Now",
                      }),
                    ],
                  },
                  m
                )
              ),
            }),
          ],
        }),
        e.jsx($t, { isOpen: t, onClose: o, product: l }),
      ],
    });
  };
function _t() {
  return (
    x.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(M, {}),
        e.jsx(P, { type: "list" }),
        e.jsx(Rt, {}),
        e.jsx(B, {}),
      ],
    })
  );
}
const Gt = async ({ id: t }) => {
    try {
      return (
        await y.get(`${v}/trek/getTrekInfoDataForClientTrekMainPage/${t}`, {
          withCredentials: !0,
        })
      ).data.data;
    } catch (s) {
      throw (
        (console.error("Error fetching trek details:", s),
        new Error("Failed to fetch trek details."))
      );
    }
  },
  zt = async ({ id: t }) => {
    try {
      return (
        await y.get(`${v}/trek/getTrekDateInfoDataForClientTrekMainPage/${t}`, {
          withCredentials: !0,
        })
      ).data.data;
    } catch (s) {
      throw (
        (console.error("Error fetching Treks For Trek Type:", s),
        new Error("Failed to fetch Treks For Trek Type."))
      );
    }
  };
function Qt() {
  return e.jsx("div", {
    className: "bg-[#3a652d]  text-white p-4 flex justify-center",
    children: e.jsxs("div", {
      className:
        "max-w-[1400px] flex flex-col lg:flex-row items-start justify-around lg:gap-6",
      children: [
        e.jsx("div", {
          className: "mb-2 lg:mb-0",
          children: e.jsx("h2", {
            className: "text-xl lg:text-2xl font-bold",
            children: "Have questions? Speak to our expert Trek Advisors",
          }),
        }),
        e.jsxs("div", {
          children: [
            e.jsx("p", {
              className: "text-md lg:text-lg",
              children:
                "We have an expert team of Trek Advisors to help you choose the right trek.",
            }),
            e.jsx("p", {
              className: "text-md lg:text-lg hidden lg:block",
              children:
                'So if you have questions like, "Can I do this trek?" or "Who else is trekking?", please get in touch.',
            }),
            e.jsx("span", {
              children: e.jsx("a", {
                href: "",
                className:
                  "text-yellow-400 font-bold underline transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50",
                "aria-label": "Talk to our Trek Advisors",
                children: "Talk to our Trek Advisors",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Kt = "/images/climbing_7358248.png",
  Yt = "/images/children_547464.png",
  Jt = "/images/hourglass_10932534.png",
  Zt = "/images/mountain_2210008.png",
  Vt = ({
    dateDifference: t,
    suitableForAge: s,
    altitude: l,
    trekDifficulty: c,
    isLoadingDate: r,
    isLoadingTrek: o,
  }) => {
    const a = [
      {
        imgSrc: Kt,
        label: "TREK DIFFICULTY",
        value: c ? c.charAt(0).toUpperCase() + c.slice(1) : "N/A",
      },
      { imgSrc: Jt, label: "TREK DURATION", value: t ? `${t} Days` : "N/A" },
      {
        imgSrc: Zt,
        label: "HIGHEST ALTITUDE",
        value: l ? `${l} Meters` : "N/A",
      },
      { imgSrc: Yt, label: "AGE LIMIT", value: s || "N/A" },
    ];
    return e.jsx("div", {
      className: "flex justify-around py-4 bg-gray-50",
      children: e.jsx("div", {
        className:
          "max-w-[1450px] w-full flex flex-wrap items-center justify-around gap-4",
        children:
          r || o
            ? e.jsxs("div", {
                className: "flex justify-center items-center py-4",
                children: [e.jsx(j, {}), " "],
              })
            : a.map(({ imgSrc: i, label: m, value: n }, d) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "p-4 rounded-lg min-w-[250px] shadow-md bg-white flex items-center gap-4 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-101  hover:shadow-lg",
                    children: [
                      e.jsx("img", { src: i, alt: m, className: "h-12 w-12" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-bold text-sm text-gray-600 uppercase",
                            children: m,
                          }),
                          e.jsx("p", {
                            className: "text-lg font-semibold text-gray-900",
                            children: n,
                          }),
                        ],
                      }),
                    ],
                  },
                  d
                )
              ),
      }),
    });
  };
function K({
  trekName: t,
  trekTitle: s,
  trekType: l,
  trekDescription: c,
  trekLocation: r,
  trekTypeDescription: o,
  dateid: a,
  date: i,
  startDateWithTravel: m,
  startDateWithoutTravel: n,
  allEndDate: d,
  isLoadingDate: g,
  isLoadingTrek: u,
}) {
  const N = (h) =>
      new Date(h).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    k = b((h) => h.addDateId),
    [T, F] = x.useState(null),
    $ = (h, p) => {
      F(T === h ? null : h), k(p);
    },
    W = (i == null ? void 0 : i.length) > 0;
  (d == null ? void 0 : d.length) > 0;
  const D = (h, p) => {
    const S = p
        ? new Date(p).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "N/A",
      A = `Hey Alpha Adventures, I'm interested in the ${h} on ${S}. Can you provide more details?`,
      R = `https://wa.me/+919403449240?text=${encodeURIComponent(A)}`;
    window.open(R, "_blank");
  };
  return e.jsx("div", {
    className: "container mx-auto p-6 bg-white rounded-xl shadow-lg mb-8",
    children:
      g || u
        ? e.jsxs("div", {
            className: "flex justify-center py-6",
            children: [e.jsx(j, {}), " "],
          })
        : e.jsxs("div", {
            className: "flex flex-col lg:flex-row lg:items-start gap-8",
            children: [
              e.jsxs("div", {
                className: "lg:w-2/3",
                children: [
                  e.jsxs("h1", {
                    className: "text-4xl font-extrabold mb-4",
                    children: [
                      t,
                      e.jsxs("span", {
                        className: "text-3xl text-gray-600",
                        children: [": ", s],
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className:
                      "text-xl font-medium text-gray-700 flex items-center mb-4",
                    children: [
                      e.jsx(ke, { className: "mr-2 text-blue-600" }),
                      " ",
                      r,
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-lg text-gray-800 leading-relaxed mb-8",
                    children: c,
                  }),
                  e.jsxs("div", {
                    className: "bg-gray-100 p-6 rounded-lg shadow-md",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-lg font-semibold flex items-center mb-2",
                        children: [
                          e.jsx(Te, { className: "mr-2 text-blue-600" }),
                          "Trek Type: ",
                          l,
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-gray-700 text-lg",
                        children: o,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md border-4 border-yellow-500",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-2xl font-bold text-center text-gray-800 mb-4",
                    children: "Trek Dates with Prices",
                  }),
                  W
                    ? i.map((h, p) => {
                        var S, A;
                        return e.jsxs(
                          "div",
                          {
                            className: `mb-4  hover:cursor-pointer rounded-lg transition-transform duration-200 transform ${
                              T === p
                                ? "bg-yellow-100 scale-105 "
                                : "hover:bg-yellow-50 hover:scale-105"
                            }`,
                            onClick: () => $(p, a[p]),
                            children: [
                              e.jsxs("div", {
                                className: "p-4 text-center",
                                children: [
                                  e.jsxs("p", {
                                    className:
                                      "text-xl font-bold text-gray-800 mb-2",
                                    children: ["Batch ", p + 1],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-lg font-medium text-gray-700",
                                    children: [N(h), " to ", N(d[p])],
                                  }),
                                ],
                              }),
                              T === p &&
                                e.jsxs("div", {
                                  className: "p-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex justify-between mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-gray-700",
                                          children: "Price with Travel:",
                                        }),
                                        e.jsxs("span", {
                                          className: "text-green-700 font-bold",
                                          children: [
                                            "₹",
                                            " ",
                                            ((S = m[p]) == null
                                              ? void 0
                                              : S.toLocaleString()) || "N/A",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex justify-between mb-4",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-gray-700",
                                          children: "Price without Travel:",
                                        }),
                                        e.jsxs("span", {
                                          className: "text-green-700 font-bold",
                                          children: [
                                            "₹",
                                            " ",
                                            ((A = n[p]) == null
                                              ? void 0
                                              : A.toLocaleString()) || "N/A",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      className:
                                        "w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105",
                                      "aria-label": `Enquire for ${t}`,
                                      onClick: () => D(t, i[p]),
                                      children: ["Enquire For ", t],
                                    }),
                                  ],
                                }),
                            ],
                          },
                          p
                        );
                      })
                    : e.jsx("p", {
                        className: "text-center text-gray-600",
                        children: "No dates available",
                      }),
                ],
              }),
            ],
          }),
  });
}
K.propTypes = {
  trekName: f.string.isRequired,
  trekTitle: f.string.isRequired,
  trekType: f.string.isRequired,
  trekDescription: f.string.isRequired,
  trekLocation: f.string.isRequired,
  trekTypeDescription: f.string.isRequired,
  dateid: f.arrayOf(f.string).isRequired,
  date: f.arrayOf(f.string).isRequired,
  startDateWithTravel: f.arrayOf(f.number).isRequired,
  startDateWithoutTravel: f.arrayOf(f.number).isRequired,
  allEndDate: f.arrayOf(f.string).isRequired,
  isLoadingDate: f.bool.isRequired,
  isLoadingTrek: f.bool.isRequired,
};
function Xt({
  images: t,
  trekName: s,
  trekTitle: l,
  isLoadingTrek: c,
  isLoadingDate: r,
}) {
  const [o, a] = x.useState(0),
    i = () => {
      const u = o === 0 ? t.length - 1 : o - 1;
      a(u);
    },
    m = () => {
      const u = o === t.length - 1 ? 0 : o + 1;
      a(u);
    },
    n = (g) => {
      a(g);
    };
  if (c || r)
    return e.jsx("div", {
      className:
        "relative h-[380px] lg:h-[530px] w-full m-auto mb-10 flex items-center justify-center",
      children: e.jsx(j, {}),
    });
  const d = (g) => {
    const u = `Hey Alpha Adventures, I'm interested in the ${g}. Can you provide more details?`,
      k = `https://wa.me/919403449240?text=${encodeURIComponent(u)}`;
    window.open(k, "_blank");
  };
  return e.jsxs("div", {
    className: "relative h-[380px] lg:h-[530px] w-full m-auto mb-10 group",
    children: [
      e.jsx("div", {
        style: { backgroundImage: `url(${t[o]})` },
        className:
          "absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat duration-500 filter brightness-75",
        role: "img",
        "aria-label": `${s} slide ${o + 1}`,
      }),
      e.jsxs("div", {
        className:
          "relative z-10 flex flex-col justify-center items-center h-full gap-6 text-white px-4",
        children: [
          e.jsx("h1", {
            className: "text-4xl lg:text-6xl font-bold text-center",
            children: s,
          }),
          e.jsx("p", {
            className: "text-2xl lg:text-4xl font-semibold text-center",
            children: l,
          }),
          e.jsxs("button", {
            className:
              "px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl",
            "aria-label": `Enquire for ${s}`,
            onClick: () => {
              d(s);
            },
            children: ["Enquire For ", s],
          }),
        ],
      }),
      e.jsx("button", {
        className:
          "absolute top-[50%] left-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-gray-800 bg-opacity-50 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:bg-opacity-70 shadow-md hover:shadow-lg z-20",
        onClick: i,
        "aria-label": "Previous slide",
        children: e.jsx(Se, { size: 24 }),
      }),
      e.jsx("button", {
        className:
          "absolute top-[50%] right-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-gray-800 bg-opacity-50 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:bg-opacity-70 shadow-md hover:shadow-lg z-20",
        onClick: m,
        "aria-label": "Next slide",
        children: e.jsx(Ae, { size: 24 }),
      }),
      e.jsx("div", {
        className:
          "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20",
        children: t.map((g, u) =>
          e.jsx(
            "div",
            {
              onClick: () => n(u),
              className: `cursor-pointer ${
                u === o ? "text-blue-500" : "text-gray-300"
              }`,
              role: "button",
              "aria-label": `Go to slide ${u + 1}`,
              children: e.jsx(Ce, { size: 24 }),
            },
            u
          )
        ),
      }),
    ],
  });
}
function es({
  trekInfo: t,
  trekInclusions: s,
  trekExclusions: l,
  trekCancellationPolicy: c,
  trekHighlights: r,
  isLoadingDate: o,
  isLoadingTrek: a,
}) {
  return e.jsxs("div", {
    className:
      "container mx-auto max-w-[1450px] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl mb-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-6 md:gap-8 mb-6",
        children: [
          e.jsxs("div", {
            className: "flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg",
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4",
                children: [
                  e.jsx("span", {
                    role: "img",
                    "aria-label": "Trek Overview",
                    children: "🏞️",
                  }),
                  "Trek Overview",
                ],
              }),
              e.jsx("div", {
                className: "space-y-3 md:space-y-4",
                children:
                  o || a
                    ? e.jsx("div", {
                        className: "flex justify-center py-4",
                        children: e.jsx(j, {}),
                      })
                    : t.map((i, m) =>
                        e.jsxs(
                          "p",
                          {
                            className:
                              "text-gray-700 text-base md:text-lg font-medium leading-relaxed",
                            children: [
                              e.jsx("span", { children: "•" }),
                              " ",
                              i,
                            ],
                          },
                          m
                        )
                      ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg",
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4",
                children: [
                  e.jsx("span", {
                    role: "img",
                    "aria-label": "Trek Highlights",
                    children: "🌟",
                  }),
                  "Trek Highlights",
                ],
              }),
              e.jsx("ul", {
                className:
                  "list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4",
                children:
                  o || a
                    ? e.jsx("div", {
                        className: "flex justify-center py-4",
                        children: e.jsx(j, {}),
                      })
                    : r.map((i, m) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium",
                            children: [
                              e.jsx("span", { children: "•" }),
                              " ",
                              i,
                            ],
                          },
                          m
                        )
                      ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg",
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4",
                children: [
                  e.jsx("span", {
                    role: "img",
                    "aria-label": "Cancellation Policy",
                    children: "📢",
                  }),
                  "Cancellation Policy",
                ],
              }),
              e.jsx("ul", {
                className:
                  "list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4",
                children:
                  o || a
                    ? e.jsx("div", {
                        className: "flex justify-center py-4",
                        children: e.jsx(j, {}),
                      })
                    : c.map((i, m) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium",
                            children: [
                              e.jsx("span", { children: "•" }),
                              " ",
                              i,
                            ],
                          },
                          m
                        )
                      ),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
        children: [
          e.jsxs("div", {
            className: "p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg",
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4",
                children: [
                  e.jsx("span", {
                    role: "img",
                    "aria-label": "Exclusions",
                    children: "🚫",
                  }),
                  "What's Not Included",
                ],
              }),
              e.jsx("ul", {
                className:
                  "list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4",
                children:
                  o || a
                    ? e.jsx("div", {
                        className: "flex justify-center py-4",
                        children: e.jsx(j, {}),
                      })
                    : l.map((i, m) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium",
                            children: [
                              e.jsx("span", { children: "•" }),
                              " ",
                              i,
                            ],
                          },
                          m
                        )
                      ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg",
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4",
                children: [
                  e.jsx("span", {
                    role: "img",
                    "aria-label": "Inclusions",
                    children: "✅",
                  }),
                  "What's Included",
                ],
              }),
              e.jsx("ul", {
                className:
                  "list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4",
                children:
                  o || a
                    ? e.jsx("div", {
                        className: "flex justify-center py-4",
                        children: e.jsx(j, {}),
                      })
                    : s.map((i, m) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium",
                            children: [e.jsx("span", { children: "•" }), i],
                          },
                          m
                        )
                      ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ts({ scheduleTimeline: t }) {
  return e.jsx(De, {
    position: "alternate",
    children: t.map((s) =>
      e.jsxs(
        Le,
        {
          children: [
            e.jsxs(Ie, {
              children: [
                e.jsx(Ee, { color: "primary", sx: { alignItems: "center" } }),
                s._id !== t[t.length - 1]._id && e.jsx(Pe, {}),
              ],
            }),
            e.jsx(Be, {
              children: e.jsxs(Fe, {
                sx: {
                  py: 3,
                  borderRadius: 2,
                  display: "inline-block",
                  maxWidth: "300px",
                  "@media (max-width: 600px)": { p: 0 },
                  "@media (min-width: 600px)": { maxWidth: "none" },
                  alignItems: "center",
                },
                children: [
                  e.jsx(U, {
                    variant: "h6",
                    component: "p",
                    className: "text-sm",
                    children: e.jsx("span", {
                      className: " text-sm md:text-xl font-bold text-gray-800",
                      children: s.day,
                    }),
                  }),
                  e.jsx(U, {
                    variant: "body2",
                    className: "text-sm",
                    children: e.jsx("span", {
                      className: "text-sm md:text-lg font-medium text-gray-700",
                      children: s.time,
                    }),
                  }),
                  e.jsx(U, {
                    variant: "body1",
                    className: "text-sm",
                    children: e.jsxs("span", {
                      className: "text-sm md:text-lg",
                      children: [" ", s.work],
                    }),
                  }),
                ],
              }),
            }),
          ],
        },
        s._id
      )
    ),
  });
}
function ss({
  startDate: t,
  endDate: s,
  withTravelByDateId: l,
  withoutTravelByDateId: c,
  scheduleTimeline: r,
}) {
  return e.jsxs("div", {
    className:
      "container mx-auto max-w-[1450px] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl mb-8",
    children: [
      e.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
        children: [
          e.jsxs("div", {
            className:
              "flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md ",
            children: [
              e.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-gray-800 mb-6",
                children: "With Travel",
              }),
              e.jsxs("div", {
                className: "space-y-4 w-full",
                children: [
                  e.jsx("p", {
                    className: "text-gray-700 text-base md:text-lg font-medium",
                    children: l.description,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row items-start md:items-center justify-between",
                    children: [
                      e.jsxs("p", {
                        className:
                          "flex  gap-2 items-center text-lg md:text-xl font-bold text-gray-700",
                        children: [
                          e.jsx(O, { className: "text-blue-600" }),
                          "From: ",
                          l.from,
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700",
                        children: [
                          e.jsx(O, { className: "text-blue-600" }),
                          "To: ",
                          l.to,
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className:
                      "flex items-center text-lg md:text-xl font-bold text-gray-700",
                    children: [
                      "Price: ",
                      l.price,
                      e.jsx(G, { className: "ml-1" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md ",
            children: [
              e.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-gray-800 mb-6",
                children: "Without Travel",
              }),
              e.jsxs("div", {
                className: "space-y-4 w-full",
                children: [
                  e.jsx("p", {
                    className: "text-gray-700 text-base md:text-lg font-medium",
                    children: c.description,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row items-start md:items-center justify-between",
                    children: [
                      e.jsxs("p", {
                        className:
                          "flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700",
                        children: [
                          e.jsx(O, { className: "text-blue-600" }),
                          "From: ",
                          c.from,
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700",
                        children: [
                          e.jsx(O, { className: "text-blue-600" }),
                          "To: ",
                          c.to,
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className:
                      "flex items-center text-lg md:text-xl font-bold text-gray-700",
                    children: [
                      "Price: ",
                      c.price,
                      e.jsx(G, { className: "ml-1" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-lg",
        children: [
          e.jsx("h2", {
            className:
              "text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6",
            children: "Trek Timeline",
          }),
          e.jsx("div", { children: e.jsx(ts, { scheduleTimeline: r }) }),
        ],
      }),
    ],
  });
}
function as() {
  const { courses: t, trekDateId: s } = b((C) => ({
    courses: C.courses,
    trekDateId: C.trekDateId,
  }));
  x.useEffect(() => {
    window.scrollTo(0, 0);
  }, [t]);
  const {
      data: l = [],
      error: c,
      isLoading: r,
    } = w({
      queryKey: ["TrekData", t],
      queryFn: () => Gt({ id: t }),
      onError: (C) => console.error("Error fetching Trek Details:", C),
    }),
    {
      data: o = [],
      error: a,
      isLoading: i,
    } = w({
      queryKey: ["TrekDateData", s],
      queryFn: () => zt({ id: s }),
      onError: (C) => console.error("Error fetching Trek Date Details:", C),
    }),
    m = l[0] || {},
    {
      trekName: n,
      trekTitle: d,
      suitableForAge: g,
      altitude: u,
      trekLocation: N,
      trekHighlights: k,
      trekDescription: T,
      trekType: F = [],
      trekTypeDescription: $ = [],
      trekInfo: W,
      trekInclusions: D,
      trekExclusions: h,
      trekCancellationPolicy: p,
      trekDifficulty: S,
      images: A,
      withTravel: Y = [],
      withoutTravel: R = [],
      allStartDate: J = {},
      allEndDate: Z = [],
    } = m,
    {
      dateid: V = [],
      date: X = [],
      withTravel: ee = [],
      withoutTravel: te = [],
    } = J,
    {
      trekTimelineDetails: se = {},
      endDate: ae,
      startDate: re,
      priceDetails: le = {},
      dateDifference: ne = [],
    } = o[0] || {},
    { withTravel: ie = [], withoutTravel: oe = [] } = le,
    { scheduleTimeline: ce = [] } = se;
  return e.jsxs("div", {
    children: [
      e.jsx(Xt, {
        trekName: n,
        trekTitle: d,
        images: A,
        isLoadingDate: i,
        isLoadingTrek: r,
      }),
      e.jsx(Qt, {}),
      e.jsx(Vt, {
        suitableForAge: g,
        altitude: u,
        trekDifficulty: S,
        dateDifference: ne,
        isLoadingDate: i,
        isLoadingTrek: r,
      }),
      e.jsx(K, {
        trekName: n,
        trekTitle: d,
        trekLocation: N,
        trekDescription: T,
        trekType: F,
        trekTypeDescription: $,
        dateid: V,
        date: X,
        startDateWithTravel: ee,
        startDateWithoutTravel: te,
        allEndDate: Z,
        isLoadingDate: i,
        isLoadingTrek: r,
      }),
      e.jsx(es, {
        trekInfo: W,
        trekInclusions: D,
        trekExclusions: h,
        trekCancellationPolicy: p,
        trekHighlights: k,
        isLoadingDate: i,
        isLoadingTrek: r,
      }),
      e.jsx(ss, {
        startDate: re,
        endDate: ae,
        withTravelByDateId: ie,
        withoutTravelByDateId: oe,
        scheduleTimeline: ce,
      }),
    ],
  });
}
function rs() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(P, { type: "list" }),
      e.jsx(M, {}),
      e.jsx(as, {}),
      e.jsx(B, {}),
    ],
  });
}
function ls() {
  const t = $e(
    We(
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(I, { path: "/", element: e.jsx(St, {}) }),
          e.jsx(I, { path: "/about", element: e.jsx(Pt, {}) }),
          e.jsx(I, { path: "/shop", element: e.jsx(_t, {}) }),
          e.jsx(I, { path: "/faqs", element: e.jsx(Ft, {}) }),
          e.jsx(I, { path: "/trekdetails", element: e.jsx(rs, {}) }),
        ],
      })
    )
  );
  return e.jsx(e.Fragment, { children: e.jsx(Oe, { router: t }) });
}
const ns = new qe();
Me.createRoot(document.getElementById("root")).render(
  e.jsx(Ue.StrictMode, {
    children: e.jsxs(He, { client: ns, children: [" ", e.jsx(ls, {})] }),
  })
);
