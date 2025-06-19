(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/Scroll.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HorizontalScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function HorizontalScroll({ gameId, apiKey }) {
    _s();
    const [allTags, setAllTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAutoScrolling, setIsAutoScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalScroll.useEffect": ()=>{
            const fetchTags = {
                "HorizontalScroll.useEffect.fetchTags": async ()=>{
                    try {
                        const res = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
                        const data = await res.json();
                        const tags = data.tags || [];
                        setAllTags(tags);
                        setVisible(tags.slice(0, 10));
                    } catch (error) {
                        console.log('Failed to fetch tags:', error);
                        const fallbackTags = [
                            {
                                id: 1,
                                name: 'Action'
                            },
                            {
                                id: 2,
                                name: 'Adventure'
                            },
                            {
                                id: 3,
                                name: 'RPG'
                            },
                            {
                                id: 4,
                                name: 'Strategy'
                            },
                            {
                                id: 5,
                                name: 'Simulation'
                            },
                            {
                                id: 6,
                                name: 'Puzzle'
                            },
                            {
                                id: 7,
                                name: 'Racing'
                            },
                            {
                                id: 8,
                                name: 'Sports'
                            }
                        ];
                        setAllTags(fallbackTags);
                        setVisible(fallbackTags);
                    }
                }
            }["HorizontalScroll.useEffect.fetchTags"];
            fetchTags();
        }
    }["HorizontalScroll.useEffect"], [
        gameId,
        apiKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalScroll.useEffect": ()=>{
            const container = scrollContainerRef.current;
            if (!container || !isAutoScrolling || visible.length === 0) return;
            let startTime = null;
            const scrollSpeed = 30;
            const animate = {
                "HorizontalScroll.useEffect.animate": (currentTime)=>{
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    if (elapsed > 16) {
                        container.scrollLeft += scrollSpeed / 60;
                        const maxScroll = container.scrollWidth / 2;
                        if (container.scrollLeft >= maxScroll) {
                            container.scrollLeft = 0;
                        }
                        startTime = currentTime;
                    }
                    if (isAutoScrolling) {
                        animationRef.current = requestAnimationFrame(animate);
                    }
                }
            }["HorizontalScroll.useEffect.animate"];
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "HorizontalScroll.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["HorizontalScroll.useEffect"];
        }
    }["HorizontalScroll.useEffect"], [
        isAutoScrolling,
        visible.length
    ]);
    // Load more tags when needed
    const loadMoreTags = ()=>{
        if (visible.length < allTags.length) {
            const nextBatch = allTags.slice(visible.length, visible.length + 4);
            setVisible((prev)=>[
                    ...prev,
                    ...nextBatch
                ]);
        }
    };
    // Check if we need more tags based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalScroll.useEffect": ()=>{
            const container = scrollContainerRef.current;
            if (!container) return;
            const checkNeedMoreTags = {
                "HorizontalScroll.useEffect.checkNeedMoreTags": ()=>{
                    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth) * 100;
                    if (scrollPercentage > 70 && visible.length < allTags.length) {
                        loadMoreTags();
                    }
                }
            }["HorizontalScroll.useEffect.checkNeedMoreTags"];
            const interval = setInterval(checkNeedMoreTags, 1000);
            return ({
                "HorizontalScroll.useEffect": ()=>clearInterval(interval)
            })["HorizontalScroll.useEffect"];
        }
    }["HorizontalScroll.useEffect"], [
        visible.length,
        allTags.length
    ]);
    const handleMouseEnter = ()=>{
        setIsAutoScrolling(false);
    };
    const handleMouseLeave = ()=>{
        setIsAutoScrolling(true);
    };
    const toggleAutoScroll = ()=>{
        setIsAutoScrolling(!isAutoScrolling);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-2 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleAutoScroll,
                    className: `px-3 py-1 text-xs rounded ${isAutoScrolling ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'} transition`,
                    children: isAutoScrolling ? 'Pause' : 'Play'
                }, void 0, false, {
                    fileName: "[project]/app/components/Scroll.jsx",
                    lineNumber: 119,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Scroll.jsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex overflow-x-auto space-x-2 scrollbar-hide px-4 py-2",
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                style: {
                    scrollBehavior: 'auto',
                    WebkitOverflowScrolling: 'touch'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 animate-none",
                    children: [
                        visible.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition whitespace-nowrap flex-shrink-0 transform hover:scale-105",
                                onClick: ()=>console.log('Clicked:', tag.name),
                                children: tag.name
                            }, `first-${tag.id || idx}`, false, {
                                fileName: "[project]/app/components/Scroll.jsx",
                                lineNumber: 144,
                                columnNumber: 17
                            }, this)),
                        visible.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition whitespace-nowrap flex-shrink-0 transform hover:scale-105",
                                onClick: ()=>console.log('Clicked:', tag.name),
                                children: tag.name
                            }, `second-${tag.id || idx}`, false, {
                                fileName: "[project]/app/components/Scroll.jsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Scroll.jsx",
                    lineNumber: 142,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Scroll.jsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Scroll.jsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
_s(HorizontalScroll, "7jzhG8vvce/OpsNvakK1pJMNYxY=");
_c = HorizontalScroll;
var _c;
__turbopack_context__.k.register(_c, "HorizontalScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/game/[id]/ScreenshotsSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
'use client';
;
;
;
;
;
;
function ScreenshotSlider({ screenshots }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                clickable: true
            },
            navigation: true,
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
            ],
            className: "mySwiper",
            children: screenshots.map((screenshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-full h-96 object-cover",
                        src: screenshot.image,
                        alt: `Screenshot ${screenshot.id}`
                    }, void 0, false, {
                        fileName: "[project]/app/game/[id]/ScreenshotsSlider.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, screenshot.id, false, {
                    fileName: "[project]/app/game/[id]/ScreenshotsSlider.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/game/[id]/ScreenshotsSlider.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/game/[id]/ScreenshotsSlider.tsx",
        lineNumber: 19,
        columnNumber: 1
    }, this);
}
_c = ScreenshotSlider;
const __TURBOPACK__default__export__ = ScreenshotSlider;
var _c;
__turbopack_context__.k.register(_c, "ScreenshotSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_2f8aef3d._.js.map