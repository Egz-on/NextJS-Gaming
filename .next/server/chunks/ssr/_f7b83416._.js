module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/components/Animation.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
const TrueFocus3D = ({ sentence = "CYBER FOCUS PROTOCOL", manualMode = false, blurAmount = 8, borderColor = "#00ff41", glowColor = "rgba(0, 255, 65, 0.8)", animationDuration = 0.8, pauseBetweenAnimations = 1.5, theme = "cyberpunk" // cyberpunk, neon, matrix, hologram
 })=>{
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastActiveIndex, setLastActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [focusRect, setFocusRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const particleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Theme configurations
    const themes = {
        cyberpunk: {
            bg: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)",
            textColor: "#00ff41",
            accentColor: "#ff0080",
            shadowColor: "0 0 30px rgba(0, 255, 65, 0.5)",
            borderStyle: "solid"
        },
        neon: {
            bg: "linear-gradient(135deg, #000428 0%, #004e92 100%)",
            textColor: "#ff6b6b",
            accentColor: "#4ecdc4",
            shadowColor: "0 0 30px rgba(255, 107, 107, 0.6)",
            borderStyle: "dashed"
        },
        matrix: {
            bg: "linear-gradient(135deg, #000000 0%, #0d1b0d 100%)",
            textColor: "#00ff00",
            accentColor: "#ffffff",
            shadowColor: "0 0 30px rgba(0, 255, 0, 0.7)",
            borderStyle: "dotted"
        },
        hologram: {
            bg: "linear-gradient(135deg, #667db6 0%, #0082c8 50%, #0082c8 100%)",
            textColor: "#ffffff",
            accentColor: "#00d4ff",
            shadowColor: "0 0 30px rgba(0, 212, 255, 0.8)",
            borderStyle: "double"
        }
    };
    const currentTheme = themes[theme] || themes.cyberpunk;
    // Generate particles for active word
    const generateParticles = (rect)=>{
        const newParticles = [];
        for(let i = 0; i < 12; i++){
            newParticles.push({
                id: particleId.current++,
                x: rect.x + Math.random() * rect.width,
                y: rect.y + Math.random() * rect.height,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1,
                decay: 0.02 + Math.random() * 0.02
            });
        }
        setParticles((prev)=>[
                ...prev.slice(-20),
                ...newParticles
            ]);
    };
    // Particle animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animateParticles = ()=>{
            setParticles((prev)=>prev.map((particle)=>({
                        ...particle,
                        x: particle.x + particle.vx,
                        y: particle.y + particle.vy,
                        life: particle.life - particle.decay
                    })).filter((particle)=>particle.life > 0));
        };
        const interval = setInterval(animateParticles, 50);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!manualMode) {
            const interval = setInterval(()=>{
                setCurrentIndex((prev)=>(prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        manualMode,
        animationDuration,
        pauseBetweenAnimations,
        words.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentIndex === null || currentIndex === -1) return;
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;
        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
        const newRect = {
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height
        };
        setFocusRect(newRect);
        generateParticles(newRect);
    }, [
        currentIndex,
        words.length
    ]);
    const handleMouseEnter = (index)=>{
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
        setIsHovered(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: currentTheme.bg,
            fontFamily: "'Orbitron', 'Courier New', monospace"
        },
        className: "jsx-a2e9cde9a6a0897b" + " " + "min-h-screen flex items-center justify-center p-8 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a2e9cde9a6a0897b" + " " + "absolute inset-0 opacity-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundImage: `
              linear-gradient(${currentTheme.textColor} 1px, transparent 1px),
              linear-gradient(90deg, ${currentTheme.textColor} 1px, transparent 1px)
            `,
                        backgroundSize: '30px 30px',
                        animation: 'gridMove 20s linear infinite'
                    },
                    className: "jsx-a2e9cde9a6a0897b" + " " + "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/app/components/Animation.jsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a2e9cde9a6a0897b" + " " + "absolute inset-0 pointer-events-none",
                children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: particle.x,
                            top: particle.y,
                            backgroundColor: currentTheme.textColor,
                            opacity: particle.life,
                            boxShadow: `0 0 4px ${currentTheme.textColor}`,
                            transform: `scale(${particle.life})`
                        },
                        className: "jsx-a2e9cde9a6a0897b" + " " + "absolute w-1 h-1 rounded-full"
                    }, particle.id, false, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                },
                className: "jsx-a2e9cde9a6a0897b" + " " + "relative flex gap-8 justify-center items-center flex-wrap max-w-6xl mx-auto",
                children: [
                    words.map((word, index)=>{
                        const isActive = index === currentIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].span, {
                            ref: (el)=>wordRefs.current[index] = el,
                            className: "relative font-bold text-4xl md:text-6xl cursor-pointer select-none",
                            style: {
                                color: isActive ? currentTheme.textColor : '#666',
                                filter: manualMode ? isActive ? `blur(0px) brightness(1.2)` : `blur(${blurAmount}px) brightness(0.5)` : isActive ? `blur(0px) brightness(1.2)` : `blur(${blurAmount}px) brightness(0.5)`,
                                textShadow: isActive ? currentTheme.shadowColor : 'none',
                                transition: `all ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`,
                                transform: isActive ? 'translateZ(20px) scale(1.1)' : 'translateZ(0) scale(1)',
                                WebkitTextStroke: isActive ? `1px ${currentTheme.accentColor}` : 'none'
                            },
                            animate: {
                                rotateX: isActive ? [
                                    0,
                                    5,
                                    0
                                ] : 0,
                                rotateY: isActive ? [
                                    0,
                                    -2,
                                    2,
                                    0
                                ] : 0
                            },
                            transition: {
                                duration: animationDuration,
                                repeat: isActive ? Infinity : 0,
                                repeatType: "reverse"
                            },
                            onMouseEnter: ()=>handleMouseEnter(index),
                            onMouseLeave: handleMouseLeave,
                            whileHover: {
                                scale: 1.05,
                                rotateZ: Math.random() * 4 - 2
                            },
                            children: [
                                word,
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute inset-0 pointer-events-none",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: [
                                                    0,
                                                    1,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: `linear-gradient(90deg, transparent, ${currentTheme.textColor}, transparent)`,
                                                    animation: 'scanLine 2s ease-in-out infinite'
                                                },
                                                className: "jsx-a2e9cde9a6a0897b" + " " + "absolute w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Animation.jsx",
                                                lineNumber: 233,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute inset-0 pointer-events-none text-red-500 opacity-30",
                                            animate: {
                                                x: [
                                                    0,
                                                    2,
                                                    -2,
                                                    0
                                                ],
                                                opacity: [
                                                    0,
                                                    0.3,
                                                    0,
                                                    0.2,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.2,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            },
                                            children: word
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Animation.jsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: currentIndex >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute pointer-events-none",
                            initial: {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                x: focusRect.x - 20,
                                y: focusRect.y - 20,
                                width: focusRect.width + 40,
                                height: focusRect.height + 40,
                                opacity: 1,
                                scale: 1,
                                rotate: [
                                    0,
                                    1,
                                    -1,
                                    0
                                ]
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.8
                            },
                            transition: {
                                duration: animationDuration,
                                rotate: {
                                    duration: 4,
                                    repeat: Infinity
                                }
                            },
                            style: {
                                background: `linear-gradient(45deg, transparent 30%, ${glowColor} 50%, transparent 70%)`,
                                borderRadius: '8px',
                                filter: 'blur(1px)'
                            },
                            children: [
                                [
                                    {
                                        pos: 'top-left',
                                        style: {
                                            top: '-12px',
                                            left: '-12px',
                                            borderTop: `4px ${currentTheme.borderStyle} ${borderColor}`,
                                            borderLeft: `4px ${currentTheme.borderStyle} ${borderColor}`
                                        }
                                    },
                                    {
                                        pos: 'top-right',
                                        style: {
                                            top: '-12px',
                                            right: '-12px',
                                            borderTop: `4px ${currentTheme.borderStyle} ${borderColor}`,
                                            borderRight: `4px ${currentTheme.borderStyle} ${borderColor}`
                                        }
                                    },
                                    {
                                        pos: 'bottom-left',
                                        style: {
                                            bottom: '-12px',
                                            left: '-12px',
                                            borderBottom: `4px ${currentTheme.borderStyle} ${borderColor}`,
                                            borderLeft: `4px ${currentTheme.borderStyle} ${borderColor}`
                                        }
                                    },
                                    {
                                        pos: 'bottom-right',
                                        style: {
                                            bottom: '-12px',
                                            right: '-12px',
                                            borderBottom: `4px ${currentTheme.borderStyle} ${borderColor}`,
                                            borderRight: `4px ${currentTheme.borderStyle} ${borderColor}`
                                        }
                                    }
                                ].map((corner, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute w-6 h-6 rounded-sm",
                                        style: {
                                            ...corner.style,
                                            filter: `drop-shadow(0 0 8px ${borderColor}) drop-shadow(0 0 16px ${borderColor})`,
                                            animation: `pulse${i} 2s ease-in-out infinite`
                                        },
                                        animate: {
                                            scale: [
                                                1,
                                                1.1,
                                                1
                                            ],
                                            opacity: [
                                                0.8,
                                                1,
                                                0.8
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }, corner.pos, false, {
                                        fileName: "[project]/app/components/Animation.jsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 rounded-lg border-2 opacity-60",
                                    style: {
                                        borderColor: currentTheme.accentColor
                                    },
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ],
                                        opacity: [
                                            0.6,
                                            0.2,
                                            0.6
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 rounded-lg border border-dashed opacity-40",
                                    style: {
                                        borderColor: borderColor
                                    },
                                    animate: {
                                        scale: [
                                            1,
                                            1.3,
                                            1
                                        ],
                                        opacity: [
                                            0.4,
                                            0.1,
                                            0.4
                                        ],
                                        rotate: [
                                            0,
                                            180,
                                            360
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Animation.jsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Animation.jsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: currentTheme.textColor,
                    fontFamily: 'monospace'
                },
                className: "jsx-a2e9cde9a6a0897b" + " " + "absolute top-8 left-8 text-sm opacity-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2e9cde9a6a0897b",
                        children: [
                            "FOCUS: ",
                            currentIndex + 1,
                            "/",
                            words.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2e9cde9a6a0897b",
                        children: [
                            "MODE: ",
                            manualMode ? 'MANUAL' : 'AUTO'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2e9cde9a6a0897b",
                        children: [
                            "THEME: ",
                            theme.toUpperCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a2e9cde9a6a0897b",
                        children: [
                            "STATUS: ",
                            isHovered ? 'ACTIVE' : 'SCANNING'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Animation.jsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Animation.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(void 0, {
                id: "a2e9cde9a6a0897b",
                children: '@import "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap";@keyframes gridMove{0%{transform:translate(0)}to{transform:translate(30px,30px)}}@keyframes scanLine{0%{opacity:0;top:0%}50%{opacity:1}to{opacity:0;top:100%}}@keyframes pulse0{0%,to{transform:scale(1)rotate(0)}50%{transform:scale(1.1)rotate(90deg)}}@keyframes pulse1{0%,to{transform:scale(1)rotate(0)}50%{transform:scale(1.1)rotate(-90deg)}}@keyframes pulse2{0%,to{transform:scale(1)rotate(0)}50%{transform:scale(1.1)rotate(180deg)}}@keyframes pulse3{0%,to{transform:scale(1)rotate(0)}50%{transform:scale(1.1)rotate(-180deg)}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Animation.jsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TrueFocus3D;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Animation$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Animation.jsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Animation$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_f7b83416._.js.map