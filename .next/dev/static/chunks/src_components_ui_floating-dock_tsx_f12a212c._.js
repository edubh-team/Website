(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/floating-dock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingDock",
    ()=>FloatingDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as PenSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const navItems = [
    {
        href: "/",
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        href: "/courses",
        label: "Courses",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        href: "/apply",
        label: "Apply",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__["PenSquare"]
    },
    {
        href: "/contact",
        label: "Contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    }
];
function FloatingDock() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "906ff7f9a7b997dd954ec48d33da5509fe8ab4c1f52eee96c298bfd36f72feb4") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "906ff7f9a7b997dd954ec48d33da5509fe8ab4c1f52eee96c298bfd36f72feb4";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [footerVisible, setFooterVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "FloatingDock[useEffect()]": ()=>{
                const footer = document.querySelector("footer");
                if (!footer) {
                    return;
                }
                const observer = new IntersectionObserver((entries)=>{
                    for (const entry of entries){
                        if (entry.target === footer) {
                            setFooterVisible(entry.isIntersecting);
                        }
                    }
                }, {
                    root: null,
                    threshold: 0.1
                });
                observer.observe(footer);
                return ()=>observer.disconnect();
            }
        })["FloatingDock[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: 80,
            opacity: 0,
            scale: 0.98
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = footerVisible ? 40 : 0;
    const t4 = footerVisible ? 0 : 1;
    const t5 = footerVisible ? 0.96 : 1;
    let t6;
    if ($[4] !== t3 || $[5] !== t4 || $[6] !== t5) {
        t6 = {
            y: t3,
            opacity: t4,
            scale: t5
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            type: "spring",
            stiffness: 260,
            damping: 28
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = footerVisible ? "none" : "auto";
    let t9;
    if ($[9] !== t8) {
        t9 = {
            pointerEvents: t8
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== pathname) {
        t10 = navItems.map({
            "FloatingDock[navItems.map()]": (item)=>{
                const Icon = item.icon;
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: "relative inline-flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            y: -4
                        },
                        whileTap: {
                            scale: 0.92
                        },
                        className: `flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${active ? "bg-blue-600 text-white" : "text-[#1D1D1F] hover:bg-slate-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/floating-dock.tsx",
                                lineNumber: 129,
                                columnNumber: 176
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/floating-dock.tsx",
                                lineNumber: 129,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/floating-dock.tsx",
                        lineNumber: 125,
                        columnNumber: 88
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/src/components/ui/floating-dock.tsx",
                    lineNumber: 125,
                    columnNumber: 16
                }, this);
            }
        }["FloatingDock[navItems.map()]"]);
        $[11] = pathname;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t10 || $[14] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto dock-blur flex items-center gap-2 rounded-full px-3 py-2",
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t9;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: t2,
            animate: t6,
            transition: t7,
            className: "pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center md:flex",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t6;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/main.png",
                    alt: "EduBh",
                    width: 28,
                    height: 28,
                    className: "h-7 w-7 rounded-2xl object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-dock.tsx",
                    lineNumber: 157,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-semibold tracking-tight text-[#1D1D1F]",
                    children: "EduBh"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-dock.tsx",
                    lineNumber: 157,
                    columnNumber: 169
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "FloatingDock[<button>.onClick]": ()=>setOpen(_FloatingDockButtonOnClickSetOpen)
        })["FloatingDock[<button>.onClick]"];
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Toggle navigation"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    const t16 = `block h-0.5 w-4 rounded-full bg-[#1D1D1F] transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`;
    let t17;
    if ($[22] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t16
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[22] = t16;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    const t18 = `block h-0.5 w-3 rounded-full bg-[#1D1D1F] transition-opacity ${open ? "opacity-0" : "opacity-100"}`;
    let t19;
    if ($[24] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t18
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[24] = t18;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    const t20 = `block h-0.5 w-4 rounded-full bg-[#1D1D1F] transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`;
    let t21;
    if ($[26] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t20
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[26] = t20;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] !== t17 || $[29] !== t19 || $[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-white/90 px-4 py-4 backdrop-blur-md md:hidden",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: t14,
                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#1D1D1F] backdrop-blur-xl",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                t17,
                                t19,
                                t21
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/floating-dock.tsx",
                            lineNumber: 207,
                            columnNumber: 305
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/floating-dock.tsx",
                    lineNumber: 207,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t19;
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== open || $[33] !== pathname) {
        t23 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-30 bg-black/10 backdrop-blur-xl md:hidden",
            onClick: {
                "FloatingDock[<motion.div>.onClick]": ()=>setOpen(false)
            }["FloatingDock[<motion.div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: -40
                },
                animate: {
                    y: 0
                },
                className: "mx-4 mt-20 rounded-3xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                onClick: _FloatingDockMotionDivOnClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-2",
                    children: navItems.map({
                        "FloatingDock[navItems.map()]": (item_0)=>{
                            const Icon_0 = item_0.icon;
                            const active_0 = item_0.href === "/" ? pathname === "/" : pathname.startsWith(item_0.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item_0.href,
                                onClick: {
                                    "FloatingDock[navItems.map() > <Link>.onClick]": ()=>setOpen(false)
                                }["FloatingDock[navItems.map() > <Link>.onClick]"],
                                className: `flex items-center gap-3 rounded-2xl px-3 py-2 text-sm ${active_0 ? "bg-blue-600 text-white" : "text-[#1D1D1F] hover:bg-slate-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/floating-dock.tsx",
                                        lineNumber: 235,
                                        columnNumber: 212
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item_0.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/floating-dock.tsx",
                                        lineNumber: 235,
                                        columnNumber: 242
                                    }, this)
                                ]
                            }, item_0.href, true, {
                                fileName: "[project]/src/components/ui/floating-dock.tsx",
                                lineNumber: 233,
                                columnNumber: 22
                            }, this);
                        }
                    }["FloatingDock[navItems.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-dock.tsx",
                    lineNumber: 229,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/floating-dock.tsx",
                lineNumber: 225,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-dock.tsx",
            lineNumber: 217,
            columnNumber: 19
        }, this);
        $[32] = open;
        $[33] = pathname;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] !== t12 || $[36] !== t22 || $[37] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t12,
                t22,
                t23
            ]
        }, void 0, true);
        $[35] = t12;
        $[36] = t22;
        $[37] = t23;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    return t24;
}
_s(FloatingDock, "M+nTO3dQXvy6VX4XF2Uj7VawwMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = FloatingDock;
function _FloatingDockMotionDivOnClick(e) {
    return e.stopPropagation();
}
function _FloatingDockButtonOnClickSetOpen(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "FloatingDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_floating-dock_tsx_f12a212c._.js.map