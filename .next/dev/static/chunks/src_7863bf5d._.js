(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Card.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Card-module__b6YjYG__card",
  "elevated": "Card-module__b6YjYG__elevated",
  "filled": "Card-module__b6YjYG__filled",
  "outlined": "Card-module__b6YjYG__outlined",
});
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const Card = ({ variant = 'elevated', children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant]} ${className}`,
        whileHover: {
            y: -5,
            transition: {
                duration: 0.2
            }
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/opportunities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "opportunities",
    ()=>opportunities
]);
const opportunities = [
    {
        id: '1',
        title: 'AI-Driven Traffic Management System',
        type: 'Project',
        organization: 'Dr. Sarah Smith (CS Dept)',
        description: 'Developing a reinforcement learning model to optimize traffic signal timings in real-time using camera feeds.',
        skills: [
            'Python',
            'PyTorch',
            'Computer Vision'
        ],
        postedDate: '2025-11-20',
        deadline: '2025-12-15'
    },
    {
        id: '2',
        title: 'Frontend Developer Intern',
        type: 'Internship',
        organization: 'TechFlow Solutions',
        description: 'Work on our core product dashboard using React and Next.js. Experience with modern UI libraries is a plus.',
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'CSS'
        ],
        postedDate: '2025-11-25',
        deadline: '2025-12-10'
    },
    {
        id: '3',
        title: 'Blockchain for Supply Chain',
        type: 'Project',
        organization: 'Prof. Alan Turing (IT Dept)',
        description: 'Research and implementation of a decentralized ledger for tracking pharmaceutical supply chains.',
        skills: [
            'Solidity',
            'Ethereum',
            'Web3.js'
        ],
        postedDate: '2025-11-18',
        deadline: '2025-12-20'
    },
    {
        id: '4',
        title: 'Data Science Intern',
        type: 'Internship',
        organization: 'DataMinds Corp',
        description: 'Analyze large datasets to identify market trends. Proficiency in SQL and Pandas required.',
        skills: [
            'Python',
            'SQL',
            'Pandas',
            'Tableau'
        ],
        postedDate: '2025-11-22',
        deadline: '2025-12-05'
    },
    {
        id: '5',
        title: 'Smart Home Automation IoT',
        type: 'Project',
        organization: 'Dr. John Doe (EE Dept)',
        description: 'Building a prototype for a secure, low-power IoT network for smart home devices.',
        skills: [
            'C++',
            'IoT',
            'Embedded Systems',
            'Network Security'
        ],
        postedDate: '2025-11-26',
        deadline: '2025-12-30'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/opportunities/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpportunitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$opportunities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/opportunities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OpportunitiesPage() {
    _s();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedSkills, setSelectedSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Extract all unique skills from opportunities
    const allSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OpportunitiesPage.useMemo[allSkills]": ()=>{
            const skillsSet = new Set();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$opportunities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opportunities"].forEach({
                "OpportunitiesPage.useMemo[allSkills]": (opp)=>{
                    opp.skills.forEach({
                        "OpportunitiesPage.useMemo[allSkills]": (skill)=>skillsSet.add(skill)
                    }["OpportunitiesPage.useMemo[allSkills]"]);
                }
            }["OpportunitiesPage.useMemo[allSkills]"]);
            return Array.from(skillsSet).sort();
        }
    }["OpportunitiesPage.useMemo[allSkills]"], []);
    // Filter opportunities based on search and filters
    const filteredOpportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OpportunitiesPage.useMemo[filteredOpportunities]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$opportunities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opportunities"].filter({
                "OpportunitiesPage.useMemo[filteredOpportunities]": (opp)=>{
                    // Filter by search query
                    const matchesSearch = searchQuery === "" || opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) || opp.description.toLowerCase().includes(searchQuery.toLowerCase());
                    // Filter by type
                    const matchesType = selectedType === "All" || opp.type === selectedType;
                    // Filter by skills
                    const matchesSkills = selectedSkills.length === 0 || selectedSkills.some({
                        "OpportunitiesPage.useMemo[filteredOpportunities]": (skill)=>opp.skills.includes(skill)
                    }["OpportunitiesPage.useMemo[filteredOpportunities]"]);
                    return matchesSearch && matchesType && matchesSkills;
                }
            }["OpportunitiesPage.useMemo[filteredOpportunities]"]);
        }
    }["OpportunitiesPage.useMemo[filteredOpportunities]"], [
        searchQuery,
        selectedType,
        selectedSkills
    ]);
    const toggleSkill = (skill)=>{
        setSelectedSkills((prev)=>prev.includes(skill) ? prev.filter((s)=>s !== skill) : [
                ...prev,
                skill
            ]);
    };
    const clearFilters = ()=>{
        setSearchQuery("");
        setSelectedType("All");
        setSelectedSkills([]);
    };
    const hasActiveFilters = searchQuery !== "" || selectedType !== "All" || selectedSkills.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: "2rem 24px",
            maxWidth: "1200px",
            margin: "0 auto",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    marginBottom: "3rem",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "2.5rem",
                            marginBottom: "1rem",
                            color: "var(--md-sys-color-primary)"
                        },
                        children: "Explore Opportunities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--md-sys-color-on-surface-variant)",
                            fontSize: "1.1rem"
                        },
                        children: "Find the perfect project or internship to kickstart your career."
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/opportunities/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "glass glow-on-hover",
                style: {
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    borderRadius: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1.5rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "absolute",
                                        left: "1rem",
                                        color: "var(--md-sys-color-on-surface-variant)",
                                        fontSize: "1.25rem"
                                    },
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search opportunities by title, organization, or description...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    style: {
                                        width: "100%",
                                        padding: "0.875rem 1rem 0.875rem 3rem",
                                        fontSize: "1rem",
                                        borderRadius: "12px",
                                        border: "1px solid var(--input-border)",
                                        background: "var(--input-background)",
                                        color: "var(--input-color)",
                                        outline: "none",
                                        transition: "all 0.3s var(--motion-easing-standard)"
                                    },
                                    onFocus: (e)=>{
                                        e.target.style.borderColor = "var(--md-sys-color-primary)";
                                        e.target.style.boxShadow = "0 0 0 2px var(--liquid-hover-shadow)";
                                    },
                                    onBlur: (e)=>{
                                        e.target.style.borderColor = "var(--input-border)";
                                        e.target.style.boxShadow = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSearchQuery(""),
                                    style: {
                                        position: "absolute",
                                        right: "1rem",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "1.25rem",
                                        color: "var(--md-sys-color-on-surface-variant)",
                                        padding: "0.25rem"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/opportunities/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    marginBottom: "0.75rem",
                                    color: "var(--md-sys-color-on-surface-variant)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px"
                                },
                                children: "Type"
                            }, void 0, false, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "0.75rem",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    "All",
                                    "Project",
                                    "Internship"
                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>setSelectedType(type),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        style: {
                                            padding: "0.5rem 1.25rem",
                                            borderRadius: "20px",
                                            border: selectedType === type ? "2px solid var(--md-sys-color-primary)" : "1px solid var(--liquid-border)",
                                            fontSize: "0.875rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "all 0.3s var(--motion-easing-standard)",
                                            background: selectedType === type ? "var(--md-sys-color-primary)" : "var(--liquid-bg)",
                                            color: selectedType === type ? "var(--md-sys-color-on-primary)" : "var(--md-sys-color-on-surface)"
                                        },
                                        children: type
                                    }, type, false, {
                                        fileName: "[project]/src/app/opportunities/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    marginBottom: "0.75rem",
                                    color: "var(--md-sys-color-on-surface-variant)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px"
                                },
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "0.5rem",
                                    flexWrap: "wrap"
                                },
                                children: allSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>toggleSkill(skill),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        style: {
                                            padding: "0.375rem 0.875rem",
                                            borderRadius: "16px",
                                            fontSize: "0.8rem",
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            transition: "all 0.3s var(--motion-easing-standard)",
                                            border: selectedSkills.includes(skill) ? "2px solid var(--md-sys-color-primary)" : "1px solid var(--liquid-border)",
                                            background: selectedSkills.includes(skill) ? "var(--md-sys-color-primary-container)" : "var(--liquid-bg)",
                                            color: selectedSkills.includes(skill) ? "var(--md-sys-color-on-primary-container)" : "var(--md-sys-color-on-surface)"
                                        },
                                        children: [
                                            selectedSkills.includes(skill) && "✓ ",
                                            skill
                                        ]
                                    }, skill, true, {
                                        fileName: "[project]/src/app/opportunities/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "1rem",
                            borderTop: "1px solid var(--md-sys-color-outline-variant)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.875rem",
                                    color: "var(--md-sys-color-on-surface-variant)",
                                    fontWeight: 500
                                },
                                children: [
                                    filteredOpportunities.length,
                                    " ",
                                    filteredOpportunities.length === 1 ? "opportunity" : "opportunities",
                                    " found"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "text",
                                onClick: clearFilters,
                                style: {
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    padding: "0.5rem 1rem"
                                },
                                children: "Clear Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/app/opportunities/page.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/opportunities/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            filteredOpportunities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                style: {
                    textAlign: "center",
                    padding: "4rem 2rem",
                    color: "var(--md-sys-color-on-surface-variant)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "3rem",
                            marginBottom: "1rem"
                        },
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "1.5rem",
                            marginBottom: "0.5rem"
                        },
                        children: "No opportunities found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1rem"
                        },
                        children: "Try adjusting your search or filters to find what you're looking for."
                    }, void 0, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/opportunities/page.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: "2rem"
                },
                children: filteredOpportunities.map((opp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layoutId: opp.id,
                        onClick: ()=>setSelectedId(opp.id),
                        style: {
                            cursor: "pointer",
                            height: "100%"
                        },
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            variant: "elevated",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                pointerEvents: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "1rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                padding: "4px 12px",
                                                borderRadius: "16px",
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                backgroundColor: opp.type === "Internship" ? "var(--md-sys-color-tertiary-container)" : "var(--md-sys-color-primary-container)",
                                                color: opp.type === "Internship" ? "var(--md-sys-color-on-tertiary-container)" : "var(--md-sys-color-on-primary-container)",
                                                marginBottom: "0.5rem"
                                            },
                                            children: opp.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            style: {
                                                fontSize: "1.25rem",
                                                marginBottom: "0.5rem",
                                                lineHeight: 1.4
                                            },
                                            children: opp.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            style: {
                                                fontSize: "0.875rem",
                                                color: "var(--md-sys-color-secondary)",
                                                fontWeight: 500
                                            },
                                            children: opp.organization
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    style: {
                                        fontSize: "0.95rem",
                                        lineHeight: 1.5,
                                        marginBottom: "1.5rem",
                                        flex: 1,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    },
                                    children: opp.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                        marginBottom: "1.5rem"
                                    },
                                    children: [
                                        opp.skills.slice(0, 3).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    padding: "2px 8px",
                                                    borderRadius: "4px",
                                                    border: "1px solid var(--md-sys-color-outline, #79747E)",
                                                    color: "var(--md-sys-color-on-surface-variant)"
                                                },
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/src/app/opportunities/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 21
                                            }, this)),
                                        opp.skills.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.75rem",
                                                padding: "2px 8px",
                                                color: "var(--md-sys-color-secondary)"
                                            },
                                            children: [
                                                "+",
                                                opp.skills.length - 3,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "auto",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "var(--md-sys-color-secondary)"
                                            },
                                            children: [
                                                "Deadline: ",
                                                opp.deadline
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "glass",
                                            style: {
                                                pointerEvents: "auto",
                                                fontSize: "0.9rem",
                                                fontWeight: 600
                                            },
                                            children: "Read More"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/opportunities/page.tsx",
                            lineNumber: 329,
                            columnNumber: 15
                        }, this)
                    }, opp.id, false, {
                        fileName: "[project]/src/app/opportunities/page.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/opportunities/page.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setSelectedId(null),
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0,0,0,0.6)",
                                backdropFilter: "blur(4px)",
                                zIndex: 40
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/opportunities/page.tsx",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 50,
                                pointerEvents: "none"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$opportunities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opportunities"].filter((item)=>item.id === selectedId).map((opp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: selectedId,
                                    style: {
                                        width: "90%",
                                        maxWidth: "700px",
                                        maxHeight: "85vh",
                                        overflowY: "auto",
                                        background: "var(--md-sys-color-surface)",
                                        borderRadius: "24px",
                                        padding: "2rem",
                                        pointerEvents: "auto",
                                        position: "relative",
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "glass",
                                            onClick: ()=>setSelectedId(null),
                                            style: {
                                                position: "absolute",
                                                top: "1rem",
                                                right: "1rem",
                                                minWidth: "auto",
                                                padding: "8px",
                                                borderRadius: "50%",
                                                width: "36px",
                                                height: "36px"
                                            },
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                padding: "4px 12px",
                                                borderRadius: "16px",
                                                fontSize: "0.85rem",
                                                fontWeight: 600,
                                                backgroundColor: opp.type === "Internship" ? "var(--md-sys-color-tertiary-container)" : "var(--md-sys-color-primary-container)",
                                                color: opp.type === "Internship" ? "var(--md-sys-color-on-tertiary-container)" : "var(--md-sys-color-on-primary-container)",
                                                marginBottom: "1rem"
                                            },
                                            children: opp.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            style: {
                                                fontSize: "2rem",
                                                marginBottom: "0.5rem",
                                                color: "var(--md-sys-color-on-surface)"
                                            },
                                            children: opp.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            style: {
                                                fontSize: "1.1rem",
                                                color: "var(--md-sys-color-secondary)",
                                                marginBottom: "2rem",
                                                fontWeight: 500
                                            },
                                            children: opp.organization
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                marginBottom: "2rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.2rem",
                                                        marginBottom: "0.5rem",
                                                        fontWeight: 600
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        lineHeight: 1.7,
                                                        color: "var(--md-sys-color-on-surface-variant)"
                                                    },
                                                    children: opp.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "2rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.2rem",
                                                        marginBottom: "0.5rem",
                                                        fontWeight: 600
                                                    },
                                                    children: "Required Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        gap: "0.5rem"
                                                    },
                                                    children: opp.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.9rem",
                                                                padding: "4px 12px",
                                                                borderRadius: "6px",
                                                                border: "1px solid var(--md-sys-color-outline, #79747E)",
                                                                color: "var(--md-sys-color-on-surface-variant)"
                                                            },
                                                            children: skill
                                                        }, skill, false, {
                                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                paddingTop: "1rem",
                                                borderTop: "1px solid var(--md-sys-color-outline-variant)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--md-sys-color-secondary)"
                                                    },
                                                    children: [
                                                        "Deadline: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: opp.deadline
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/opportunities/${opp.id}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "filled",
                                                        style: {
                                                            padding: "12px 24px",
                                                            fontSize: "1rem"
                                                        },
                                                        children: "Apply Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/opportunities/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/opportunities/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, opp.id, true, {
                                    fileName: "[project]/src/app/opportunities/page.tsx",
                                    lineNumber: 499,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/opportunities/page.tsx",
                            lineNumber: 482,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/opportunities/page.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/opportunities/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(OpportunitiesPage, "xmjQvaEyWF8OG2FX9tBCAptSa2w=");
_c = OpportunitiesPage;
var _c;
__turbopack_context__.k.register(_c, "OpportunitiesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7863bf5d._.js.map